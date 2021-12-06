const { BlockChain, Transaction } = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('5362af53574243b225acef2ff005ec9f4560bb0cd623bed72c640f477867538a');
const myWalletAddress = myKey.getPublic('hex');

let degenCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
const tx3 = new Transaction(myWalletAddress, 'public key goes here', 10);
const tx5 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
tx3.signTransaction(myKey);
tx5.signTransaction(myKey);
degenCoin.addTransaction(tx1);
degenCoin.addTransaction(tx3);
degenCoin.addTransaction(tx5);

console.log("\n Starting Miner....")
degenCoin.minePendingTransactions(myWalletAddress)

console.log('\n The balance of shays wallet: ', degenCoin.getBalanceOfAddress(myWalletAddress))

console.log('is chain valid: ', degenCoin.isChainValid());

console.log()
console.log(degenCoin)