/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { OracleRouter } from "./OracleRouter";

export class OracleRouterFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleRouter {
    return new Contract(address, _abi, signerOrProvider) as OracleRouter;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "oracle",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isInverse",
            type: "bool",
          },
        ],
        internalType: "struct OracleRouter.Route[]",
        name: "path_",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "collateral",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dumpPath",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "oracle",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isInverse",
            type: "bool",
          },
          {
            internalType: "string",
            name: "underlyingAsset",
            type: "string",
          },
          {
            internalType: "string",
            name: "collateral",
            type: "string",
          },
        ],
        internalType: "struct OracleRouter.RouteDump[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPath",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "oracle",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isInverse",
            type: "bool",
          },
        ],
        internalType: "struct OracleRouter.Route[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isMarketClosed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isTerminated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "priceTWAPLong",
    outputs: [
      {
        internalType: "int256",
        name: "newPrice",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "priceTWAPShort",
    outputs: [
      {
        internalType: "int256",
        name: "newPrice",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "source",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingAsset",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];