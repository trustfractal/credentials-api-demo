import React from "react";
import styled from "styled-components";

import useWeb3 from "../../hooks/web3";
import { Button, Card as OriginalCard, Text } from "../ui";
import { TextSizes as _TextSizes } from "../ui/Text";
import { CenteredElement } from "../ui/Layout/styles/CenteredElement";
import useMiniBackoffice from "../../hooks/miniBackoffice";
import { unreachable } from "../../lib/types";

const Card = styled(OriginalCard)`
  color: white;
  background-color: black;
`;

const NewLine = () => <br />;

const CardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  // overflow: scroll;
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
          <Text size={_TextSizes.EXTRA_SMALL}>
            ❓ Wallet Address not found - click the button to simulate
            onboarding with Fractal.
          </Text>
          <NewLine />
          <CenteredElement>
            <Button onClick={backoffice.registerUser}>
              Add Wallet Address
            </Button>
          </CenteredElement>
        </>
      );
      break;
    case "KYCAbsent":
      content = (
        <>
          <Text size={_TextSizes.EXTRA_SMALL}>
            🚫 KYC absent - click the button to your add your wallet address to
            the KYC list.
          </Text>
          <NewLine />
          <CenteredElement>
            {" "}
            <Button onClick={backoffice.approveUser}>Add KYC</Button>
          </CenteredElement>
        </>
      );
      break;
    case "KYCApproved":
      content = (
        <>
          <Text size={_TextSizes.EXTRA_SMALL}>
            ✅ KYC Approved - click the button to remove your wallet address
            from the KYC list.
          </Text>
          <NewLine />
          <CenteredElement>
            <Button onClick={backoffice.disapproveUser}>Remove KYC</Button>
          </CenteredElement>
        </>
      );
      break;
    case "Loading":
      content = <SingleText>Updating the Registry...</SingleText>;
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
    <Card title="Actions performed by Fractal's servers" width="90%">
      <CardBodyContainer>
        <Text>
          These transaction show you how Fractal updates the DID Registry. The
          user would not be asked to do these transactions.{" "}
        </Text>{" "}
        <Text />
        <Text size={_TextSizes.EXTRA_SMALL}>
          The status of your wallet address in the Fractal DID Registry is ...
          </Text>
          <NewLine />
          <CenteredElement>{content}</CenteredElement>
        
      </CardBodyContainer>
    </Card>
  );
};

export default MiniBackoffice;
