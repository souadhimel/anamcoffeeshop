import React from 'react';
import { ethers } from 'ethers';
import "./Buy.css";
// import Swal from 'sweetalert2';


const Buy=({state})=>{
  const buyCoffee=async(event)=>{
    event.preventDefault();
    const {contract}=state;
    const name=document.querySelector('#name').value;
    const message=document.querySelector('#message').value;
    const amount=document.querySelector('#amount').value;
    const totalAmount={value:ethers.utils.parseEther(amount)}

    const transcation=await contract.buyCoffee(name,message,totalAmount)
    await transcation.wait();
    alert('Your transcation has been successful!!')
    window.location.reload();
  }

  
 
  return (
<div className="center">
<h2>Thank you!!</h2>
<form onSubmit={buyCoffee}>
 <div className="inputbox"><input id="name" placeholder='Your name'></input></div>
 <div className="inputbox"><input id="message" placeholder='Your text'></input></div>
 <div className="inputbox"><input id="amount" placeholder='Amount donate'></input></div> 
 <div className="inputbox"><button style={{backgroundColor:'rebeccapurple', color:'white'}}>Pay</button></div>
   </form>
</div>
   
  )
   
    
}

export default Buy;




{/* <Form onSubmit={buyCoffee}>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label >Name</Form.Label>
  <Form.Control id='name' type="text" placeholder="Enter your name please" />
  <Form.Label >Message</Form.Label>
  <Form.Control id='massage' type="text" placeholder="Type your messgae please" />
</Form.Group>

<Button variant="primary" type="submit">Pay</Button>
</Form> */}