import ProductItem from "./productItem"


const productosHome = ()=>{
    return(
        <div>
            <article>
                {products.map((product)=><ProductItem key={product.id} data={product} addToCart={addToCart}/>)}
            </article>
        </div>
    )
}