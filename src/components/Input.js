import React, { useImperativeHandle } from 'react'
import { Form } from 'react-bootstrap'

function Input({ handleChange, name, type }, ref) {
    useImperativeHandle(ref, () => {
        return { alertError: () => alert('Lütfen tüm bilgileri giriniz') }
    })
    return (
        <Form.Control type={type} name={name} onChange={handleChange} />
    )
}

export default React.forwardRef(Input)