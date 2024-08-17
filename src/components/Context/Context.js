import {createContext, useState } from "react";


const Context = createContext();

function Provider({children}){
    const [count, setCount] = useState(0)
    return (
        <Context.Provider value={{count, setCount}}>{children}</Context.Provider>
    )
}

export {Provider, Context}