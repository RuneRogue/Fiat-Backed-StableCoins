// const express = require('express');
// const bodyParser = require('body-parser');
// const { ethers } = require('ethers');
// import { abi } from "./ABI.js";

// const app = express();
// app.use(bodyParser.json());

// const port = 4000;

// // Replace with your Ethereum node provider (e.g., Infura)
// const contractAddress = "0x49CcB1Fb783aff07Af23e060d52C5b781106Aa70";
// const provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/8P5tiYMyM_zLtMAGJ1UjEmEA4j4ZTl61');
// const privateKey = '#######################################';
// const wallet = new ethers.Wallet(privateKey, provider);
// const contract = new ethers.Contract(contractAddress, abi, wallet);

// app.post('/burn-tokens', async (req, res) => {
//   try {
//     console.log('Received request to burn tokens:', req.body);
//     const { amount } = req.body;

//     if (!amount || isNaN(amount) || amount <= 0) {
//         console.log('Invalid amount:', amount);
//         return res.status(400).send('Invalid amount');
//     }

//     const amountToBurn = ethers.parseEther(amount.toString());

//     // Call the burn function of the token contract
//     const tx = await contract.burn(amountToBurn);
//     await tx.wait();

//     console.log('Tokens burned successfully');
//     res.send('Tokens burned successfully');
//   } catch (error) {
//     console.error('Error burning tokens:', error);
//     res.status(500).send('Error burning tokens');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });
