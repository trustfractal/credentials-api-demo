import React, { useState } from "react";

import { CredentialResponse } from "../lib/api";
import { StatusMessage as StatusMessageT } from "../lib/utils";
import Connect from "../components/Connect";
import Transact from "../components/Transact";
import Proof from "../components/Proof";
import StatusMessage from "../components/StatusMessage";
import useWeb3 from "../hooks/web3";

const IndexPage = () => {
  const { active } = useWeb3();
  const [credentialResponse, setCredentialResponse] = useState<CredentialResponse | undefined>(undefined);
  const [statusMessage, setStatusMessage] = useState<StatusMessageT>({ status: "NO_MESSAGE" });

  return (
    <main>
      <h1>
        Action Page
      </h1>
      <div>
        <Connect />
      </div>
      {active &&
        <>
          <div>
            <Proof setCredentialResponse={setCredentialResponse} setStatusMessage={setStatusMessage} />
          </div>
          <div>
            <Transact credentialResponse={credentialResponse} setStatusMessage={setStatusMessage} />
          </div>
        </>
      }
      <div>
        <StatusMessage status={statusMessage} />
      </div>
    </main>
  );
};
// const [messageSignatureLoading, setmessageSignatureLoading] = useState(false);
// const [messageSignature, setMessageSignature] = useState<string | undefined>(undefined);
// const [apiCallLoading, setApiCallLoading] = useState(false);
// const [apiCallResponseBody, setApiCallResponseBody] = useState<CredentialResponse | undefined>(undefined);
// const [apiCallResponseStatus, setApiCallResponsestatus] = useState<number | undefined>(undefined);
// const [_apiCallError, setApiCallError] = useState<Error | undefined>(undefined);
// const [txLoading, setTxLoading] = useState(false);
// const [tx, setTx] = useState<any>(undefined);
// const [txConfirmed, setTxConfirmed] = useState(false);
// const [_txError, setTxError] = useState<Error | undefined>(undefined);

// const getProof = async () => {
//   const sig = await getSignature();
//   if (!sig) {
//     return;
//   }
//   const proof = await fetchProof(sig);
//   if (!proof) {
//     return;
//   }
//   await transact(proof);
// };

/* {active && account &&
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
                  Waiting for confirmations {txConfirmed ? "✅" : "⏱"}
                  {txConfirmed &&
                    <p>
                      <a href={getTransactionURL()} target="_blank" rel="noreferrer">See on Etherscan</a>
                    </p>
                  }
                </li>
              }
            </>
          }
        </ol>
      </div>
    } */

export default IndexPage;
