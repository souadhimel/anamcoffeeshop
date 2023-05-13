import { useState, useEffect } from 'react'
import './App.css'

function App() {
const [state, setState] = useState({provider:null,signer:null,contract: null})
const [account, setAccount] = useState('Not Connected');

  useEffect(() => {
   const template= async()=>{
    const contractAddress=" ";
    const contractABI=" ";
    //Metamask part:
    //1. In order to do transcation on ............testnet
    //2. Metamask consists of Infura /Alchemy API which actually helps in connecting to Blockchain
    try {
    const {ethereum}=window;
    const account=await ethereum.request({
      method:"eth_requestAccounts"
    })
    setAccount(account);
    const provider=new ethers.providers.Web3provider(ethereum); //read the Blockchain
    const signer= provider.getSigner(); //write the Blockchain

    const contract=new ethers.Contract(contractAddress,contractABI,signer)
    setState({provider,signer,contract});
  } catch (error) {
    alert(error);
  }
   }
   template()
   },[])

  return (
    <>
      <div className='App'>
      <h1>Vite + React</h1>
      </div>
    </>
  )
}

export default App
