import React, { useState, useEffect } from 'react';

import { PrimaryButton, ModalWrap } from '../../../components';
import List from './List'
import Create from './Create';

const Course = () => {
  const [lgShow, setLgShow] = useState(false);
  const [newCourse, setNewCourse] = useState({});
  const [listOfCourses, setListOfCourses] = useState([]);


  useEffect(() => {
    console.log("newCourse...", newCourse);
  }, [newCourse])

  const sumbitCourse = () => {
    const newCourseArray = [...listOfCourses];
    newCourseArray.push(newCourse);

    setListOfCourses(newCourseArray);
    console.log(newCourse);
  }

  return (
    <div>
      Course <br /> <br />

      <PrimaryButton text="Create New Course" onClick={() => setLgShow(!lgShow)} />
      <br />
      <List listOfCourses={listOfCourses} />
      <ModalWrap title="Create New Course" sumbitCourse={sumbitCourse} lgShow={lgShow} setLgShow={setLgShow}>
        <Create setNewCourse={setNewCourse} />
      </ModalWrap>
    </div>
  )
}

export default Course;