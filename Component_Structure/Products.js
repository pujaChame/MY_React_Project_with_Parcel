const Products=(props)=>{
    return(
        <>
        <h3>Hardcoded Products Data</h3>
        <p>Laptop : 50000</p>
        <p>Keyboard : 1000</p>
        <p>Mouse : 2000</p>
        
        <h3>Using Props Data</h3>
        <p>{props.name} {props.price}</p>
        </>
        
    )

}
export default Products;