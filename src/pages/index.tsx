import React, { useEffect, useState } from "react";

import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { Contract, providers } from "ethers";

import contractABI from "../assets/abi.json";

const GOERLI_CHAIN_ID = 5;
const CONTRACT_ADDRESS = "0xe951816A54aB27Cf76c22448bEc49a2765940E18";
const BASE_URL = "https://resource.staging.sandbox.fractal.id/credentials";

const getLibrary = (provider) => new providers.Web3Provider(provider);

const Injected = new InjectedConnector({});
const WalletConnect = new WalletConnectConnector({});

const message = `I authorize Defistarter (dc3aa1910acbb7ff4d22c07e43a6926adc3a81305a9355a304410048c9a91afd) to get a proof from Fractal that:
- I passed KYC level plus
- I am not a citizen of the following countries: Germany (DE)
- I am not a resident of the following countries: Canada (CA), United States of America (US)`;

const IndexPage = () => {
  const web3 = useWeb3React<providers.Web3Provider>();
  const { activate, active, account, chainId, deactivate: disconnectWallet, library } = web3;

  const [messageSignatureLoading, setmessageSignatureLoading] = useState(false);
  const [messageSignature, setMessageSignature] = useState<string|undefined>(undefined);
  const [apiCallLoading, setApiCallLoading] = useState(false);
  const [apiCallResponseBody, setApiCallResponseBody] = useState({});
  const [apiCallResponseStatus, setApiCallResponsestatus] = useState<number|undefined>(undefined);
  const [apiCallError, setApiCallError] = useState<Error | undefined>(undefined);
  const [txLoading, setTxLoading] = useState(false);
  const [tx, setTx] = useState<any>(undefined);
  const [txConfirmed, setTxConfirmed] = useState(false);
  const [txError, setTxError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    const connectWallet = async () => {
      try {
        await activate(Injected, undefined, true);
      } catch (error) {
        console.log(error);
      }
    }

    connectWallet();
  }, [])

  const switchToGoerliChain = () => {
    library.provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${GOERLI_CHAIN_ID}` }],
    });
  }

  const getProof = async () => {
    const sig = await getSignature();
    const proof = await fetchProof(sig);
    await transact(proof);
  }

  const getSignature = async () => {
    setmessageSignatureLoading(true);
    const signature = await library.getSigner(account).signMessage(message);
    setMessageSignature(signature);
    setmessageSignatureLoading(false);
    return signature;
  }

  const fetchProof = async (signature) => {
    setApiCallLoading(true);
    let body = {};
    try {
      const res = await fetch(apiUrl(message, signature));
      setApiCallResponsestatus(res.status);
      body = await res.json();
      setApiCallResponseBody(body);
    } catch(err) {
      setApiCallError(err);
    }
    setApiCallLoading(false);
    return body;
  }

  const apiUrl = (message, signature) => {
    const encMessage = encodeURIComponent(message);
    return `${BASE_URL}?message=${encMessage}&signature=${signature}`;
  }

  const transact = async ({
    proof,
    validUntil,
    approvedAt,
    fractalId,
  }) => {
    setTxLoading(true);

    const contract = new Contract(CONTRACT_ADDRESS, contractABI, library?.getSigner());
    try {
      const tx = await contract.main(proof, validUntil, approvedAt, fractalId);
      setTx(tx);
      await tx.wait();
      setTxConfirmed(true);
    } catch(err) {
      setTxError(err);
    }
    setTxLoading(false);
  }

  const getTransactionURL = () => (
    `https://goerli.etherscan.io/tx/${tx.hash}`
  );

  return (
    <main>
      <h1>
        Action Page
      </h1>
      <div>
        <p>Connected: {active.toString()}</p>
        <p>Account: {account}</p>
        <p>Görli chain: {chainId === GOERLI_CHAIN_ID ? "🟢" : "🔴"}</p>
        {active && (chainId !== GOERLI_CHAIN_ID) &&
          <button onClick={switchToGoerliChain}>
            Switch to Görli chain
          </button>
        }
      </div>
      {active && account &&
        <div>
          <button onClick={getProof}>
            Make transaction
          </button>
          <ol>
            {(messageSignatureLoading || !!messageSignature) &&
              <li>Sign message {messageSignatureLoading && "⏱"} {messageSignature && "✅"}
              {messageSignature && 
                <pre>
                  {messageSignature}
                </pre>
              }
              </li>
            }
            {(apiCallLoading || apiCallResponseStatus) && 
              <li>
                Credentials API call {apiCallLoading && "⏱"} {apiCallResponseStatus && "✅"}
                {(!apiCallLoading && apiCallResponseStatus) &&
                  <p>Response status: {apiCallResponseStatus}</p>
                }
                {(!apiCallLoading && apiCallResponseBody) && 
                  <pre>
                    {JSON.stringify(apiCallResponseBody, null, 2)}
                  </pre>
                }
              </li>
            }
            {(txLoading || tx) && 
              <>
                <li>
                  Broadcast transaction {txLoading && !tx && "⏱"} {tx && "✅"}
                </li>
                {tx &&
                  <li>
                    Waiting for confirmations {txConfirmed? "✅" : "⏱"}
                    {txConfirmed && 
                      <p>
                        <a href={getTransactionURL()} target="_blank">See on Etherscan</a>
                      </p>
                    }
                  </li>
                }
              </>
            }
          </ol>
        </div>
      }
    </main>
  )
}

export default function() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <IndexPage />
    </Web3ReactProvider>   
  );
}
