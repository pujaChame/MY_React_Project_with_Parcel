import { useState } from "react";

const Immutable_State=()=>{
   const [user,setName]=useState({name:"Puja", age:25 })
   const [item,setItem]=useState([]);
    return(
        <>
        <h1>Hello {user.name}</h1>
        <button onClick={()=>{setName({...user,name:"prashant",city:"pune"})}}>Change Name</button>
        {/* <button onClick={()=>{setName({...user,name:"prashant",city:"pune"})}}>Change Name</button> */}
        {/* <p>{user.city}</p> */}
        
        <hr></hr>
        <h3>{item}</h3>
        <button onClick={()=>{setItem([...item,"Laptop"])}} >Add Item Into Array</button>
        </>
    )
}
export default Immutable_State;