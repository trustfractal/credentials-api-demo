import React from "react";
import styled from "styled-components";

import useWeb3 from "../../hooks/web3";
import { Button, Card as OriginalCard, Text } from "../ui";
import { TextSizes as _TextSizes } from "../ui/Text";
import useMiniBackoffice from "../../hooks/miniBackoffice";
import { unreachable } from "../../lib/types";

const Card = styled(OriginalCard)`
  color: white;
  background-color: black;
`;

const CardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: scroll;
`;

const InfoTextContainer = styled.div`
  align-self: center;
  margin-bottom: 12px;
`;

export const SingleText = ({ children }: { children: string }) => (
  <>
    <Text>{children}</Text>
    <Text>&nbsp;</Text>
  </>
);

export const MiniBackoffice = () => {
  const { account, chainId, library } = useWeb3();
  const backoffice = useMiniBackoffice(account, chainId, library);

  let content;
  switch (backoffice.status) {
    case "Unconfigured":
      content = <SingleText>Please connect your wallet first.</SingleText>;
      break;
    case "UnregisteredUser":
      content = (
        <>
          <Text>❓ Unregistered user</Text>
          <Button onClick={backoffice.registerUser}>Register</Button>
        </>
      );
      break;
    case "KYCAbsent":
      content = (
        <>
          <Text>🚫 KYC absent</Text>
          <Button onClick={backoffice.approveUser}>Approve</Button>
        </>
      );
      break;
    case "KYCApproved":
      content = (
        <>
          <Text>✅ KYC Approved</Text>
          <Button onClick={backoffice.disapproveUser}>Disapprove</Button>
        </>
      );
      break;
    case "Loading":
      content = <SingleText>Working...</SingleText>;
      break;
    case "Error":
      content = (
        <SingleText>
          Something went wrong! See the console got more information.
        </SingleText>
      );
      break;
    default:
      unreachable(backoffice);
  }

  return (
    <Card title="Mini Backoffice" width="40%">
      <CardBodyContainer>
        <InfoTextContainer>
          Simulate Fractal server&apos;s verification activity.
        </InfoTextContainer>
        {content}
      </CardBodyContainer>
    </Card>
  );
};

export default MiniBackoffice;
