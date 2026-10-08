import { Component } from "react";
import Child_With_Props from "./Child_With_Props";

const Parent=()=>{
    return(
        <div>
           <Child_With_Props name="Puja" age={27}/>
           <Child_With_Props  name="Isha" age={28}/>
           <Child_With_Props name="Rahul" age={32}/>
        </div>
       
    ) 
}
export default Parent;