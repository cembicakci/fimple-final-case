import React from 'react'

function TableRow({ i, payment, mainMoney, remainedMoney, interest, kkdf, bsmv }) {
    console.log(interest)
    return (
        <tr>
            <td>{i}</td>
            <td>{payment.toFixed(2)} TL</td>
            <td>{mainMoney.toFixed(2)} TL</td>
            <td>{remainedMoney.toFixed(2)} TL</td>
            <td>{interest.toFixed(2)}</td>
            <td>{kkdf.toFixed(2)}</td>
            <td>{bsmv.toFixed(2)}</td>
        </tr>
    )
}

export default TableRow