import React, { useEffect } from "react";
import styled from "styled-components";
import { InjectedConnector } from "@web3-react/injected-connector";

import useWeb3 from "../../hooks/web3";
import { Button, Card, Text } from "../ui";
import { TextSizes } from "../ui/Text";
import { CenteredElement } from "../ui/CenteredElement";
import { GOERLI_CHAIN_ID } from "../../lib/constants";

const injectedConnector = new InjectedConnector({});

const ConnectContainer = styled.div``;

const CardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Connect = () => {
  const { activate, active, account, chainId, deactivate, library } = useWeb3();

  useEffect(() => {
    if (active && chainId !== GOERLI_CHAIN_ID) {
      void switchToGoerliChain();
    }
  }, [active, chainId]);

  const connect = async () => {
    try {
      // activate(connector, errorCallback, throwError)
      await activate(injectedConnector, undefined, true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const switchToGoerliChain = () => {
    if (library && library.provider && library.provider.request) {
      void library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${GOERLI_CHAIN_ID}` }],
      });
    }
  };

  const shortAddress = account
    ? `${account.substring(0, 5)}...${account.substring(38)}`
    : "";

  return (
    <ConnectContainer>
      <Card title="My wallet">
        <CardBodyContainer>
          <Text size={TextSizes.EXTRA_SMALL}>
            <strong>Account:</strong> {account ? shortAddress : "Not connected"}
          </Text>
          <Text size={TextSizes.EXTRA_SMALL}>
            <strong>Görli chain:</strong>{" "}
            {chainId === GOERLI_CHAIN_ID ? "🟢" : "🔴"}
          </Text>
          <Text size={TextSizes.EXTRA_SMALL}>
            If you have a wallet address already in the Registry, connect that
            one!
          </Text>
          <CenteredElement>
            <br />
            {!active ? (
              <Button width="50%" onClick={connect as () => void}>
                Connect wallet
              </Button>
            ) : (
              <Button width="50%" onClick={deactivate}>
                Disconnect wallet
              </Button>
            )}
          </CenteredElement>
        </CardBodyContainer>
      </Card>
    </ConnectContainer>
  );
};

export default Connect;
