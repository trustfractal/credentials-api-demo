import React, { useState, useEffect } from "react";
import { Contract } from "ethers";
import styled from "styled-components";

import contractABI from "../../assets/abi.json";
import { CredentialResponse } from "../../lib/api";
import { defaultStepStatus, StatusMessage, GOERLI_CHAIN_ID } from "../../lib/utils";
import { Card, Button } from "../ui";
import useWeb3 from "../../hooks/web3";
import Step from "./Step";

const CONTRACT_ADDRESS = "0xe951816A54aB27Cf76c22448bEc49a2765940E18";
const DEFAULT_PROOF_STR = "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
const DEFAULT_APPROVED_AT = Math.floor(Date.now() / 1000); // now
const DEFAULT_VALID_UNTIL = DEFAULT_APPROVED_AT + (24 * 60 * 60); // now + 1 day
const DEFAULT_FRACTAL_ID = "0x0000000000000000000000000000000000000000000000000000000000000000";

const CardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const InfoTextContainer = styled.div`
  align-self: center;
  opacity: 0.7;
`;

const StepListContainer = styled.ol`
  list-style: decimal;
  list-style-position: inside;
  margin-top: 12px;
  padding: 0px 12px;
`;

const TransactionSuccessContainer = styled.a`
  margin-left: 10px;
`;

export const Transact = ({ credentialResponse, setStatusMessage }:
  { credentialResponse: CredentialResponse | undefined, setStatusMessage: (s: StatusMessage) => void }) => {
  const { active, chainId, library } = useWeb3();

  const [txStatus, setTxStatus] = useState(defaultStepStatus);
  const [credentialStatus, setCredentialstatus] = useState(defaultStepStatus);

  useEffect(() => {
    if (credentialResponse?.proof) {
      setCredentialstatus((status) => ({ ...status, error: false, data: credentialResponse }));
    } else {
      setCredentialstatus((status) => ({ ...status, error: true }));
    }
  }, [credentialResponse]);

  let proof = DEFAULT_PROOF_STR, validUntil = DEFAULT_VALID_UNTIL, approvedAt = DEFAULT_APPROVED_AT, fractalId = DEFAULT_FRACTAL_ID;
  if (credentialResponse?.proof) {
    ({ proof, validUntil, approvedAt, fractalId } = credentialResponse);
  }

  const { tx: transaction } = txStatus.data;

  const transact = async () => {
    setTxStatus((status) => ({ ...status, loading: true }));
    if (chainId !== GOERLI_CHAIN_ID) {
      await switchToGoerliChain();
    }

    const contract = new Contract(CONTRACT_ADDRESS, contractABI, library?.getSigner());

    try {
      const tx = await contract.main(proof, validUntil, approvedAt, fractalId);
      setTxStatus((status) => ({ ...status, loading: false, error: undefined, data: { tx } }));
      setStatusMessage({ status: "TX_SUCCESS" });
    } catch (err) {
      setTxStatus((status) => ({ ...status, loading: false, error: err }));
      setStatusMessage({ status: "TX_ERROR" });
    }
  };

  const getTransactionURL = () => {
    if (!transaction) return "";
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `https://goerli.etherscan.io/tx/${transaction.hash}`;
  };

  const switchToGoerliChain = () => {
    if (library && library.provider) {
      return library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${GOERLI_CHAIN_ID}` }],
      });
    }
    return Promise.reject();
  };

  const transactionSuccessElem = (
    <TransactionSuccessContainer href={getTransactionURL()} target="_blank" rel="noreferrer">
      See on Etherscan
    </TransactionSuccessContainer>
  );

  return (
    <Card title="Buy token" width="40%">
      <CardBodyContainer>
        <InfoTextContainer>Make a transaction using your Fractal proof</InfoTextContainer>
        <StepListContainer>
          <Step label="Use Fractal credential proof" status={credentialStatus} />
          <Step label="Make transaction" status={txStatus} onSuccessElem={transactionSuccessElem} />
        </StepListContainer>
        <Button disabled={!active} onClick={transact}>Make transaction</Button>
      </CardBodyContainer>
    </Card>
  );
};

export default Transact;
