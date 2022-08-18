import React from "react";
import styled from "styled-components";

import useWeb3 from "../../hooks/web3";
import { Button, Card as OriginalCard, Text } from "../ui";
import { TextSizes as _TextSizes } from "../ui/Text";
import OriginalStep from "./Step";
import useMiniBackoffice from "../../hooks/miniBackoffice";
import { unreachable } from "../../lib/types";

const Card = styled(OriginalCard)`
  color: white;
  background-color: black;
`;

const _Step = styled(OriginalStep)`
  opacity: 1;
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
`;

const _StepListContainer = styled.ol`
  list-style: decimal;
  list-style-position: inside;
  margin-top: 12px;
  padding: 0px 12px;
`;

export const MiniBackoffice = (
) => {
  const { account, chainId, library } = useWeb3();
  const backoffice = useMiniBackoffice(account, chainId, library);

  let content;
  switch (backoffice.status) {
    case "Unconfigured":
      content = <Text>Please connect your wallet first.</Text>;
      break;
    case "UnregisteredUser":
      content = <>
        <Text>UnregisteredUser</Text>
        <Button onClick={backoffice.registerUser}>Register</Button>
      </>;
      break;
    case "KYCAbsent":
      content = <>
        <Text>KYCAbsent</Text>
        <Button onClick={backoffice.approveUser}>Approve</Button>
      </>;
      break;
    case "KYCApproved":
      content = <>
        <Text>KYCApproved</Text>
        <Button onClick={backoffice.disapproveUser}>Disapprove</Button>
      </>;
      break;
    case "Loading":
      content = (<Text>Working...</Text>);
      break;
    case "Error":
      content = (<Text>Something went wrong! See the console got more information.</Text>);
      break;
    default:
      unreachable(backoffice);
  }

  return (
    <Card title="Mini Backoffice" width="40%">
      <CardBodyContainer>
        <InfoTextContainer>Simulate Fractal server&apos;s verification activity.</InfoTextContainer>
        {content}
        {/* <Text size={TextSizes.EXTRA_SMALL}><strong>In registry:</strong> {account ? shortAddress : "Not connected"}</Text>
        <Text size={TextSizes.EXTRA_SMALL}><strong>KYC passed:</strong> {account ? shortAddress : "Not connected"}</Text>
        {
            active
            ?<Button disabled={!active} onClick={signMessage}>Get active proof</Button>
            :<Button disabled={!active} onClick={signMessage}>Get deact proof</Button>
        } */}

      </CardBodyContainer>
    </Card>
  );
};

export default MiniBackoffice;
