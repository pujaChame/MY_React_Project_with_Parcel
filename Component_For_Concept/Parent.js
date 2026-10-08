import Boolean_Comp from "./useState_Examples/boolean";
import Counter from "./useState_Examples/Counter"
import Dark_Mode from "./useState_Examples/DarkMode";
import Functional_State from "./useState_Examples/Functional_State";
import Immutable_State from "./useState_Examples/Immutable_State";
import Lazy_initialization from "./useState_Examples/Lazy_Initialization";
import UseState_With_Props from "./useState_Examples/useState_with_Props";

const Parent_Comp=()=>{
    return(
        <>
       <Counter/>
       <hr></hr>
       <UseState_With_Props name="Puja" age={25}/>
       <hr></hr>
       <Dark_Mode/>
       <hr></hr>
       <Boolean_Comp/>
       <hr></hr>
       <Immutable_State/>
       <hr></hr>
       <Functional_State/>
       <hr></hr>
      <Lazy_initialization/>
        </>
    )
}
export default Parent_Comp;