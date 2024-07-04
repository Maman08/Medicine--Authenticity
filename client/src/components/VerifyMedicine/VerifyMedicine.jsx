// import React, { useEffect } from 'react';
// import { Html5QrcodeScanner } from 'html5-qrcode';
// import './VerifyMedicine.css';
// const VerifyMedicine = () => {
//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner(
//       'reader', // Id of the HTML element
//       { 
//         qrbox: { width: 250, height: 250 }, // Size of QR code scanning box
//         fps: 20 // Frames per second
//       },
//       /* verbose= */ false
//     );

//     scanner.render(
//       (result) => {
//         document.getElementById('result').innerHTML = `
//           <h2>Success!</h2>
//           <p><a href="${result}">${result}</a></p>
//         `;
//         scanner.clear();
//         document.getElementById('reader').remove();
//       },
//       (error) => {
//         console.error('QR Code scanning error:', error);
//       }
//     );

//     // Cleanup function
//     return () => {
//       scanner.clear();
//     };
//   }, []);

//   return (
//     <main className='main-container'>
//       <div id="reader"></div>
//       <div id="result"></div>
//     </main>
//   );
// };

// export default VerifyMedicine;


// import React, { useEffect } from 'react';
// import { Html5QrcodeScanner } from 'html5-qrcode';
// import './VerifyMedicine.css';

// const VerifyMedicine = () => {
//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner(
//       'reader', // Id of the HTML element
//       { 
//         qrbox: { width: 250, height: 250 }, // Size of QR code scanning box
//         fps: 20 // Frames per second
//       },
//       /* verbose= */ false
//     );

//     scanner.render(
//       (result) => {
//         // Parse the result JSON
//         const data = JSON.parse(result);
//         console.log(data);
//         // Create formatted HTML content
//         const formattedResult = `
//           <h2>Success!</h2>
//           <p><strong>Name:</strong> ${data.name}</p>
//           <p><strong>Expiry Date:</strong> ${data.expiryDate}</p>
//           <p><strong>Manufacture Date:</strong> ${data.manufactureDate}</p>
//           <p><strong>Batch Number:</strong> ${data.batchNumber}</p>
//           <p><strong>From:</strong> <a href="https://etherscan.io/address/${data.from}" target="_blank">${data.from}</a></p>
//         `;

//         document.getElementById('result').innerHTML = formattedResult;
//         scanner.clear();
//         document.getElementById('reader').remove();
//       },
//       (error) => {
//         console.error('QR Code scanning error:', error);
//       }
//     );

//     // Cleanup function
//     return () => {
//       scanner.clear();
//     };
//   }, []);

//   return (
//     <main className="main-container">
//       <div id="reader"></div>
//       <div id="result"></div>
//     </main>
//   );
// };

// export default VerifyMedicine;



// working
// import React, { useEffect, useState } from 'react';
// import { Html5QrcodeScanner } from 'html5-qrcode';
// import './VerifyMedicine.css';
// import CryptoJS from 'crypto-js';

// const VerifyMedicine = () => {
//   const [encryptedData, setEncryptedData] = useState('');
//   const [decryptedData, setDecryptedData] = useState(null);

//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner(
//       'reader', // Id of the HTML element
//       {
//         qrbox: { width: 250, height: 250 }, // Size of QR code scanning box
//         fps: 20, // Frames per second
//       },
//       /* verbose= */ false
//     );

//     scanner.render(
//       (result) => {
//         try {
//           // Store encrypted data
//           setEncryptedData(result);

//           // Decrypt the result
//           const bytes = CryptoJS.AES.decrypt(result, 'secret');
//           const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//           setDecryptedData(decryptedData);
//         } catch (error) {
//           console.error('Error parsing decrypted data:', error);
//         }
//       },
//       (error) => {
//         console.error('QR Code scanning error:', error);
//       }
//     );

//     // Cleanup function
//     return () => {
//       scanner.clear();
//     };
//   }, []);

//   return (
//     <main className="main-container">
//       <div id="reader"></div>
//       <div id="result">
//         {decryptedData && (
//           <>
//             <h2>Decrypted Data:</h2>
//             <p><strong>Name:</strong> {decryptedData.name}</p>
//             <p><strong>Expiry Date:</strong> {decryptedData.expiryDate}</p>
//             <p><strong>Manufacture Date:</strong> {decryptedData.manufactureDate}</p>
//             <p><strong>Batch Number:</strong> {decryptedData.batchNumber}</p>
//             <p><strong>From:</strong> <a href={`https://etherscan.io/address/${decryptedData.from}`} target="_blank">{decryptedData.from}</a></p>
//           </>
//         )}
        
//       </div>
//     </main>
//   );
// };

// export default VerifyMedicine;


// validation working
// import React, { useEffect, useState } from 'react';
// import { Html5QrcodeScanner } from 'html5-qrcode';
// import './VerifyMedicine.css';
// import CryptoJS from 'crypto-js';

// const VerifyMedicine = () => {
//   const [encryptedData, setEncryptedData] = useState('');
//   const [decryptedData, setDecryptedData] = useState(null);
//   const [isAuthentic, setIsAuthentic] = useState(false);

//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner(
//       'reader', // Id of the HTML element
//       {
//         qrbox: { width: 250, height: 250 }, // Size of QR code scanning box
//         fps: 20, // Frames per second
//       },
//       /* verbose= */ false
//     );

//     scanner.render(
//       (result) => {
//         try {
//           // Store encrypted data
//           setEncryptedData(result);

//           // Decrypt the result
//           const bytes = CryptoJS.AES.decrypt(result, 'secret');
//           const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//           setDecryptedData(decryptedData);

//           // Check authenticity (you can customize this check)
//           if (decryptedData && decryptedData.name && decryptedData.batchNumber && decryptedData.expiryDuration) {
//             setIsAuthentic(true);
//           } else {
//             setIsAuthentic(false);
//           }
//         } catch (error) {
//           console.error('Error parsing decrypted data:', error);
//           setIsAuthentic(false);
//         }
//       },
//       (error) => {
//         console.error('QR Code scanning error:', error);
//       }
//     );

//     // Cleanup function
//     return () => {
//       scanner.clear();
//     };
//   }, []);

//   return (
//     <main className="main-container">
//       <div id="reader"></div>
//       <div id="result">
//         {decryptedData ? (
//           isAuthentic ? (
//             <>
//               <h2>Decrypted Data (Authentic):</h2>
//               <p><strong>Name:</strong> {decryptedData.name}</p>
//               <p><strong>Expiry Date:</strong> {decryptedData.expiryDate}</p>
//               <p><strong>Manufacture Date:</strong> {decryptedData.manufactureDate}</p>
//               <p><strong>Batch Number:</strong> {decryptedData.batchNumber}</p>
//               <p><strong>From:</strong> <a href={`https://etherscan.io/address/${decryptedData.from}`} target="_blank">{decryptedData.from}</a></p>
//             </>
//           ) : (
//             <h2>Not Authentic Data</h2>
//           )
//         ) : (
//           <h2>Scan a QR Code</h2>
//         )}
//       </div>
//     </main>
//   );
// };

// export default VerifyMedicine;



// advance authentication
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
      'reader', // Id of the HTML element
      {
        qrbox: { width: 250, height: 250 }, // Size of QR code scanning box
        fps: 20, // Frames per second
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

          // Try parsing the decrypted text as JSON
          const decryptedData = JSON.parse(decryptedText);

          // Check if the decrypted data is valid
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

    // Cleanup function
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
