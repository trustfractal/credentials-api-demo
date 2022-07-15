import React from "react";
import styled from "styled-components";

import { StatusMessage as StatusMessageT } from "../../lib/utils";
import { KYC_LINK } from "../../lib/config";
import { Text } from "../ui";
import { TextSizes, TextWeights } from "../ui/Text";

const getMessage = (statusMessage: StatusMessageT): string | React.ReactNode => {
  const { status, data } = statusMessage;
  switch (status) {
    case "APPROVED":
      return (
        <>
          <strong>Thank you!</strong><br />Now this page knows that, as the owner of address {data.address},
          you&apos;re approved for the plus KYC level, are not a citizen of Germany, and are not a resident
          of Canada or the United States.<br /><strong>Your transaction will succeed.</strong>
        </>
      );
    case "NOT_APPROVED":
      return <strong>It seems your address {data.address} isn&apos;t associated with an approved Fractal user.</strong>;
    case "TX_SUCCESS":
      return <strong>Your transaction succeeded!</strong>;
    case "TX_ERROR":
      return <strong>Your transaction failed.</strong>;

    default:
      return "";
  }
};

const StatusMessageContainer = styled.div``;

const KYCLink = styled.a`
  color: var(--c-orange);
`;

const StatusMessageText = styled.div``;

export const StatusMessage = ({ status }: { status: StatusMessageT }) => (
  <StatusMessageContainer>
    <StatusMessageText>
      <Text size={TextSizes.NORMAL}>
        {getMessage(status)}
      </Text>
    </StatusMessageText>
    {(status.status === "NOT_APPROVED" || status.status === "TX_ERROR") &&
      <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
        You can <KYCLink href={KYC_LINK} target="_blank" rel="noreferrer">verify yourself with Fractal</KYCLink>.
      </Text>
    }
  </StatusMessageContainer>
);

export default StatusMessage;
