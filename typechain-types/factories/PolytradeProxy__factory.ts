/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  PolytradeProxy,
  PolytradeProxyInterface,
} from "../PolytradeProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_registryAddr",
        type: "address",
      },
      {
        internalType: "string",
        name: "_kycLevel",
        type: "string",
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
    name: "hasPassedKYC",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000afc38038062000afc833981810160405281019062000037919062000289565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600190816200008891906200053a565b50505062000621565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000d282620000a5565b9050919050565b620000e481620000c5565b8114620000f057600080fd5b50565b6000815190506200010481620000d9565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200015f8262000114565b810181811067ffffffffffffffff8211171562000181576200018062000125565b5b80604052505050565b60006200019662000091565b9050620001a4828262000154565b919050565b600067ffffffffffffffff821115620001c757620001c662000125565b5b620001d28262000114565b9050602081019050919050565b60005b83811015620001ff578082015181840152602081019050620001e2565b60008484015250505050565b6000620002226200021c84620001a9565b6200018a565b9050828152602081018484840111156200024157620002406200010f565b5b6200024e848285620001df565b509392505050565b600082601f8301126200026e576200026d6200010a565b5b8151620002808482602086016200020b565b91505092915050565b60008060408385031215620002a357620002a26200009b565b5b6000620002b385828601620000f3565b925050602083015167ffffffffffffffff811115620002d757620002d6620000a0565b5b620002e58582860162000256565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200034257607f821691505b602082108103620003585762000357620002fa565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003c27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000383565b620003ce868362000383565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200041b620004156200040f84620003e6565b620003f0565b620003e6565b9050919050565b6000819050919050565b6200043783620003fa565b6200044f620004468262000422565b84845462000390565b825550505050565b600090565b6200046662000457565b620004738184846200042c565b505050565b5b818110156200049b576200048f6000826200045c565b60018101905062000479565b5050565b601f821115620004ea57620004b4816200035e565b620004bf8462000373565b81016020851015620004cf578190505b620004e7620004de8562000373565b83018262000478565b50505b505050565b600082821c905092915050565b60006200050f60001984600802620004ef565b1980831691505092915050565b60006200052a8383620004fc565b9150826002028217905092915050565b6200054582620002ef565b67ffffffffffffffff81111562000561576200056062000125565b5b6200056d825462000329565b6200057a8282856200049f565b600060209050601f831160018114620005b257600084156200059d578287015190505b620005a985826200051c565b86555062000619565b601f198416620005c2866200035e565b60005b82811015620005ec57848901518255600182019150602085019450602081019050620005c5565b868310156200060c578489015162000608601f891682620004fc565b8355505b6001600288020188555050505b505050505050565b6104cb80620006316000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e19f6ba214610030575b600080fd5b61004a60048036038101906100459190610203565b610060565b604051610057919061024b565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a535f5e960008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d18c216e856040518263ffffffff1660e01b81526004016100f89190610275565b602060405180830381865afa158015610115573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013991906102c6565b60016040518363ffffffff1660e01b815260040161015892919061040c565b602060405180830381865afa158015610175573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101999190610468565b9050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101d0826101a5565b9050919050565b6101e0816101c5565b81146101eb57600080fd5b50565b6000813590506101fd816101d7565b92915050565b600060208284031215610219576102186101a0565b5b6000610227848285016101ee565b91505092915050565b60008115159050919050565b61024581610230565b82525050565b6000602082019050610260600083018461023c565b92915050565b61026f816101c5565b82525050565b600060208201905061028a6000830184610266565b92915050565b6000819050919050565b6102a381610290565b81146102ae57600080fd5b50565b6000815190506102c08161029a565b92915050565b6000602082840312156102dc576102db6101a0565b5b60006102ea848285016102b1565b91505092915050565b6102fc81610290565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061034957607f821691505b60208210810361035c5761035b610302565b5b50919050565b600082825260208201905092915050565b60008190508160005260206000209050919050565b6000815461039581610331565b61039f8186610362565b945060018216600081146103ba57600181146103d057610403565b60ff198316865281151560200286019350610403565b6103d985610373565b60005b838110156103fb578154818901526001820191506020810190506103dc565b808801955050505b50505092915050565b600060408201905061042160008301856102f3565b81810360208301526104338184610388565b90509392505050565b61044581610230565b811461045057600080fd5b50565b6000815190506104628161043c565b92915050565b60006020828403121561047e5761047d6101a0565b5b600061048c84828501610453565b9150509291505056fea2646970667358221220ebb275f038eee3867cf939962ff6b7f62533edd560a66eb4858ff44eec4e3a3664736f6c63430008100033";

type PolytradeProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PolytradeProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PolytradeProxy__factory extends ContractFactory {
  constructor(...args: PolytradeProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _registryAddr: PromiseOrValue<string>,
    _kycLevel: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PolytradeProxy> {
    return super.deploy(
      _registryAddr,
      _kycLevel,
      overrides || {}
    ) as Promise<PolytradeProxy>;
  }
  override getDeployTransaction(
    _registryAddr: PromiseOrValue<string>,
    _kycLevel: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _registryAddr,
      _kycLevel,
      overrides || {}
    );
  }
  override attach(address: string): PolytradeProxy {
    return super.attach(address) as PolytradeProxy;
  }
  override connect(signer: Signer): PolytradeProxy__factory {
    return super.connect(signer) as PolytradeProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PolytradeProxyInterface {
    return new utils.Interface(_abi) as PolytradeProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PolytradeProxy {
    return new Contract(address, _abi, signerOrProvider) as PolytradeProxy;
  }
}