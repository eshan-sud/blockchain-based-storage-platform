// frontend/src/components/SetPermission.jsx

import React, { useState } from "react";
import Web3 from "web3";
import DataSovereignty from "../contracts/DataSovereignty.json";

const SetPermissions = () => {
  const [index, setIndex] = useState(0);
  const [shared, setShared] = useState(false);
  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(
    DataSovereignty.abi,
    "YOUR_CONTRACT_ADDRESS"
  );

  const setPermission = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.requestAccounts();
    await contract.methods
      .setPermission(index, shared)
      .send({ from: accounts[0] });
  };

  return (
    <form onSubmit={setPermission}>
      <input
        type="number"
        value={index}
        onChange={(e) => setIndex(e.target.value)}
        placeholder="Data Index"
        required
      />
      <label>
        <input
          type="checkbox"
          checked={shared}
          onChange={(e) => setShared(e.target.checked)}
        />
        Share Data
      </label>
      <button type="submit">Set Permission</button>
    </form>
  );
};

export default SetPermissions;
