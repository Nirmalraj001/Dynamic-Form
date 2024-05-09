export const ADD_USER_DATA = 'ADD_USER_DATA';
export const DELETE_USER_DATA = 'DELETE_USER_DATA';

export const addUserData = (data) => ({
  type: ADD_USER_DATA,
  payload: data,
});

export const deleteUserData = (index) => ({
  type: DELETE_USER_DATA,
  payload: index,
});
