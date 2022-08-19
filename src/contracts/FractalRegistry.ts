import { Contract } from "ethers";
import { FractalRegistry } from "./types/FractalRegistry";

export type { FractalRegistry };

export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_root",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "addDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "fractalId",
        type: "bytes32",
      },
    ],
    name: "addUserAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "userId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "listId",
        type: "string",
      },
    ],
    name: "addUserToList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getFractalId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "userId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "listId",
        type: "string",
      },
    ],
    name: "isUserInList",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "removeDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "removeUserAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "userId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "listId",
        type: "string",
      },
    ],
    name: "removeUserFromList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const address = "0x4D9DE1bb481B9dA37A7a7E3a07F6f60654fEe7BB";

export const fractalRegistry = new Contract(address, abi) as FractalRegistry;

export default fractalRegistry;
