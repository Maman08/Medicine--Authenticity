
import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './VerifyMedicine.css';
import CryptoJS from 'crypto-js';

const VerifyMedicine = () => {
  const [encryptedData, setEncryptedData] = useState('');
  const [decryptedData, setDecryptedData] = useState(null);
  const [isAuthentic, setIsAuthentic] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader', 
      {
        qrbox: { width: 250, height: 250 }, 
        fps: 20, 
      },
      /* verbose= */ false
    );

    scanner.render(
      (result) => {
        try {
          // Store encrypted data
          setEncryptedData(result);

          // Decrypt the result
          const bytes = CryptoJS.AES.decrypt(result, 'secret');
          const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

          const decryptedData = JSON.parse(decryptedText);

          if (decryptedData && decryptedData.name && decryptedData.batchNumber && decryptedData.expiryDuration) {
            setDecryptedData(decryptedData);
            setIsAuthentic(true);
            setError(null);
          } else {
            setIsAuthentic(false);
            setError('Not Authentic Data');
          }
        } catch (error) {
          console.error('Error parsing decrypted data:', error);
          setIsAuthentic(false);
          setDecryptedData(null);
          setError('Not Authentic Data');
        }
      },
      (error) => {
        console.error('QR Code scanning error:', error);
      }
    );

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <main className="main-container">
      <div id="reader"></div>
      <div id="result">
        {decryptedData ? (
          isAuthentic ? (
            <>
              <h2>Decrypted Data (Authentic):</h2>
              <p><strong>Name:</strong> {decryptedData.name}</p>
              <p><strong>Expiry Date:</strong> {decryptedData.expiryDate}</p>
              <p><strong>Manufacture Date:</strong> {decryptedData.manufactureDate}</p>
              <p><strong>Batch Number:</strong> {decryptedData.batchNumber}</p>
              <p><strong>From:</strong> <a href={`https://etherscan.io/address/${decryptedData.from}`} target="_blank" rel="noopener noreferrer">{decryptedData.from}</a></p>
            </>
          ) : (
            <h2>Not Authentic Data</h2>
          )
        ) : (
          error ? <h2>{error}</h2> : <h2>Scan a QR Code</h2>
        )}
      </div>
    </main>
  );
};

export default VerifyMedicine;
