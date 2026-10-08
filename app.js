import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Parent_Comp from "./Component_For_Concept/Parent";
import UseEffect_Parent from "./Component_For_Concept/useEffect_Example/UseEffect_Parent";

import UseEffect_Forms from "./Component_For_Concept/useEffect_Example/UseEffect_Forms";
import UseEffect_With_UseState_Counter from "./Component_For_Concept/useEffect_Example/UseEffect_With_UseState_Counter";
import UseEffect_Product_DataFectch from "./Component_For_Concept/useEffect_Example/UseEffect_Product";
import Header from "./Component_For_Concept/useEffect_Example/Header";
import UseEffect_CleanUp_Function from "./Component_For_Concept/useEffect_Example/UseEffect_CleanUp";
import Error from "./Component_For_Concept/useEffect_Example/Error";
import Counter from "./Component_For_Concept/useState_Examples/Counter";
import Dark_Mode from "./Component_For_Concept/useState_Examples/DarkMode";
import UseState_With_Props from "./Component_For_Concept/useState_Examples/useState_with_Props";
import Functional_State from "./Component_For_Concept/useState_Examples/Functional_State";
import UseState_Header from "./Component_For_Concept/useState_Examples/UseState_Header";
import Boolean_Comp from "./Component_For_Concept/useState_Examples/boolean";

const FirstComponent=()=>{
  return(
     <>
     {/*  <Parent_Comp/> */}
    {/*  <UseState_Parent/> */}
  {/*  <UseEffect_Parent/> */}
  {/* <Header/> */}
  <UseState_Header/>
  <Outlet/>
     </>
  )
}

// const appRouter=createBrowserRouter([
//   {
//     path:"/",
//     element:<FirstComponent/>,
//      errorElement:<Error/>,
//     children:[
//        {
//       path:"/",
//       element:<UseEffect_Forms/>
//     },
//     {
//       path:"/ueseffect-form",
//       element:<UseEffect_Forms/>
//     },
    
//     {
//       path:"/ueseffect-clenup",
//       element:<UseEffect_CleanUp_Function/>
//     },
//     {
//       path:"/useeffect-parent",
//       element:<UseEffect_Parent/>
//     },
//     {
//       path:"/useeffect-product",
//       element:<UseEffect_Product_DataFectch/>
//     }
//     ]
//   }
// ])
 const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<FirstComponent/>,
    children:[
      {
        path:"/",
        element:<Counter/>
      },
      {
        path:"/counter",
        element:<Counter/>
      },
      {
        path:"/boolean-comp",
        element:<Boolean_Comp/>
      },
      {
        path:"/dark-mode",
        element:<Dark_Mode/>
      },
      {
        path:"/usestate-with-props",
        element:<UseState_With_Props/>
      },
      {
        path:"/functional-state",
        element:<Functional_State/>
      }
    ],
    errorElement:<Error/>
  }
 ])
 

const app= ReactDOM.createRoot(document.getElementById("root"));
app.render(<RouterProvider router={appRouter}/>)




// import Component_1 from "./Components/Component1";
// import Header from "./Component_Structure/Header";
// import Navbar from "./Component_Structure/Navbar";
// import Products from "./Component_Structure/Products";
// import Footer from "./Component_Structure/Footer";
// import Parent from "./Components/Parent_Comp";
// import Childeren_Comp from "./Component_Structure/Children_Comp";
// import Button from "./Component_Structure/ButtonClick";

  /*  const[value ,setValue]=useState(0)
   const handleClick=()=>{
           setValue(value+1)
            //console.log("Button Clicked")
          }
    return(
        <div>
            <h1>My First Component</h1>
           {/*  <Component_1/> */
       /*     <Header/>
           <Navbar/>
           <Products name="Laptop" price={70000}/> */
          {/*  <Products name="Keyboard" price={3000}/>
           <Products name="Mouse" price={1000}/> */}
         /*   <Footer/>
          <Parent/> */
         {/*  the below is the children Component */}
         /*  <Childeren_Comp>
            <h1>Puja Prashant Chame</h1>
            <h4>Laptop</h4>
            <p>50000</p>
          </Childeren_Comp> */
          
         /*  <Button onClick={handleClick}/>
          {value}
        </div> */
   /*  ) */ 