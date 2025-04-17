# ProjectExhibition2

Features of the Prototype:
User Registration: Users create an identity (wallet-based or pseudonymous).

Reputation Scores: Users can upvote/downvote others.

Immutable Records: Reputation scores are stored on the blockchain.

Decentralized Verification: Smart contracts prevent manipulation.

# Tech Stack
Smart Contract and Blockchain-
Solidity: writing smart contracts
Hardhat: Deployed on it for testnet
Ethers.js: Interacting with ETH blockchain [Transaction]
Alchemy: for SepoliaRPC URL (testnet)

Frontend-
Nextjs
Reactjs
TS
Tw CSS

Tools Used-
dotenv: for an environment to protect sensitive information and not leaving a vulnerability
Metamask: for crypto wallet

## Follow these Steps
install node, npm

`npm install`


Enter the sepolia rpc url in .env (create it in root of the program) 


*need to create a crypto wallet using metamask*
*need to fund the wallet with some ether (sepolia testnet)*

.env: enter your sepolia rpc url (from alchemy) and privacy key (crypto wallet)

`PRIVATE_KEY=your_private_key_here
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_api_key`


initialize using 
`npx hardhat compile`


get contract address : `npx hardhat run scripts/deploy.js --network sepolia`

in reputation-frontend/lib/contracts.ts:
update `export const CONTRACT_ADDRESS = ''`


`npm run dev`

# How to run:

Connect MetaMask wallet.
Click Register to sign up.
Enter another wallet address to give reputation.
Choose +1 or -1 to give reputation.
Click Check Reputation to view their current reputation.

## The Project isnt halfway complete, this is just a prototype to show how it'll function.