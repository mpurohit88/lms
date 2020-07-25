import React, { useState } from 'react';

import { TableWrap } from '../../../components';

const List = ({ listOfCourses }) => {
  const tableHeader = ['Id', 'Name', 'Category', 'Sub Category', 'Fees', 'Actions']

  return <div>
    <TableWrap tableHeads={tableHeader} tableRows={listOfCourses} />
  </div>
}

export default List;