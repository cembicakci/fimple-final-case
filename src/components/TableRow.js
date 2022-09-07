import React from 'react'

function TableRow({i, monthlyPayment, mainMoney, remainedMoney, interest}) {
    return (
        <tr>
            <td>{i}</td>
            <td>{monthlyPayment.toFixed(2)}</td>
            <td>{mainMoney.toFixed(2)}</td>
            <td>{remainedMoney.toFixed(2)}</td>
            <td>{interest.toFixed(2)}</td>
        </tr>
    )
}

export default TableRow