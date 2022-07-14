import React, { useEffect } from "react";
import styled from "styled-components";
import { InjectedConnector } from "@web3-react/injected-connector";

import useWeb3 from "../../hooks/web3";
import { Button, Card, Text } from "../ui";
import { TextSizes } from "../ui/Text";
import { GOERLI_CHAIN_ID } from "../../lib/constants";

const injectedConnector = new InjectedConnector({});

const ConnectContainer = styled.div``;

const CardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const InfoTextContiner = styled.div`
  align-self: center;
  margin-bottom: -20px;
  opacity: 0.7;
`;

export const Connect = () => {
  const { activate, active, account, chainId, deactivate, library } = useWeb3();

  useEffect(() => {
    const checkChain = () => {
      if (active && chainId !== GOERLI_CHAIN_ID) {
        void switchToGoerliChain();
      }
    };

    checkChain();
  }, [active]);

  const connect = async () => {
    try {
      // activate(connector, errorCallback, throwError)
      await activate(injectedConnector, undefined, true);
    } catch (error) {
      console.error(error);
    }
  };

  const switchToGoerliChain = () => {
    if (library && library.provider) {
      return library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${GOERLI_CHAIN_ID}` }],
      });
    }
    return Promise.reject();
  };

  const shortAddress = account ? `${account.substring(0, 5)}...${account.substring(38)}` : "";

  return (
    <ConnectContainer>
      <Card width="400px" height="200px" title="My wallet">
        <CardBodyContainer>
          <Text size={TextSizes.EXTRA_SMALL}><strong>Account:</strong> {account ? shortAddress : "Not connected"}</Text>
          <Text size={TextSizes.EXTRA_SMALL}><strong>Görli chain:</strong> {chainId === GOERLI_CHAIN_ID ? "🟢" : "🔴"}</Text>
          <InfoTextContiner>
            <Text size={TextSizes.EXTRA_EXTRA_SMALL}>If you have an approved address, connect that one!</Text>
          </InfoTextContiner>
          {!active ?
            <Button onClick={connect}>Connect wallet</Button> :
            <Button onClick={deactivate}>Disconnect wallet</Button>
          }
        </CardBodyContainer>
      </Card>
    </ConnectContainer>
  );
};

export default Connect;
