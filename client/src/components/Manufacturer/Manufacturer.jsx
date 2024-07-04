// working code

// import React from "react";
// import { ethers } from "ethers";
// import "./Manufacturer.css";

// const Manufacturer = ({ state }) => {
//   const addProduct = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const name = document.querySelector("#name").value;
//     const batchNumber = document.querySelector("#batchNumber").value;
//     const expiryDuration = parseInt(document.querySelector("#expiryDuration").value);

//     try {
//       // Convert expiry duration to seconds
//       const expiryDurationInSeconds = expiryDuration * 24 * 60 * 60; // Assuming input is in days

//       // Calculate current timestamp
//       const manufactureDate = Math.floor(Date.now() / 1000); // Current Unix timestamp

//       // Call contract function to add product
//       const transaction = await contract.addProduct(name, batchNumber, expiryDurationInSeconds, {
//         value: ethers.utils.parseEther("0.001") // Sending 0.001 ETH with the transaction
//       });
      
//       await transaction.wait();
//       alert("Transaction successful!");
//       window.location.reload();
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product. Please check console for error details.");
//     }
//   };

//   return (
//     <div className="center">
//       <h2>Add Product</h2>
//       <form onSubmit={addProduct}>
//         <div className="inputbox">
//           <input type="text" required id="name" placeholder="Name of Medicine" />
//         </div>
//         <div className="inputbox">
//           <input type="text" required id="batchNumber" placeholder="Batch Number" />
//         </div>
//         <div className="inputbox">
//           <input type="number" required id="expiryDuration" placeholder="Expiry Duration (days)" />
//         </div>
//         <div className="inputbox">
//           <input type="submit" value="Add Product" disabled={!state.contract} />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Manufacturer;

// QR Shi se generate ho rhaa hai


// import React, { useState } from 'react';
// import { ethers } from 'ethers';
// import './Manufacturer.css';

// const Manufacturer = ({ state }) => {
//   const [qrCodeUrl, setQrCodeUrl] = useState('');

//   const addProduct = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const name = document.querySelector("#name").value;
//     const batchNumber = document.querySelector("#batchNumber").value;
//     const expiryDuration = parseInt(document.querySelector("#expiryDuration").value);

//     const formData = {
//       name,
//       batchNumber,
//       expiryDuration
//     };

//     try {
//       // Convert expiry duration to seconds
//       const expiryDurationInSeconds = expiryDuration * 24 * 60 * 60; // Assuming input is in days

//       // Calculate current timestamp
//       const manufactureDate = Math.floor(Date.now() / 1000); // Current Unix timestamp

//       // Call contract function to add product
//       const transaction = await contract.addProduct(name, batchNumber, expiryDurationInSeconds, {
//         value: ethers.utils.parseEther("0.001") // Sending 0.001 ETH with the transaction
//       });

//       await transaction.wait();
//       alert("Transaction successful!");

//       // Generate QR code URL with form data
//       const qrData = encodeURIComponent(JSON.stringify(formData));
//       const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}`;
//       setQrCodeUrl(qrUrl);
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product. Please check console for error details.");
//     }
//   };

//   return (
//     <div className="center">
//       <h2>Add Product</h2>
//       <form onSubmit={addProduct}>
//         <div className="inputbox">
//           <input type="text" required id="name" placeholder="Name of Medicine" />
//         </div>
//         <div className="inputbox">
//           <input type="text" required id="batchNumber" placeholder="Batch Number" />
//         </div>
//         <div className="inputbox">
//           <input type="number" required id="expiryDuration" placeholder="Expiry Duration (days)" />
//         </div>
//         <div className="inputbox">
//           <input type="submit" value="Add Product" disabled={!state.contract} />
//         </div>
//       </form>
//       {qrCodeUrl && (
//         <div className="qr-code">
//           <h3>Product QR Code</h3>
//           <img src={qrCodeUrl} alt="Product QR Code" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Manufacturer;




// import React, { useState } from 'react';
// import { ethers } from 'ethers';
// import './Manufacturer.css';

// const Manufacturer = ({ state }) => {
//   const [qrCodeUrl, setQrCodeUrl] = useState('');

//   const addProduct = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const name = document.querySelector("#name").value;
//     const batchNumber = document.querySelector("#batchNumber").value;
//     const expiryDuration = parseInt(document.querySelector("#expiryDuration").value);

//     const formData = {
//       name,
//       batchNumber,
//       expiryDuration
//     };

//     try {
//       // Convert expiry duration to seconds
//       const expiryDurationInSeconds = expiryDuration * 24 * 60 * 60; // Assuming input is in days

//       // Calculate current timestamp
//       const manufactureDate = Math.floor(Date.now() / 1000); // Current Unix timestamp

//       // Call contract function to add product
//       const transaction = await contract.addProduct(name, batchNumber, expiryDurationInSeconds, {
//         value: ethers.utils.parseEther("0.001") // Sending 0.001 ETH with the transaction
//       });

//       await transaction.wait();
//       alert("Transaction successful!");

//       // Generate QR code URL with form data
//       const qrData = encodeURIComponent(JSON.stringify(formData));
//       const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}`;
//       setQrCodeUrl(qrUrl);

//       // Create a temporary anchor element to trigger the download
//       const link = document.createElement('a');
//       link.href = qrUrl;
//       link.download = `${name}_QR_Code.png`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product. Please check console for error details.");
//     }
//   };

//   return (
//     <div className="center">
//       <h2>Add Product</h2>
//       <form onSubmit={addProduct}>
//         <div className="inputbox">
//           <input type="text" required id="name" placeholder="Name of Medicine" />
//         </div>
//         <div className="inputbox">
//           <input type="text" required id="batchNumber" placeholder="Batch Number" />
//         </div>
//         <div className="inputbox">
//           <input type="number" required id="expiryDuration" placeholder="Expiry Duration (days)" />
//         </div>
//         <div className="inputbox">
//           <input type="submit" value="Add Product" disabled={!state.contract} />
//         </div>
//       </form>
//       {qrCodeUrl && (
//         <div className="qr-code">
//           <h3>Product QR Code</h3>
//           <img src={qrCodeUrl} alt="Product QR Code" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Manufacturer;



//with download button
// import React, { useState } from 'react';
// import { ethers } from 'ethers';
// import './Manufacturer.css';

// const Manufacturer = ({ state }) => {
//   const [qrCodeUrl, setQrCodeUrl] = useState('');
//   const [qrData, setQrData] = useState({});

//   const addProduct = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const name = document.querySelector("#name").value;
//     const batchNumber = document.querySelector("#batchNumber").value;
//     const expiryDuration = parseInt(document.querySelector("#expiryDuration").value);

//     const formData = {
//       name,
//       batchNumber,
//       expiryDuration
//     };

//     setQrData(formData);

//     try {
//       // Convert expiry duration to seconds
//       const expiryDurationInSeconds = expiryDuration * 24 * 60 * 60; // Assuming input is in days

//       // Calculate current timestamp
//       const manufactureDate = Math.floor(Date.now() / 1000); // Current Unix timestamp

//       // Call contract function to add product
//       const transaction = await contract.addProduct(name, batchNumber, expiryDurationInSeconds, {
//         value: ethers.utils.parseEther("0.001") // Sending 0.001 ETH with the transaction
//       });

//       await transaction.wait();
//       alert("Transaction successful!");

//       // Generate QR code URL with form data
//       const qrDataString = encodeURIComponent(JSON.stringify(formData));
//       const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrDataString}`;
//       setQrCodeUrl(qrUrl);
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product. Please check console for error details.");
//     }
//   };

//   const downloadQrCode = () => {
//     const link = document.createElement('a');
//     link.href = qrCodeUrl;
//     link.download = `${qrData.name}_QR_Code.png`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="center">
//       <h2>Add Product</h2>
//       <form onSubmit={addProduct}>
//         <div className="inputbox">
//           <input type="text" required id="name" placeholder="Name of Medicine" />
//         </div>
//         <div className="inputbox">
//           <input type="text" required id="batchNumber" placeholder="Batch Number" />
//         </div>
//         <div className="inputbox">
//           <input type="number" required id="expiryDuration" placeholder="Expiry Duration (days)" />
//         </div>
//         <div className="inputbox">
//           <input type="submit" value="Add Product" disabled={!state.contract} />
//         </div>
//       </form>
//       {qrCodeUrl && (
//         <div className="qr-code">
//           <h3>Product QR Code</h3>
//           <img src={qrCodeUrl} alt="Product QR Code" />
//           <button onClick={downloadQrCode}>Download QR Code</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Manufacturer;




