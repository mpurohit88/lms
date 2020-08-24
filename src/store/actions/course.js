import axios from 'axios';

import * as actionType from './types';

const url = 'http://localhost:3002';

export const saveCourseStart = () => {
  return {
    type: actionType.COURSE_SAVE_START
  }
}

export const saveCoursSuccess = (newCourse) => {
  return {
    type: actionType.COURSE_SAVE_SUCCESS,
    value: newCourse
  }
}

export const saveCoursFailure = (error) => {
  return {
    type: actionType.COURSE_SAVE_FAILURE,
    value: error
  }
}

export const saveCourse = (newCourse) => {
  return dispatch => {
    dispatch(saveCourseStart())
    try {
      axios.post(url + '/course.json?auth=' + localStorage.getItem('token'), { course: newCourse })
        .then((response) => {
          console.log("response..", response);
          dispatch(saveCoursSuccess(newCourse))
        })
        .catch(error => {
          console.log("error..", error);
          dispatch(saveCoursFailure(error))
        })
    } catch (error) {
      dispatch(saveCoursFailure(error))
    }
  }
}

export const fetchCourseStart = () => {
  return { type: actionType.COURSE_FETCH_START }
}

export const fetchCourseSuccess = (listOfCourses) => {
  return { type: actionType.COURSE_FETCH_SUCCESS, value: listOfCourses }
}

export const fetchCourseFailure = () => {
  return { type: actionType.COURSE_SAVE_FAILURE }
}

export const fetchCourses = () => {
  return dispatch => {
    dispatch(fetchCourseStart());

    axios.get(`${url}/course.json`)
      .then(response => {

        let courseList = [];
        const courseResult = response.data;


        // Object.keys(courseResult).map(key => {
        //   console.log("kesy...", key);
        //   courseList.push({ key: key, ...courseResult[key].course });
        // })

        dispatch(fetchCourseSuccess(courseResult));
      })
      .catch(error => {
        dispatch(fetchCourseFailure(error));
      });
  }
}