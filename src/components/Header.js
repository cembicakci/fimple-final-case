import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormContext from '../context/FormContext';


function Header() {

    const { calculate } = useContext(FormContext);
    const { setItems } = useContext(FormContext);

    const [values, setValues] = useState({
        total: '',
        interest: '',
        terms: ''
    });

    function onInputChange(e) {
        e.preventDefault();
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const { total, interest, terms } = values;

    function handleSubmit(e) {
        e.preventDefault();

        calculate(total, interest, terms);

        setItems([
            {
                total: total,
                interest: interest,
                terms: terms
            }
        ])

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mx-3'>
                <Form.Label>Kredi Tutarı(Ana Para):</Form.Label>
                <Form.Control type="number" name='total' value={values.total} onChange={(e) => onInputChange(e)} />
            </Form.Group>

            <Form.Group className='mx-3'>
                <Form.Label>Faiz Oranı(%):</Form.Label>
                <Form.Control type="number" name='interest' value={values.interest} onChange={(e) => onInputChange(e)} />
            </Form.Group>

            <Form.Group className='mx-3'>
                <Form.Label>Taksit Sayısı:</Form.Label>
                <Form.Control type="number" name='terms' value={values.terms} onChange={(e) => onInputChange(e)} />
            </Form.Group>

            <Button variant="success" type="submit" className='my-4'>Calculate</Button>
        </Form>
    )
}

export default Header