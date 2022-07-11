import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract, providers } from "ethers";

import contractABI from "../assets/abi.json";
import { CredentialResponse } from "../lib/api";
import { defaultStepStatus } from "../lib/utils";

const CONTRACT_ADDRESS = "0xe951816A54aB27Cf76c22448bEc49a2765940E18";
const DEFAULT_PROOF_STR = "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
const DEFAULT_APPROVED_AT = Math.floor(Date.now() / 1000); // now
const DEFAULT_VALID_UNTIL = DEFAULT_APPROVED_AT + (24 * 60 * 60); // now + 1 day
const DEFAULT_FRACTAL_ID = "0x0000000000000000000000000000000000000000000000000000000000000000";

export const Transact = ({ credentialResponse }: { credentialResponse: CredentialResponse | undefined }) => {
  const web3 = useWeb3React<providers.Web3Provider>();
  const { library } = web3;

  const [txStatus, setTxStatus] = useState(defaultStepStatus);

  let proof = DEFAULT_PROOF_STR, validUntil = DEFAULT_VALID_UNTIL, approvedAt = DEFAULT_APPROVED_AT, fractalId = DEFAULT_FRACTAL_ID;
  if (credentialResponse) {
    ({ proof, validUntil, approvedAt, fractalId } = credentialResponse);
  }

  const { tx: transaction } = txStatus.data;

  const transact = async () => {
    setTxStatus((status) => ({ ...status, loading: true }));
    const contract = new Contract(CONTRACT_ADDRESS, contractABI, library?.getSigner());

    try {
      const tx = await contract.main(proof, validUntil, approvedAt, fractalId);
      setTxStatus((status) => ({ ...status, loading: false, data: { tx } }));
    } catch (err) {
      console.log(err);
      setTxStatus((status) => ({ ...status, loading: false, error: err }));
    }
  };

  const getTransactionURL = () => (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `https://goerli.etherscan.io/tx/${transaction.hash}`
  );

  return (
    <div>
      <button onClick={transact}>Make transaction</button>
      {transaction &&
        <div>
          <a href={getTransactionURL()} target="_blank" rel="noreferrer">See on Etherscan</a>
        </div>
      }
    </div>
  );
};

export default Transact;
