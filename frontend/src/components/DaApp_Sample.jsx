import { ethers } from "ethers";

async function connectWallet() {
  if (window.ethereum) {
    try {
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Create an instance of Web3Provider (Ethers.js)
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Get signer
      const signer = provider.getSigner();

      // Get wallet address
      const userAddress = await signer.getAddress();
      console.log("Wallet Address:", userAddress);

      // Now you can use the provider or signer to interact with smart contracts
      return { provider, signer };
    } catch (error) {
      console.error("User rejected the request.");
    }
  } else {
    console.error("MetaMask is not installed. Please install MetaMask!");
  }
}

// Connect wallet on button click
document
  .getElementById("connectButton")
  .addEventListener("click", connectWallet);
