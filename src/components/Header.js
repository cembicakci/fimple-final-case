import React, { useContext, useImperativeHandle, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FormContext from '../context/FormContext';
import { Col } from 'react-bootstrap';
import '../App.css'
import Input from './Input';

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

        console.log(values);

        // if (values.terms === '') {
        //     termsRef.current.alertHi();
        // }


        // if (values.interest === '') {
        //     interestRef.current.focus();
        // }

        // if (values.total === '') {
        //     totalRef.current.focus();
        // }

        if( values.terms === '' || values.interest === '' || values.total === '') {
            totalRef.current.alertHi()
        }else{
            calculate(total, interest, terms, select);
        }

    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className={'d-flex flex-column align-items-center justify-content-center '}>
                <Form.Group className='col-md-3 mx-3'>
                    <Form.Label>Kredi Tutarı(Ana Para):</Form.Label>
                    <Input type="number" name='total' value={values.total} ref={totalRef} handleChange={onInputChange}/>
                    {/* <Form.Control  type="number" name='total' value={values.total} onChange={(e) => onInputChange(e)} ref={totalRef} /> */}

                </Form.Group>

                <Form.Group className='col-md-3 mx-3'>
                    <Form.Label>Faiz Oranı(%):</Form.Label>
                    <Input type="number" name='interest' value={values.interest} ref={interestRef} handleChange={onInputChange}/>
                    {/* <Form.Control type="number" name='interest' value={values.interest} onChange={(e) => onInputChange(e)} ref={interestRef} /> */}
                </Form.Group>

                <Form.Group className='col-md-3 mx-3'>
                    <Form.Label>Taksit Sayısı:</Form.Label>
                    <Row>
                        <Col>
                            <Input type="number" name='terms' value={values.terms} ref={termsRef} handleChange={onInputChange}/>
                            {/* <Form.Control type="number" name='terms' value={values.terms} onChange={(e) => onInputChange(e)} ref={termsRef} /> */}
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

                <Button variant="success" type="submit" className='my-4' onClick={() => {}}>Calculate</Button>
            </Form>

            <button type="submit" className='darkMode' >Dark Mode</button>
        </div>
    )
}

export default Header