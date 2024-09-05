// frontend/src/components/AudiTrails.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const AuditTrail = ({ owner }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/audit-trail/${owner}`)
      .then((response) => setData(response.data));
  }, [owner]);

  return (
    <div>
      <h2>Audit Trail</h2>
      <ul>
        {data.map((entry, idx) => (
          <li key={idx}>
            {entry.hash} - Shared: {entry.shared.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuditTrail;