// best ....sb kaam kr rha




// import React, { useState } from 'react';
// import { ethers } from 'ethers';
// import './Manufacturer.css';

// const Manufacturer = ({ state }) => {
//   const [qrCodeUrl, setQrCodeUrl] = useState('');
//   const [formData, setFormData] = useState({});

//   const addProduct = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const name = document.querySelector("#name").value;
//     const batchNumber = document.querySelector("#batchNumber").value;
//     const expiryDuration = parseInt(document.querySelector("#expiryDuration").value);

//     const formData = {
//       name,
//       batchNumber,
//       expiryDuration
//     };

//     setFormData(formData);

//     try {
//       // Convert expiry duration to seconds
//       const expiryDurationInSeconds = expiryDuration * 24 * 60 * 60; // Assuming input is in days

//       // Calculate current timestamp
//       const manufactureDate = Math.floor(Date.now() / 1000); // Current Unix timestamp

//       // Call contract function to add product
//       const transaction = await contract.addProduct(name, batchNumber, expiryDurationInSeconds, {
//         value: ethers.utils.parseEther("0.001") // Sending 0.001 ETH with the transaction
//       });

//       await transaction.wait();
//       alert("Transaction successful!");

//       // Generate QR code URL with form data
//       const qrDataString = encodeURIComponent(JSON.stringify(formData));
//       const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrDataString}`;
//       setQrCodeUrl(qrUrl);
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product. Please check console for error details.");
//     }
//   };

//   const downloadQrCode = async () => {
//     if (!qrCodeUrl) return;

//     try {
//       const response = await fetch(qrCodeUrl);
//       const blob = await response.blob();
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = `${formData.name}_QR_Code.png`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error("Error downloading QR code:", error);
//       alert("Failed to download QR code. Please check console for error details.");
//     }
//   };

//   return (
//     <div className="center">
//       <h1 className='addproduct'>Add Product</h1>
//       <form onSubmit={addProduct}>
//         <div className="inputbox">
//           <input type="text" required id="name" placeholder="Name of Medicine" />
//         </div>
//         <div className="inputbox">
//           <input type="text" required id="batchNumber" placeholder="Batch Number" />
//         </div>
//         <div className="inputbox">
//           <input type="number" required id="expiryDuration" placeholder="Expiry Duration (days)" />
//         </div>
//         <div className="inputbox">
//           <input type="submit" value="Add Product" disabled={!state.contract} />
//         </div>
//       </form>
//       {qrCodeUrl && (
//         <div className="qr-code">
//           <h3>Product QR Code</h3>
//           <img src={qrCodeUrl} alt="Product QR Code" />
//           <button className='addproduct' onClick={downloadQrCode}>Download QR Code</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Manufacturer;



//encryption ho rha


// import React, { useState } from 'react';
// import { ethers } from 'ethers';
// import CryptoJS from 'crypto-js';
// import './Manufacturer.css';

// const Manufacturer = ({ state }) => {
//   const [qrCodeUrl, setQrCodeUrl] = useState('');
//   const [formData, setFormData] = useState({});

//   const addProduct = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const name = document.querySelector("#name").value;
//     const batchNumber = document.querySelector("#batchNumber").value;
//     const expiryDuration = parseInt(document.querySelector("#expiryDuration").value);

//     const formData = {
//       name,
//       batchNumber,
//       expiryDuration
//     };

//     setFormData(formData);

//     try {
//       // Convert expiry duration to seconds
//       const expiryDurationInSeconds = expiryDuration * 24 * 60 * 60; // Assuming input is in days

//       // Calculate current timestamp
//       const manufactureDate = Math.floor(Date.now() / 1000); // Current Unix timestamp

//       // Call contract function to add product
//       const transaction = await contract.addProduct(name, batchNumber, expiryDurationInSeconds, {
//         value: ethers.utils.parseEther("0.001") // Sending 0.001 ETH with the transaction
//       });

//       await transaction.wait();
//       alert("Transaction successful!");

//       // Encrypt form data
//       const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(formData), 'secret').toString();
//       console.log("Encrypted Data:", encryptedData);
//       // Generate QR code URL with encrypted form data
//       const qrDataString = encodeURIComponent(encryptedData);
//       const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrDataString}`;
//       setQrCodeUrl(qrUrl);
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product. Please check console for error details.");
//     }
//   };

