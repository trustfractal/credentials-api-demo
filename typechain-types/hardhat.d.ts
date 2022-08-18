/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "FractalRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FractalRegistry__factory>;
    getContractFactory(
      name: "PolytradeProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PolytradeProxy__factory>;
    getContractFactory(
      name: "SelfServeRegistryOperator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SelfServeRegistryOperator__factory>;

    getContractAt(
      name: "FractalRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FractalRegistry>;
    getContractAt(
      name: "PolytradeProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PolytradeProxy>;
    getContractAt(
      name: "SelfServeRegistryOperator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SelfServeRegistryOperator>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}