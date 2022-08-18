import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { CredentialResponse, fetchCredential } from "../../lib/api";
import { defaultStepStatus, StatusMessage } from "../../lib/utils";
import useWeb3 from "../../hooks/web3";
import { Button, Card } from "../ui";
import Step from "./Step";

const MESSAGE = `I authorize Defistarter (GKYNcHbtCZ6S315O8zBTgxptvMqy4LIPsnI4EEmj_8c) to get a proof from Fractal that:
- I passed KYC level plus
- I am not a citizen of the following countries: Germany (DE)
- I am not a resident of the following countries: Canada (CA), United States of America (US)`;

const CardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: scroll;
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

export const Proof = ({
  setCredentialResponse,
  setStatusMessage,
}: {
  setCredentialResponse: (c: CredentialResponse) => void;
  setStatusMessage: (s: StatusMessage) => void;
}) => {
  const { account, active, library } = useWeb3();

  const [signatureStatus, setSignatureStatus] = useState(defaultStepStatus);
  const [apiCallStatus, setApiCallStatus] = useState(defaultStepStatus);

  const { signature } = signatureStatus.data;

  useEffect(() => {
    if (signature) {
      void fetchProof();
    }
  }, [signature]);

  const signMessage = async () => {
    if (library && account) {
      setSignatureStatus((status) => ({ ...status, loading: true }));
      try {
        const signature = await library.getSigner(account).signMessage(MESSAGE);
        setSignatureStatus((status) => ({
          ...status,
          loading: false,
          error: undefined,
          data: { signature },
        }));
      } catch (error) {
        setSignatureStatus((status) => ({
          ...status,
          loading: false,
          error: error,
        }));
      }
    }
  };

  const fetchProof = async () => {
    if (!signature) {
      return;
    }
    setApiCallStatus((status) => ({ ...status, loading: true }));
    try {
      const res = await fetchCredential(MESSAGE, signature as string);
      const body = (await res.json()) as CredentialResponse;
      setCredentialResponse(body);
      setApiCallStatus((status) => ({
        ...status,
        loading: false,
        error: res.status !== 200,
        data: { body, status: res.status },
      }));
      updateStatusMessage(res.status);
    } catch (err) {
      setApiCallStatus((status) => ({ ...status, loading: false, error: err }));
    }
  };

  const updateStatusMessage = (status) => {
    setStatusMessage({
      status: status === 200 ? "APPROVED" : "NOT_APPROVED",
      data: { address: account },
    });
  };

  return (
    <Card title="Credential proof" width="40%">
      <CardBodyContainer>
        <InfoTextContainer>Get a proof that you are KYCed.</InfoTextContainer>
        <StepListContainer>
          <Step
            label="Sign data sharing authorization message"
            status={signatureStatus}
          />
          <Step label="Fetch credential proof" status={apiCallStatus} />
        </StepListContainer>
        <Button disabled={!active} onClick={signMessage}>
          Get Fractal proof
        </Button>
      </CardBodyContainer>
    </Card>
  );
};

export default Proof;
