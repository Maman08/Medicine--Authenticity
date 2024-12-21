// import { useState,useEffect } from 'react'
// import abi from "./contractJson/Medicalsys.json"
// import './App.css'
// import { providers } from 'ethers'
// import { ethers } from 'ethers'

// function App() {
// const [state,setState]=useState({provider:null,signer:null,contract:null});
// const [account,setAccount]=useState("Not Connected");
// useEffect(()=>{
//   const template=async()=>{
//     const contractAddress="0x4d3Daf9b7876befF2D3b3A5400C6fD9AA15943D0";
//     const contractABI=abi.abi;
//     try{
//       const {ethereum}=window;
//       const account = await ethereum.request({
//         method:"eth_requestAccounts"
//       })
//       setAccount(account);
//       const provider=new ethers.Web3Provider(ethereum);
//       const signer=provider.getSigner();
//       const contract=new ethers.Contract(
//         contractAddress,contractABI,signer
//       )
//       console.log(contract);
//       setState({provider,signer,contract})
//     }catch(error){
//       alert(error);
//     }
    
//   }
//   template();
// },[])
//   return (
//     <div className='App'>

//     </div>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react';
import './App.css';
import bgImg from "./assets/Blockchain-2-Gif.gif"
import Manufacturer from "./components/Manufacturer/Manufacturer"
import Memos from "./components/Memos/Memos"
import abi from './contractJson/Medicalsys.json'; 
import VerifyMedicine from './components/VerifyMedicine/VerifyMedicine';

function App() {
  const [state, setState] = useState({ provider: null, signer: null, contract: null });
  const [account, setAccount] = useState("Not Connected");

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0x4d3Daf9b7876befF2D3b3A5400C6fD9AA15943D0";
      const contractABI = abi.abi; 

      try {
        const { ethereum } = window;
        if (ethereum) {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts"
          });
          window.ethereum.on("accountChanged",()=>{
            window.location.reload()
          })
          setAccount(accounts[0]); 

          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);

          console.log("Contract instance:", contract);
          setState({ provider, signer, contract });
        } else {
          alert("Please install MetaMask or another Ethereum provider extension.");
        }
      } catch (error) {
        alert("Error connecting to Ethereum network. Please check MetaMask or another provider extension.");
        console.error(error);
      }
    };

    template();
  }, []);


  const appStyle = {
    backgroundImage: `url(${bgImg})`, // Replace with your image path
   
    backgroundAttachment: 'fixed'
  };
  return (
    
    <div className='App' style={appStyle}>
      <h2>Connected Account: {account}</h2>
      {/* Add your contract interaction UI here */}
      <Manufacturer state={state}></Manufacturer>
       <Memos state={state}></Memos> 
       <VerifyMedicine/>
    </div>
  );
}

export default App;
