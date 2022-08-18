import React, { useState, useEffect } from "react";
import { Contract } from "ethers";
import styled from "styled-components";

import fractalRegistryABI from "../../assets/fractalRegistryABI.json";
import { FractalRegistry } from "../../../typechain-types";
import { Card } from "../ui";
import useWeb3 from "../../hooks/web3";
import { unreachable } from "../../lib/types";

const fractalRegistry = new Contract(
  "0x4D9DE1bb481B9dA37A7a7E3a07F6f60654fEe7BB",
  fractalRegistryABI,
) as FractalRegistry;

const CardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ONE_SECOND = 1000;

export const Transact = () => {
  const { account, library } = useWeb3();
  const [userInList, setUserInList] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (!account || !library) {
      setUserInList(undefined);
      return () => undefined;
    }

    const connectRegistry = fractalRegistry.connect(library.getSigner());

    // The result is not used, I just want to use the await syntax.
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const interval = setInterval(async () => {
      const fractalId = await connectRegistry.getFractalId(account);
      setUserInList(await connectRegistry.isUserInList(fractalId, "plus"));
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
    <Card title="Purchase eligibility" width="40%">
      <CardBodyContainer>
        {content}
      </CardBodyContainer>
    </Card>
  );
};

export default Transact;
