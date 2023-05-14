import React from 'react'
import {useEffect,useState} from 'react';
import "./Memos.css";

const Memos=({state})=> {

const [memos,setMemos]=useState([])
const {contract}=state;

useEffect(() => {
  const memosMessage=async()=>{
    const memos=await contract.getMemos();
   setMemos(memos)
   console.log(memos)
  }
  contract && memosMessage()
  }, [contract])

  return (
    <div className="container-fluid">
    <h3 style={{ textAlign: "center", marginTop: "20px" }}>Messages</h3>           
          <table>
          <tbody >
    {memos.map((memo) => {
      return (
              <tr >
                <td 
                  style={{
                    backgroundColor: "#6e7515",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "100px",
                    color:"white",
                   
                  }}
                >
                  {memo.name}
                </td>
                <td 
                  style={{
                    backgroundColor: "#1951f3",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "800px",
                    color:"white"
                  }}
                >
                  {new Date(memo.timestamp * 1000).toLocaleString()}
                </td>
                <td  
                  style={{
                    backgroundColor: "#bfff00",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "300px",
                    color:"black"
                  }}
                >
                  {memo.text}
                </td>
                <td  className="container-fluid"
                  style={{
                    backgroundColor: "red",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "400px",
                    color:"black"
                  }}
                >
                  {memo.from}
                </td>
              </tr>
       
      );
    })}
         </tbody>
          </table>
  </div>
  )
 
  
}

export default Memos;