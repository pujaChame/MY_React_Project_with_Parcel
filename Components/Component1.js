
const product=["Laptop","Mobile","Mouse","Keyboard"]
const user={
    Ename:"Pooja",
    Eage:32
}
const isLoggedIn=false;
const isWorking=true;
const Component_1 = () => {
    const name = "Puja Prashant Chame";
    const age = 25;
    const price=50000;
    const quantity=3;
    return (
        <div>
            <p>My Name Is: {name}</p>
            <p>{name.toUpperCase()}</p>
            <p>length={name.length}</p>
            <p>My Age is: {age}</p>
            <p>{age>18?"Adult":"Minor"}</p>
            {isLoggedIn?<h2>Welcome User</h2>:<h2>Please LogIn</h2>}
            {isWorking && <p>please Join Meeting</p>}
            <p>price*quantity={price*quantity}</p>
            <p>My E-Commerce App</p> 
            <p>Welcome to my store</p>
            {/* <p>{user}</p> */}

            <p>{product.map((ele)=>(
                    ele
            )).join(" ")}</p>
        </div>

    )


}
export default Component_1;