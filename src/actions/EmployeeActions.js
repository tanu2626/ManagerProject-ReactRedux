import {
  EMPLOYEE_UPDATE
} from './types';


//aCTION createR
export const employeeUpdate = ({ prop,  value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  console.log(name, phone, shift);
};
