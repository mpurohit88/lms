import React, { useState } from 'react';

import { Table } from '../BootstrapWrap';
import PrimaryButton from '../Button/PrimaryButton';

const TableWrap = ({ tableHeads, tableRows, onClick }) => {

  return <Table striped bordered hover>
    <thead>
      <tr>
        {
          (tableHeads || []).map((tableHead, index) => {
            return <th key={index}>{tableHead}</th>
          })
        }
      </tr>
    </thead>
    <tbody>
      {
        (tableRows || []).map(tableRow => {
          return <tr key={tableRow.key}>
            <td>{tableRow.key}</td>
            <td>{tableRow.courseName}</td>
            <td>{tableRow.category}</td>
            <td>{tableRow.subCategory}</td>
            <td>{tableRow.fees}</td>
            <td><PrimaryButton id={tableRow.id} text="Edit" onClick={() => onClick(tableRow)} /></td>
          </tr>
        })
      }
    </tbody>
  </Table>
}

export default TableWrap;