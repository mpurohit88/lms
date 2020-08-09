
import * as actionType from './types';

export const saveCourse = (newCourse) => {
  return {
    type: actionType.SAVE_COURSE,
    value: newCourse
  }
}
