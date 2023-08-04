import React,{useState} from 'react'
import './Hookcounter.css'
const Hookcounter = () => {
    const[count,setCount]=useState(0);
function increment(){
setCount((prevcount)=>prevcount+1);

};
  return (
  
    <div className="Container">
        <h1>{count}</h1>
        <button className="btn1" onClick={increment}>COUNT</button>
    </div>
    
  )
}

export default Hookcounter