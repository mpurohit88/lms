import React, { useState, useEffect } from 'react';

import { PrimaryButton, ModalWrap } from '../../../components';
import List from './List'
import Create from './Create';

const Course = () => {
  const [lgShow, setLgShow] = useState(false);
  const [newCourse, setNewCourse] = useState({});
  const [listOfCourses, setListOfCourses] = useState([{
    id: 1,
    courseName: "Course Name",
    category: 1,
    subCategory: 2,
    fees: 1000
  },
  {
    id: 2,
    courseName: "Second Name",
    category: 2,
    subCategory: 1,
    fees: 1200
  }
  ]);


  useEffect(() => {
    console.log("newCourse...", newCourse);
  }, [newCourse])

  const sumbitCourse = () => {
    const newCourseArray = [...listOfCourses];
    newCourseArray.push(newCourse);

    setListOfCourses(newCourseArray);
  }

  const editCourse = (course) => {
    setLgShow(true);
    setNewCourse(course);
  }

  return (
    <div>
      Course <br /> <br />

      <PrimaryButton text="Create New Course" onClick={() => setLgShow(!lgShow)} />
      <br />
      <List listOfCourses={listOfCourses} onClick={(course) => editCourse(course)} />
      <ModalWrap title="Create New Course" sumbitCourse={sumbitCourse} lgShow={lgShow} setLgShow={setLgShow}>
        <Create newCourse={newCourse} setNewCourse={setNewCourse} />
      </ModalWrap>
    </div>
  )
}

export default Course;