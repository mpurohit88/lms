import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TableWrap } from '../../../components';
import { getCourses } from '../../../store/actions/course';

const List = ({ onClick }) => {
  const tableHeader = ['Id', 'Name', 'Category', 'Sub Category', 'Fees', 'Actions']
  const dispatch = useDispatch();

  const listOfCourses = useSelector(state => state.courseState.list)

  useEffect(() => {
    dispatch(getCourses())
  }, [])

  return <div>
    <TableWrap tableHeads={tableHeader} tableRows={listOfCourses} onClick={onClick} />
  </div>
}

export default List;