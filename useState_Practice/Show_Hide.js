import { useState } from "react";

const Show_Hide=()=>{
  const[isShow,setIsShow]=useState(false);
    return(
        <div>
            <button onClick={()=>{setIsShow(true)}}>Show</button>
            {/* <h3>{isShow?"Show React":""}</h3> */}
            {isShow && <h3>Show React</h3>}
            <button onClick={()=>{setIsShow(false)}}>Hide</button>

        </div>
    )
}
export default Show_Hide;