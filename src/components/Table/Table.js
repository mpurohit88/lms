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
          return <tr key={tableRow.id}>
            <td>{tableRow.key}</td>
            <td>{tableRow.name}</td>
            <td>{tableRow.category_id}</td>
            <td>{tableRow.subCategory_id}</td>
            <td>{tableRow.price}</td>
            <td><PrimaryButton id={tableRow.id} text="Edit" onClick={() => onClick(tableRow)} /></td>
          </tr>
        })
      }
    </tbody>
  </Table>
}

export default TableWrap;