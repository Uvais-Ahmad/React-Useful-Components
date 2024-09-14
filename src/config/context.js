import { createContext, useContext, useState } from "react";

const cartContext = createContext();
const authContext = createContext();
export default authContext;

const useCartConsumer = () => {
    const context = useContext(cartContext);
    if (!context) {
        throw new Error("useCartConsumer must be used within a CartProvider");
    }
    return context;
}

const CustomCartProvider = ({children}) => {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    const handleAdd = (price) => {
        setTotal(total + price);
        setItem(item + 1);
    };
    
    const handleRemove = (price) => {
        setTotal(prevTotal => prevTotal > 0 ?  prevTotal - price : 0);
        setItem(prevItem => prevItem > 0 ? prevItem - 1 : 0);
    };

    return (
        <cartContext.Provider value={{total, setTotal, item, setItem, handleAdd, handleRemove}}>
            {children}
        </cartContext.Provider>
    )
}
export {cartContext, CustomCartProvider, useCartConsumer};