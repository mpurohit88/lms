import * as actionType from '../actions/types';

const initialState = {
  course: [{
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
  ]
};

function course(state = initialState, action) {
  console.log("course...", state);

  switch (actionType) {
    case actionType.SAVE_COURSE:
      return state;
  }

  return state;
}

export default course;