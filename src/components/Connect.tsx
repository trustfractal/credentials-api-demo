import React from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { providers } from "ethers";

const GOERLI_CHAIN_ID = 5;

const injectedConnector = new InjectedConnector({});

export const Connect = () => {
  const web3 = useWeb3React<providers.Web3Provider>();
  const { activate, active, account, chainId, deactivate } = web3;

  const connect = async () => {
    try {
      // activate(connector, errorCallback, throwError)
      await activate(injectedConnector, undefined, true);
    } catch (error) {
      console.log(error);
    }
  };

  const switchToGoerliChain = () => {
    if (library && library.provider) {
      void library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${GOERLI_CHAIN_ID}` }],
      });
    }
  };

  return (
    <div>
      {!active ?
        <button onClick={connect}>Connect wallet</button> :
        <button onClick={deactivate}>Disconnect wallet</button>
      }
      {active &&
        <div>
          <p>Account: {account}</p>
          <p>Görli chain: {chainId === GOERLI_CHAIN_ID ? "🟢" : "🔴"}</p>
          {active && (chainId !== GOERLI_CHAIN_ID) &&
            <button onClick={switchToGoerliChain}>
              Switch to Görli chain
            </button>
          }
        </div>
      }
    </div>
  );
};

export default Connect;
