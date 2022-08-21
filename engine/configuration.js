/* 
       ___  ___    _  _  ___  _____   __  __             _         _   
 _ _  |_  )|   \  | \| || __||_   _| |  \/  | __ _  _ _ | |__ ___ | |_ 
| ' \  / / | |) | | .` || _|   | |   | |\/| |/ _` || '_|| / // -_)|  _|
|_||_|/___||___/  |_|\_||_|    |_|   |_|  |_|\__,_||_|  |_\_\\___| \__|
                                                                    
Update values accordingly
xxnft is the NFT SmartContract Address
xxmarket is the NFT MarketPlace Address
xxresell is the NFT MarketResell Address
xxnftcol is the already create NFT Collection Address
*/

/*
Private Key Encryption
Replace ethraw with your private key "0xPRIVATEKEY" (Ethereum and other EVM)
Replace hhraw with your private key "0xPRIVATEKEY" (Hardhat)
*/

import SimpleCrypto from "simple-crypto-js"
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgtjkhnkj"
const ethraw = "0xa183c2f8c9480aa8be6c59f4263923911079a0a516c90eb9c0c8c480c5a81f93";
const hhraw = "0xa183c2f8c9480aa8be6c59f4263923911079a0a516c90eb9c0c8c480c5a81f93";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(ethraw)
export const cipherHH = simpleCrypto.encrypt(hhraw)

/*
HardHat Testnet
*/

export var hhresell = "0x726798225D5729a248e864B356a1408e5cc0a80f";
export var hhnftcol = "0xDB0cE1bE9e1c7E5FB4b30B8Ede7Af1105f9B8Ed4";
var hhrpc = "https://rpc01-sg.dogechain.dog";



//doge 

export var dogesell = "0x726798225D5729a248e864B356a1408e5cc0a80f";
export var dogenftcol = "0xDB0cE1bE9e1c7E5FB4b30B8Ede7Af1105f9B8Ed4";
// export var dogenft = "0x726798225D5729a248e864B356a1408e5cc0a80f"; //edit
// export var dogemarket = "0x726798225D5729a248e864B356a1408e5cc0a80f"; //edit
export var dogerpc = "https://rpc01-sg.dogechain.dog";
/*
Global Parameters
*/
// export var mainnet = hhrpc

export var mainnet = dogerpc