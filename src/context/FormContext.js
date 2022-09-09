import React, { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = (props) => {

    const [items, setItems] = useState([]);
   
    const calculate = (total, interest, terms, select) => {
        setItems({ total, interest, terms, select })

    }

    const values = {
        calculate,
        items,
        setItems
    }

    return (
        <FormContext.Provider value={values}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContext