import { useState } from "react"

const Boolean_Comp=()=>{
    const[isVisible,setVisible]=useState(false);
    return(
        <>
        <button onClick={()=>setVisible(true)}>
            Show Button
        </button>
        <button onClick={()=>setVisible(false)}>
            Hide Button
        </button>
        {isVisible && <h3>Hello</h3>}
        </>
    )
}
export default Boolean_Comp;