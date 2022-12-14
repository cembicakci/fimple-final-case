import React, { useContext } from 'react'
import FormContext from '../context/FormContext'
import ThemeContext from '../context/ThemeContext'
import TableRow from './TableRow';

function TableList() {

    const { items } = useContext(FormContext);
    const { themes } = useContext(ThemeContext);
    const { darkMode } = useContext(ThemeContext);

    console.log(items)

    let total = parseFloat(items.total);
    let interestRate = parseFloat(items.interest) / 100; //faizin yüzdelik değeri alınır.
    let terms = parseFloat(items.terms);

    let interest = (total * interestRate);

    let payment;

    //selection a göre payment hesaplanır.
    if (items.select === 'monthly') {
        payment = total * [(interestRate * Math.pow((1 + interestRate), terms)) / (Math.pow((1 + interestRate), terms) - 1)];
    } else if (items.select === 'weekly') {
        payment = total * [(interestRate * 4 * Math.pow((1 + interestRate * 4), terms)) / (Math.pow((1 + interestRate * 4), terms) - 1)];
    } else if (items.select === 'yearly') {
        payment = total * [(interestRate * 12 * Math.pow((1 + interestRate * 12), terms)) / (Math.pow((1 + interestRate * 12), terms) - 1)];
    }


    const rows = []; //for döngüsünden gelen her bir TableRow component'i row object'ine yazdırılır
    let kkdf = interest * 0.15;
    let bsmv = interest * 0.05;

    let remainedMoney = total - payment + interest;
    let mainMoney = payment - (interest + kkdf + bsmv);

    for (let i = 1; i <= terms; i++) {
        rows.push
            (
                <TableRow key={i} i={i} payment={payment} mainMoney={mainMoney} remainedMoney={remainedMoney} interest={interest} kkdf={kkdf} bsmv={bsmv} />
            )

        interest = remainedMoney * interestRate;
        mainMoney = payment - (interest + kkdf + bsmv);
        remainedMoney = remainedMoney - mainMoney;

        kkdf = interest * 0.15;
        bsmv = interest * 0.05;

    }


    return (
        <div className={`tablelist ${darkMode ? 'active' : ''}`}>
            <div>
                <div className="col-sm-6">
                    <h2>Geri Ödeme Planı Tablosu</h2>
                </div>
            </div>

            <div>
                <table className={`table table-striped table-hover`} style={darkMode ? themes.dark : themes.light}>
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
        </div>
    )
}

export default TableList