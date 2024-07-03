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


import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './VerifyMedicine.css';

const VerifyMedicine = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader', // Id of the HTML element
      { 
        qrbox: { width: 250, height: 250 }, // Size of QR code scanning box
        fps: 20 // Frames per second
      },
      /* verbose= */ false
    );

    scanner.render(
      (result) => {
        // Parse the result JSON
        const data = JSON.parse(result);

        // Create formatted HTML content
        const formattedResult = `
          <h2>Success!</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Expiry Date:</strong> ${data.expiryDate}</p>
          <p><strong>Manufacture Date:</strong> ${data.manufactureDate}</p>
          <p><strong>Batch Number:</strong> ${data.batchNumber}</p>
          <p><strong>From:</strong> <a href="https://etherscan.io/address/${data.from}" target="_blank">${data.from}</a></p>
        `;

        document.getElementById('result').innerHTML = formattedResult;
        scanner.clear();
        document.getElementById('reader').remove();
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
      <div id="result"></div>
    </main>
  );
};

export default VerifyMedicine;
