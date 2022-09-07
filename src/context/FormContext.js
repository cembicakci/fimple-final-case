import React, { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = (props) => {

    const [items, setItems] = useState([]);

    const calculate = (total, interest, terms) => {
        setItems([...items, { total, interest, terms }])
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