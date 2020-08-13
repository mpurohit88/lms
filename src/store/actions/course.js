import axios from 'axios';

import * as actionType from './types';

export const saveCourse = (newCourse) => {
  return dispatch => {
    dispatch(saveCourseStart())
    try {
      axios.post('https://react-hook-lms.firebaseio.com/course.json', { course: newCourse })
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
// axios.post('https://react-hook-lms.firebaseio.com/course.json', { course: newCourse });
