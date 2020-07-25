import React from 'react';

import { Table } from '../BootstrapWrap'

const TableWrap = ({ tableHeads, tableRows }) => {
  return <Table striped bordered hover>
    <thead>
      <tr>
        {
          (tableHeads || []).map(tableHead => {
            return <th>{tableHead}</th>
          })
        }
      </tr>
    </thead>
    <tbody>
      {
        (tableRows || []).map(tableRow => {
          return <tr>
            <td>{tableRow.id}</td>
            <td>{tableRow.courseName}</td>
            <td>{tableRow.category}</td>
            <td>{tableRow.subCategory}</td>
            <td>{tableRow.fees}</td>
            <td>Edit</td>
          </tr>
        })
      }
    </tbody>
  </Table>
}

export default TableWrap;