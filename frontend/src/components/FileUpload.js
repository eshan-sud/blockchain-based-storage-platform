// frontend/src/components/FileUpload.js

import React, { useState } from "react";
import crypto from "crypto";

const FileUpload = ({ setFileHash }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const generateFileHash = () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const buffer = e.target.result;
      const hash = crypto
        .createHash("sha256")
        .update(new Uint8Array(buffer))
        .digest("hex");
      setFileHash(hash);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={generateFileHash}>Generate File Hash</button>
    </div>
  );
};

export default FileUpload;
