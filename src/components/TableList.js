import React, { useContext } from 'react'
import FormContext from '../context/FormContext'
import TableRow from './TableRow';

function TableList() {

    const { items } = useContext(FormContext);


    let total = parseFloat(items[0].total);
    let interestRate = parseFloat(items[0].interest) / 100;
    let terms = parseFloat(items[0].terms);

    let interest = (total * interestRate);

    let payment;

    if(items[0].select === 'monthly'){
        payment = total * [(interestRate * Math.pow((1 + interestRate), terms)) / (Math.pow((1 + interestRate), terms) - 1)];
    }

    // } else if(items[0].select === 'weekly'){
    //     payment = total * [(interestRate * Math.pow((1 + interestRate), terms)) / (Math.pow((1 + interestRate), terms) - 1)];
    // }


    const rows = [];
    interestRate = interestRate;
    let remainedMoney = total - payment + interest;
    let mainMoney = payment - interest;
    let kkdf = interest * 0.15;
    let bsmv = interest * 0.10;

    for (let i = 1; i <= terms; i++) {
        rows.push
            (
                <TableRow key={i} i={i} payment={payment} mainMoney={mainMoney} remainedMoney={remainedMoney} interest={interest} kkdf={kkdf} bsmv={bsmv}/>
            )

        interest = remainedMoney * interestRate;
        mainMoney = payment - interest;
        remainedMoney = remainedMoney - mainMoney;

        kkdf = interest * 0.15;
        bsmv = interest * 0.10;

    }


    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                    <h2>Geri Ödeme Planı Tablosu</h2>
                </div>
            </div>

            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Taksit No</th>
                        <th>Taksit Tutarı</th>
                        <th>Ana Para</th>
                        <th>Kalan Ana Para</th>
                        <th>Kar Tutarı</th>
                        <th>KKDF</th>
                        <th>BSMV</th>
                    </tr>
                </thead>

                <tbody>
                    {rows}
                </tbody>

                <tbody>
                    <tr>
                        <th>Toplam:</th>
                        <th>{(payment * terms).toFixed(2)} TL</th>
                        <th>{(total).toFixed(2)} TL</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableList