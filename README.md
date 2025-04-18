# ProjectExhibition2

Features of the Prototype:<br />
User Registration: Users create an identity (wallet-based or pseudonymous).

Reputation Scores: Users can upvote/downvote others.

Immutable Records: Reputation scores are stored on the blockchain.

Decentralized Verification: Smart contracts prevent manipulation.

# Tech Stack
Smart Contract and Blockchain-<br />
Solidity: writing smart contracts<br />
Hardhat: Deployed on it for testnet<br />
Ethers.js: Interacting with ETH blockchain [Transaction]<br />
Alchemy: for SepoliaRPC URL (testnet)<br />
<br />
Frontend-<br />
Nextjs<br />
Reactjs<br />
TS<br />
Tw CSS<br />
<br />
Tools Used-<br />
dotenv: for an environment to protect sensitive information and not leaving a vulnerability<br />
Metamask: for crypto wallet<br />

## Follow these Steps<br />
install node, npm<br />
<br />
`npm install`


Enter the sepolia rpc url in .env (create it in root of the program) 


*need to create a crypto wallet using metamask*<br />
*need to fund the wallet with some ether (sepolia testnet)*<br />

.env: enter your sepolia rpc url (from alchemy) and privacy key (crypto wallet)

`PRIVATE_KEY=your_private_key_here`<br />
`SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_api_key`


initialize using <br />
`npx hardhat compile`


get contract address : <br />
`npx hardhat run scripts/deploy.js --network sepolia`

in reputation-frontend/lib/contracts.ts:
update `export const CONTRACT_ADDRESS = ''`
<br />

`npm run dev`

# How to run:

Connect MetaMask wallet.<br />
Click Register to sign up.<br />
Enter another wallet address to give reputation.<br />
Choose +1 or -1 to give reputation.<br />
Click Check Reputation to view their current reputation.<br />

## The Project isnt halfway complete, this is just a prototype to show how it'll function.