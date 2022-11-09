import { useReducer } from "react";
import { carritoReducer, carritoInitialState } from "../reducers/carritoReducer";
import ProductItem from "./productItem"

const Carrito = ()=>{
    const [state, dispatch]=useReducer(carritoReducer, carritoInitialState);
    const{products, cart}=state

    const addToCart=()=>{}

    const delFromCart=()=>{}

    const clearCart=()=>{}

    return(
        <div>
            <div>
            <article>
                {products.map((product)=>(<ProductItem key={product.id} data={product} addToCart={addToCart}/>))}
            </article>
        </div>
            <h2>
                carrito de compras
            </h2>
        </div>
    )
}

export default Carrito;