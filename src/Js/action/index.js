import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
} from "../const/actionTypes";

export const addTask = (payload) => {
  //payload : {task,isDone,id}
  return {
    type: ADD_TASK,
    payload,
  };
};

export const deleteTask = (payload) => {
  //payload : {id}
  return {
    type: DELETE_TASK,
    payload,
  };
};

export const completeTask = (payload) => {
  //payload : {id}
  return {
    type: COMPLETE_TASK,
    payload,
  };
};

export const editTask = (payload) => {
  //payload : {taskModified,id}
  return {
    type: EDIT_TASK,
    payload,
  };
};
