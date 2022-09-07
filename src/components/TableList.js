import React, { useContext } from 'react'
import FormContext from '../context/FormContext'
import TableRow from './TableRow';

function TableList() {

    const { items } = useContext(FormContext);

    let total = parseFloat(items[0].total);
    let interestRate = parseFloat(items[0].interest) / 100;
    let terms = parseFloat(items[0].terms);

    let interest = (total * interestRate);

    let monthlyPayment = total * [(interestRate * Math.pow((1 + interestRate), terms)) / (Math.pow((1 + interestRate), terms) - 1)];

    const rows = [];
    let remainedMoney = total - monthlyPayment + interest;
    let mainMoney = monthlyPayment - interest
    for (let i = 1; i <= terms; i++) {
        rows.push
            (
                <TableRow key={i} i={i} monthlyPayment={monthlyPayment} mainMoney={mainMoney} remainedMoney={remainedMoney} interest={interest}/>
            )

        interest = remainedMoney * interestRate;
        mainMoney = monthlyPayment - interest;
        remainedMoney = remainedMoney - mainMoney;

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
            </table>
        </div>
    )
}

export default TableList