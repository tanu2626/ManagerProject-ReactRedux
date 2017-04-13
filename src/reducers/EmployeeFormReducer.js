import {
  EMPLOYEE_UPDATE
} from '../actions/types';

//action creater and reducer put together

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};


//action.payload === { prop: 'name', value: 'jane' }
//key interpolation  => [action.payload.prop]:
