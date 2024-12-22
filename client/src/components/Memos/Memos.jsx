


import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./Memos.css";

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const [qrCodeUrls, setQrCodeUrls] = useState([]);

  useEffect(() => {
    const fetchMemos = async () => {
      if (state.contract) {
        try {
          const memos = await state.contract.getMemos();
          setMemos(memos);

          // Generate QR codes for each memo
          const qrCodes = await Promise.all(
            memos.map(async (memo) => {
              const formData = {
                name: memo.name,
                expiryDate: new Date(memo.expiryDate * 1000).toLocaleString(),
                manufactureDate: new Date(memo.manufactureDate * 1000).toLocaleString(),
                batchNumber: memo.batchNumber,
                from: memo.from,
              };

              // Convert form data to string
              const qrDataString = encodeURIComponent(JSON.stringify(formData));

              // Generate QR code URL
              const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrDataString}`;

              return qrUrl;
            })
          );

          // Set QR code URLs
          setQrCodeUrls(qrCodes);
        } catch (error) {
          console.error("Error fetching memos:", error);
          alert("Failed to fetch memos. Please check console for error details.");
        }
      }
    };

    fetchMemos();
  }, [state.contract]);

  return (
    <div className="container-fluid table">
      <table>
      <thead>
          <tr >
            <th style={{color:"black", font:"bold",fontFamily:"sans-serif"}}>Medicine</th>
            <th style={{color:"black", font:"bold",fontFamily:"sans-serif"}}>Expiry Date</th>
            <th style={{color:"black", font:"bold",fontFamily:"sans-serif"}}>Manufacture Date</th>
            <th style={{color:"black", font:"bold",fontFamily:"sans-serif"}}>Batch Number</th>
            <th style={{color:"black", font:"bold",fontFamily:"sans-serif"}}>Address</th>
            <th style={{color:"black", font:"bold",fontFamily:"sans-serif"}}>QR Code</th>
          </tr>
        </thead>
        <tbody>
          {memos.map((memo, index) => (
            <tr key={index}>
              <td
              >
                {memo.name}
              </td>
              <td
                
              >
                {new Date(memo.expiryDate * 1000).toLocaleString()}
              </td>
              <td
                
              >
                {new Date(memo.manufactureDate * 1000).toLocaleString()}
              </td>
              <td
                
              >
                {memo.batchNumber}
              </td>
              <td className="container-fluid"
                
              >
                {memo.from}
              </td>
              <td className="container-fluid"
              >
                {qrCodeUrls[index] && (
                  <img style={{height:"90px", width:"90px"}} src={qrCodeUrls[index]} alt={`QR Code for ${memo.name}`} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Memos;
