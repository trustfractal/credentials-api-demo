import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Card, Text } from "../ui";
import { TextSizes as _TextSizes } from "../ui/Text";
import { CenteredElement } from "../ui/Layout/styles/CenteredElement";
import fractalRegistry from "../../contracts/FractalRegistry";
import useWeb3 from "../../hooks/web3";
import { unreachable } from "../../lib/types";

const CardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;



const NewLine = () => <br />;

const ONE_SECOND = 1000;

export const PurchaseEligibility = () => {
  const { account, library } = useWeb3();
  const [userInList, setUserInList] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (!account || !library) {
      setUserInList(undefined);
      return () => undefined;
    }

    const connectRegistry = fractalRegistry.connect(library.getSigner());

    const interval = setInterval(() => {
      connectRegistry
        .getFractalId(account)
        .then((fractalId) => connectRegistry.isUserInList(fractalId, "plus"))
        .then(setUserInList);
    }, ONE_SECOND);

    return () => clearInterval(interval);
  }, [account]);

  let content;
  if (!account) {
    content = <>Connect your wallet. 👛</>;
  } else if (userInList === undefined) {
    content = <>Checking chain state... ⏱</>;
  } else if (userInList === false) {
    content = <>Not able to make purchase. ❌</>;
  } else if (userInList === true) {
    content = <>Cleared for purchase! ✅</>;
  } else {
    unreachable(userInList);
  }

  return (
    <Card title="Purchase eligibility" width="75%">
      <CardBodyContainer>
        <Text size={_TextSizes.EXTRA_SMALL}>
          Based on the KYC Status, your eligibility is ...
        </Text>{" "}
        <NewLine />
        <CenteredElement>{content}</CenteredElement>
      </CardBodyContainer>
    </Card>
  );
};

export default PurchaseEligibility;
