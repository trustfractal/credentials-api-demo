import React from "react";

import { Web3ReactProvider } from "@web3-react/core";
import { providers } from "ethers";

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument
const getLibrary = (provider: any) => new providers.Web3Provider(provider);

export const Web3Provider = ({ children }: { children: React.ReactNode }) => (
  <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
);

export default Web3Provider;
