// frontend/src/components/Balance.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const Balance = ({ owner }) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (owner) {
      axios.get(`/api/balance/${owner}`).then((response) => {
        setBalance(response.data.balance);
      });
    }
  }, [owner]);

  return <div>Reward Balance: {balance} tokens</div>;
};

export default Balance;
