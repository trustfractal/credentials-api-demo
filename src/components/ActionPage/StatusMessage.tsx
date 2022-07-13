import React from "react";
import styled from "styled-components";

import { StatusMessage as StatusMessageT } from "../../lib/utils";

const KYC_LINK = "https://app.fractal.id/authorize?client_id=a14fc943a00b0711611691da42c956939ff8a9885e38f4a64eb35523ee807873&redirect_uri=https%3A%2F%2Fdemo.fractal.id%2Fapi%2Foauth%2Fcallback&response_type=code&scope=contact%3Aread%20verification.plus%3Aread%20verification.plus.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread%20verification.wallet%3Aread%20verification.wallet.details%3Aread";

const getMessage = (statusMessage: StatusMessageT) => {
  const { status, data } = statusMessage;
  switch (status) {
    case "APPROVED":
      return `Thank you!\nNow this page knows that, as the owner of address ${data.address as string}, you're approved for the plus KYC level, are not a citizen of Germany, and are not a resident of Canada or the United States!\nYour transaction will succeed.`;
    case "NOT_APPROVED":
      return `It seems your address ${data.address as string} isn't associated with an approved Fractal user.`;
    case "TX_SUCCESS":
      return "Your transaction succeeded!";
    case "TX_ERROR":
      return "Your transaction failed.";

    default:
      return "";
  }
};

const StatusMessageContainer = styled.div``;

const KYCLink = styled.a`
  color: var(--c-orange);
`;

const StatusMessageText = styled.p`
  // break on \n
  white-space: pre-line;
`;

export const StatusMessage = ({ status }: { status: StatusMessageT }) => (
  <StatusMessageContainer>
    <StatusMessageText>{getMessage(status)}</StatusMessageText>
    {(status.status === "NOT_APPROVED" || status.status === "TX_ERROR") &&
      <p>
        <small>
          You can <KYCLink href={KYC_LINK} target="_blank" rel="noreferrer">verify yourself with Fractal</KYCLink>.
        </small>
      </p>
    }
  </StatusMessageContainer>
);

export default StatusMessage;
