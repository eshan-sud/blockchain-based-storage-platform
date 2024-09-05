// frontend/src/components/UploadData.jsx

import React, { useState } from "react";

export const UploadFiles = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleRemoveFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const handleUpload = () => {
    // Add logic to upload files to server
    console.log("Uploading files:", files);
  };

  return (
    <div className="upload-files">
      <h2>Upload Files</h2>
      <FileUploadButton onFileUpload={handleFileUpload} />
      <FileList files={files} onRemoveFile={handleRemoveFile} />
      <button onClick={handleUpload}>Submit</button>
    </div>
  );
};

const FileUploadButton = ({ onFileUpload }) => {
  return (
    <div className="file-upload-button">
      <input
        type="file"
        multiple
        onChange={onFileUpload}
        style={{ display: "none" }}
        id="file-input"
      />
      <label htmlFor="file-input" className="upload-label">
        <button>Upload Files</button>
      </label>
    </div>
  );
};

const FileList = ({ files, onRemoveFile }) => {
  return (
    <div className="file-list">
      {files.map((file, index) => (
        <div key={index} className="file-item">
          <span>
            {file.name} ({(file.size / 1024).toFixed(2)} KB)
          </span>
          <button onClick={() => onRemoveFile(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

// import React, { useState } from "react";
// import axios from "axios";
// import Web3 from "web3";
// import DataSovereignty from "../contracts/DataSovereignty.json";

// const UploadData = () => {
//   const [fileHash, setFileHash] = useState("");
//   const web3 = new Web3(Web3.givenProvider);
//   const contract = new web3.eth.Contract(
//     DataSovereignty.abi,
//     "YOUR_CONTRACT_ADDRESS"
//   );

//   const uploadData = async (e) => {
//     e.preventDefault();
//     const accounts = await web3.eth.requestAccounts();
//     await contract.methods.uploadData(fileHash).send({ from: accounts[0] });
//     await axios.post("/api/upload", { hash: fileHash, owner: accounts[0] });
//   };

//   return (
//     <form onSubmit={uploadData}>
//       <input
//         type="text"
//         value={fileHash}
//         onChange={(e) => setFileHash(e.target.value)}
//         placeholder="Enter Data Hash"
//         required
//       />
//       <button type="submit">Upload Data</button>
//     </form>
//   );
// };

// export default UploadData;
