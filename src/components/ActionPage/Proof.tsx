import React, { useState, useEffect } from "react";

import { CredentialResponse, fetchCredential } from "../../lib/api";
import { defaultStepStatus, StatusMessage, StatusMessageType } from "../../lib/utils";
import useWeb3 from "../../hooks/web3";

const MESSAGE = `I authorize Defistarter (dc3aa1910acbb7ff4d22c07e43a6926adc3a81305a9355a304410048c9a91afd) to get a proof from Fractal that:
- I passed KYC level plus
- I am not a citizen of the following countries: Germany (DE)
- I am not a resident of the following countries: Canada (CA), United States of America (US)`;

export const Proof = ({ setCredentialResponse, setStatusMessage }:
  { setCredentialResponse: (c: CredentialResponse) => void, setStatusMessage: (s: StatusMessage) => void }) => {
  const { account, library } = useWeb3();

  const [signatureStatus, setSignatureStatus] = useState(defaultStepStatus);
  const [apiCallStatus, setApiCallStatus] = useState(defaultStepStatus);

  const { signature } = signatureStatus.data;
  const { body, status } = apiCallStatus.data;

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
        setSignatureStatus((status) => ({ ...status, loading: false, data: { signature } }));
      } catch (error) {
        setSignatureStatus((status) => ({ ...status, loading: false, error: error }));
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
      const body = await res.json() as CredentialResponse;
      setCredentialResponse(body);
      setApiCallStatus((status) => ({ ...status, loading: false, data: { body, status: res.status } }));
      updateStatusMessage(res.status);
    } catch (err) {
      setApiCallStatus((status) => ({ ...status, loading: false, error: err }));
    }
  };

  const updateStatusMessage = (status) => {
    let credentialStatus: StatusMessageType = "NOT_APPROVED";
    if (status === 200) {
      credentialStatus = "APPROVED";
    }
    setStatusMessage({ status: credentialStatus, data: { address: account } });
  };

  return (
    <>
      <button onClick={signMessage}>Get Fractal proof</button>
      {signature &&
        <div>
          <pre>
            {signature}
          </pre>
        </div>
      }
      {status &&
        <div>
          <p>Status: {status}</p>
          <pre>{JSON.stringify(body, undefined, 2)}</pre>
        </div>
      }
    </>
  );
};

export default Proof;
