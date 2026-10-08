import { useEffect, useState } from "react";

const UseEffect_Product_DataFectch = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products)
            })
        console.log(products)
    }, [])

    return (
        <div>
            <h2>products</h2>
            {products.map((product) => (
                <pre key={product.id}>
                    {JSON.stringify(product, null ,2)}
                </pre>
            ))}
        </div>
    )
}
export default UseEffect_Product_DataFectch;