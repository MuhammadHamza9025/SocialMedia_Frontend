import { useContext, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Shopcontext = createContext(null)


const Shopcontextprovider = (props) => {


    const contextvalue = {}

    return (

        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )
}
export default Shopcontextprovider;