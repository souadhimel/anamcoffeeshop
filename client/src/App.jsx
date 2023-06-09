import { useState, useEffect } from 'react';
import abi from './contractJson/CoffeeShop.json';
import {ethers} from 'ethers';
import './App.css';
import Buy from './components/Buy';
import Memos from './components/Memos';
import { Bounce, Flip, Rotate } from 'react-awesome-reveal';

function App() {
const [state, setState] = useState({provider:null,signer:null,contract: null})
const [account, setAccount] = useState('Please connect your account!');

  useEffect(() => {
   const template= async()=>{
    const contractAddress="0x3308905349d940721dC3c2709a026eD19aF745Bb";
    const contractABI=abi.abi;
    //Metamask part:
    //1. In order to do transcation on ............testnet
    //2. Metamask consists of Infura /Alchemy API which actually helps in connecting to Blockchain
    try {
    const {ethereum}=window;
    const account=await ethereum.request({
      method:"eth_requestAccounts"
    })

    window.ethereum.on('accountsChanged',()=>{
      window.location.reload()
    })
    setAccount(account);
    const provider=new ethers.providers.Web3Provider(ethereum); //read the Blockchain
    const signer= provider.getSigner(); //write the Blockchain

    const contract=new ethers.Contract(contractAddress,contractABI,signer)
    console.log(contract)
    // console.log(web3.version)
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
      <div >
    <img src="/coffee.jpg" className="img-fluid" alt=".." width="100%" />
    <p style={{ marginTop: "40px", marginLeft: "5px" }}>
      <h4>Connected Account - <Flip><small style={{color:'red', fontSize:'20px'}}>{account}</small></Flip></h4>
    </p>
     <Rotate><Bounce up cascade><h1>Coffee Shop</h1></Bounce></Rotate>
   
      <Buy state={state} />
      <Memos state={state} />
   
  </div>
      </div>
    </>
  )
}

export default App