//   const downloadQrCode = async () => {
//     if (!qrCodeUrl) return;

//     try {
//       const response = await fetch(qrCodeUrl);
//       const blob = await response.blob();
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = `${formData.name}_QR_Code.png`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error("Error downloading QR code:", error);
//       alert("Failed to download QR code. Please check console for error details.");
//     }
//   };

//   return (
//     <div className="center">
//       <h1 className='addproduct'>Add Product</h1>
//       <form onSubmit={addProduct}>
//         <div className="inputbox">
//           <input type="text" required id="name" placeholder="Name of Medicine" />
//         </div>
//         <div className="inputbox">
//           <input type="text" required id="batchNumber" placeholder="Batch Number" />
//         </div>
//         <div className="inputbox">
//           <input type="number" required id="expiryDuration" placeholder="Expiry Duration (days)" />
//         </div>
//         <div className="inputbox">
//           <input type="submit" value="Add Product" disabled={!state.contract} />
//         </div>
//       </form>
//       {qrCodeUrl && (
//         <div className="qr-code">
//           <h3>Product QR Code</h3>
//           <img src={qrCodeUrl} alt="Product QR Code" />
//           <button className='addproduct' onClick={downloadQrCode}>Download QR Code</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Manufacturer;


//encryption input field

import React, { useState } from 'react';
import { ethers } from 'ethers';
import CryptoJS from 'crypto-js';
import './Manufacturer.css';

const Manufacturer = ({ state }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [formData, setFormData] = useState({});
  const [encryptedData, setEncryptedData] = useState('');
  const [encryptedInput, setEncryptedInput] = useState('');

  const handleEncryptData = () => {
    const { name, batchNumber, expiryDuration } = formData;
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(formData), 'secret').toString();
    setEncryptedData(encrypted);
    setEncryptedInput(encrypted);
  };

  const addProduct = async (event) => {
    event.preventDefault();
    const { contract } = state;

    try {
      // Convert expiry duration to seconds
      const expiryDurationInSeconds = formData.expiryDuration * 24 * 60 * 60; // Assuming input is in days

      // Call contract function to add product
      const transaction = await contract.addProduct(
        formData.name,
        formData.batchNumber,
        expiryDurationInSeconds,
        {
          value: ethers.utils.parseEther('0.001'), // Sending 0.001 ETH with the transaction
        }
      );

      await transaction.wait();
      alert('Transaction successful!');

      // Generate QR code URL with encrypted form data
      const qrDataString = encodeURIComponent(encryptedData);
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrDataString}`;
      setQrCodeUrl(qrUrl);
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please check console for error details.');
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const downloadQrCode = async () => {
    if (!qrCodeUrl) return;

    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${formData.name}_QR_Code.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading QR code:', error);
      alert('Failed to download QR code. Please check console for error details.');
    }
  };

  return (
    <div className="center">
      <h1 className="addproduct">Add Product</h1>
      <form onSubmit={addProduct}>
        <div className="inputbox">
          <input
            type="text"
            required
            id="name"
            placeholder="Name of Medicine"
            onChange={handleChange}
          />
        </div>
        <div className="inputbox">
          <input
            type="text"
            required
            id="batchNumber"
            placeholder="Batch Number"
            onChange={handleChange}
          />
        </div>
        <div className="inputbox">
          <input
            type="number"
            required
            id="expiryDuration"
            placeholder="Expiry Duration (days)"
            onChange={handleChange}
          />
        </div>
        <div className="inputbox">
          <input
            type="text"
            id="encryptedInput"
            placeholder="Encrypted Data"
            value={encryptedInput}
            readOnly
          />
        </div>
        <div className="inputbox">
          <button type="button" onClick={handleEncryptData}>
            Encrypt Data
          </button>
        </div>
        <div className="inputbox">
          <input type="submit" value="Add Product" disabled={!state.contract} />
        </div>
      </form>
      {qrCodeUrl && (
        <div className="qr-code">
          <h3>Product QR Code</h3>
          <img src={qrCodeUrl} alt="Product QR Code" />
          <button className="addproduct" onClick={downloadQrCode}>
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default Manufacturer;
