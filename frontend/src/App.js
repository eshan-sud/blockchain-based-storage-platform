// frontend/src/App.js

import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import toast from "react-hot-toast";

import { Toaster } from "react-hot-toast";
import { Heading } from "./components/Heading";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard.jsx";

import { Web3Provider } from "@ethersproject/providers";

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        setWalletAddress(userAddress);
        toast.success("Wallet Connected");
      } catch (error) {
        toast.error("User rejected the request.");
      }
    } else {
      toast.error("MetaMask is not installed. Please install MetaMask!");
    }
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Heading walletAddress={walletAddress} />
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route
              exact="true"
              path="/home"
              element={<Home connectWallet={connectWallet} />}
            />
            <Route exact="true" path="/dashboard" element={<Dashboard />} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
