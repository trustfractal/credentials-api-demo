import React from "react";

import Web3Provider from "./src/components/common/Web3Provider";

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return <Web3Provider>{element}</Web3Provider>;
};
