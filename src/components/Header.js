import React, { useContext, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FormContext from '../context/FormContext';
import { Col } from 'react-bootstrap';


function Header() {

    const totalRef = useRef();
    const interestRef = useRef();
    const termsRef = useRef();

    const { calculate } = useContext(FormContext);
    const { items } = useContext(FormContext);
    const { setItems } = useContext(FormContext);


    const [select, setSelect] = useState();


    const [values, setValues] = useState({
        total: '',
        interest: '',
        terms: '',
        select: ''
    });

    function onInputChange(e) {
        e.preventDefault();
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const { total, interest, terms } = values;


    function handleSubmit(e) {
        e.preventDefault();


        if (values.terms === '') {
            termsRef.current.focus();
        }

        if (values.interest === '') {
            interestRef.current.focus();
        }

        if (values.total === '') {
            totalRef.current.focus();
        }


        if (values.total !== '' && values.interest !== '' && values.terms !== '') {
            setItems([
                {
                    total: total,
                    interest: interest,
                    terms: terms,
                    select: select
                }
            ])

            calculate(total, interest, terms, select);
        }
    }

    return (
        <Form onSubmit={handleSubmit} className={'d-flex flex-column align-items-center justify-content-center'}>
            <Form.Group className='col-md-3 mx-3'>
                <Form.Label>Kredi Tutarı(Ana Para):</Form.Label>
                <Form.Control type="number" name='total' value={values.total} onChange={(e) => onInputChange(e)} ref={totalRef} />
            </Form.Group>

            <Form.Group className='col-md-3 mx-3'>
                <Form.Label>Faiz Oranı(%):</Form.Label>
                <Form.Control type="number" name='interest' value={values.interest} onChange={(e) => onInputChange(e)} ref={interestRef} />
            </Form.Group>

            <Form.Group className='col-md-3 mx-3'>
                <Form.Label>Taksit Sayısı:</Form.Label>
                <Row>
                    <Col>
                        <Form.Control type="number" name='terms' value={values.terms} onChange={(e) => onInputChange(e)} ref={termsRef} />
                    </Col>

                    <Col>
                        <Form.Select aria-label="Default select example" onChange={(e) => setSelect(e.target.value)}>
                            <option>Seçiniz</option>
                            <option value="monthly">Aylık</option>
                            <option value="weekly">Haftalık</option>
                            <option value="yearly">Yıllık</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Form.Group>

            <Button variant="success" type="submit" className='my-4'>Calculate</Button>
        </Form>
    )
}

export default Header