import { useWeb3React } from "@web3-react/core";
import { providers } from "ethers";

export const useWeb3 = () => useWeb3React<providers.Web3Provider>();

export default useWeb3;
