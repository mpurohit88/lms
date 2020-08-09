import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { PrimaryButton, ModalWrap, Input } from '../../../components';

import List from './List'
import Create from './Create';

const Course = () => {
  const [isCreate, setIsCreate] = useState(true);
  const [lgShow, setLgShow] = useState(false);
  const [newCourse, setNewCourse] = useState({});
  const [listOfCourses, setListOfCourses] = useState([]);
  const [originalListOfCourses, setOriginalListOfCourses] = useState([]);

  const courseRedux = useSelector(state => state.courseState.course);

  useEffect(() => {
    setListOfCourses(courseRedux);
    setOriginalListOfCourses(courseRedux);
  }, [courseRedux])

  useEffect(() => {
    console.log("newCourse...", newCourse);
  }, [newCourse])

  const sumbitCourse = () => {
    const newCourseArray = [...listOfCourses];
    newCourseArray.push(newCourse);

    setListOfCourses(newCourseArray);
  }

  const editSubmitCourse = () => {
    const newCourseArray = listOfCourses.map(course => {
      return course.id === newCourse.id ? newCourse : course;
    });

    setListOfCourses(newCourseArray);
  }

  const editCourse = (course) => {
    setLgShow(true);
    setNewCourse(course);
    setIsCreate(false);
  }

  const filterCourse = (event) => {
    const value = event.target.value;
    const filteredCourseArray = originalListOfCourses.filter(course => course.courseName.toLowerCase().startsWith(value.toLowerCase()));

    setListOfCourses(value === '' ? originalListOfCourses : filteredCourseArray);
  }

  return (
    <div>
      Course <br /> <br />

      <PrimaryButton text="Create New Course" onClick={() => setLgShow(!lgShow)} />
      <div style={{ "width": "500px" }}>
        <Input name="filter" text="Filter By Name" autoFocus={true} onChange={filterCourse} />
      </div>
      <br />
      <List listOfCourses={listOfCourses} onClick={(course) => editCourse(course)} />
      <ModalWrap isCreate={isCreate} editSubmitCourse={editSubmitCourse} title="Create New Course" sumbitCourse={sumbitCourse} lgShow={lgShow} setLgShow={setLgShow}>
        <Create newCourse={newCourse} setNewCourse={setNewCourse} />
      </ModalWrap>
    </div>
  )
}

export default Course;