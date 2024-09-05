// frontend/src/components/MetaMaskLogin.js

import React, { useState, useEffect } from "react";
import Web3 from "web3";

const MetaMaskLogin = ({ setAccount }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setLocalAccount] = useState(null);

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setLocalAccount(accounts[0]);
          setAccount(accounts[0]);
          setIsConnected(true);
        } catch (error) {
          console.error("User denied account access");
        }
      } else {
        alert("MetaMask is not installed");
      }
    };
    loadWeb3();
  }, [setAccount]);

  return (
    <div>
      {isConnected ? (
        <p>Connected as {account}</p>
      ) : (
        <button
          onClick={() =>
            window.ethereum.request({ method: "eth_requestAccounts" })
          }
        >
          Connect MetaMask
        </button>
      )}
    </div>
  );
};

export default MetaMaskLogin;
