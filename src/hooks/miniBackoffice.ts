import { useState, useEffect } from "react";
import { Contract, ContractTransaction, providers } from "ethers";
import { useWeb3 } from "./web3";
import { GOERLI_CHAIN_ID } from "../lib/constants";

interface Unconfigured {
  status: "Unconfigured";
}

interface Error {
  status: "Error";
}

interface Loading {
  status: "Loading";
}

interface UnregisteredUser {
  status: "UnregisteredUser";
  registerUser: () => Promise<void>;
}

interface KYCAbsent {
  status: "KYCAbsent";
  fractalId: string;
  approveUser: () => Promise<void>;
}

interface KYCApproved {
  status: "KYCApproved";
  fractalId: string;
  disapproveUser: () => Promise<void>;
}

type Backoffice =
  | Unconfigured
  | UnregisteredUser
  | KYCAbsent
  | KYCApproved
  | Loading
  | Error;

import fractalRegistryABI from "../assets/fractalRegistryABI.json";
import selfServeRegistryOperatorABI from "../assets/selfServeRegistryOperatorABI.json";
import { keccak256 } from "ethers/lib/utils";
const KYCList = "plus";
const ZERO_USER = "0x0000000000000000000000000000000000000000000000000000000000000000";

const FractalRegistry = new Contract("0x4D9DE1bb481B9dA37A7a7E3a07F6f60654fEe7BB", fractalRegistryABI);
const SelfServeRegistryOperator = new Contract("0x75ADb60A0bD28EE81133872401A76A55E215ED47", selfServeRegistryOperatorABI);

type Loadable<T> = T | "loading" | "error" | "go_fetch";

const present = <T>(value: Loadable<T>): boolean => value !== "loading" && value !== "error" && value !== "go_fetch";

const setError = (setter: (a: any) => any) => (err: unknown) => {
  console.error(err);
  setter("error");
};

const fetchFractalId = async (signer: providers.JsonRpcSigner, account: string): Promise<string> => {
  return FractalRegistry.connect(signer).getFractalId(account);
};

const fetchKycStatus = async (signer: providers.JsonRpcSigner, fractalId: string): Promise<boolean> => {
  return FractalRegistry.connect(signer).isUserInList(fractalId, KYCList);
};

const reportFetchTo = async  <T>(reporter: (v: Loadable<T>) => any, promiser: () => Promise<T>): Promise<void> => {
  reporter("loading");
  return promiser()
    .then(reporter)
    .catch((e) => {
      console.error(e);
      reporter("error")
    });
}

const reportTransactionTo = <T>(reporter: (v: Loadable<T>) => any, promiser: () => Promise<ContractTransaction>) => async (): Promise<void> => {
  let tx: ContractTransaction;
  try {
    tx = await promiser();
  } catch (e) {
    // User rejected the transaction.
    console.error(e);
    return;
  }

  reporter("loading");

  await tx.wait();

  reporter("go_fetch");
};

export const useMiniBackoffice = (
  account: string | null | undefined,
  chainId: number | undefined,
  library: providers.Web3Provider | undefined
): Backoffice => {
  const [fractalId, setFractalId] = useState<Loadable<string>>("go_fetch");
  const [kycStatus, setKycStatus] = useState<Loadable<boolean>>("go_fetch");
  const signer = library?.getSigner();

  useEffect(() => {
    if (!signer || !account || fractalId !== "go_fetch") return;

    reportFetchTo(
      setFractalId,
      () => fetchFractalId(signer, account),
    );
  }, [account, fractalId]);

  useEffect(() => {
    if (!signer || !present(fractalId) || fractalId === ZERO_USER || kycStatus !== "go_fetch") return;

    reportFetchTo(
      setKycStatus,
      () => fetchKycStatus(signer, fractalId),
    );
  }, [account, fractalId, kycStatus]);

  if (!account || !signer || !chainId || chainId !== GOERLI_CHAIN_ID) {
    return { status: "Unconfigured" };
  }

  if (fractalId === "error" || kycStatus === "error") {
    return { status: "Error" };
  }

  if (!present(fractalId) || !present(kycStatus)) {
    return { status: "Loading" };
  }

  if (fractalId === ZERO_USER) {
    return {
      status: "UnregisteredUser",
      registerUser: reportTransactionTo(
        setFractalId,
        () => SelfServeRegistryOperator.connect(signer).addSelf(keccak256(account))
      ),
    };
  }

  if (kycStatus) {
    return {
      status: "KYCApproved",
      fractalId,
      disapproveUser: reportTransactionTo(
        setKycStatus,
        () => SelfServeRegistryOperator.connect(signer).removeSelfFromList(
          KYCList
        )
      ),
    };
  }

  return {
    status: "KYCAbsent",
    fractalId,
    approveUser: reportTransactionTo(
      setKycStatus,
      () => SelfServeRegistryOperator.connect(signer).addSelfToList(
        KYCList
      )
    ),
  };
};

export default useMiniBackoffice;
