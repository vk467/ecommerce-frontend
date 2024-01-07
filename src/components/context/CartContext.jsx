import { createContext, useState } from "react";

export const CartCount =  createContext();

const CartContext = ({children}) => {

    const [count, setCount] = useState(0);
    return(
        <CartCount.Provider value={[count, setCount]}>
            {children}
        </CartCount.Provider>
    );
}

export default CartContext;

