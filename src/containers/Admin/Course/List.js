import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TableWrap } from '../../../components';
import { fetchCourses } from '../../../store/actions/course';

const List = ({ onClick }) => {
  const tableHeader = ['Id', 'Name', 'Category', 'Sub Category', 'Fees', 'Actions']
  const listOfCourses = useSelector(state => state.courseState.course);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [])

  return <div>
    <TableWrap tableHeads={tableHeader} tableRows={listOfCourses} onClick={onClick} />
  </div>
}

export default List;