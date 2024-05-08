export const addUserData = (userData) => ({
  type: "ADD_FORM_DATA",
  payload: userData,
});

export const deleteUserData = id => ({
  type: 'DELETE_FORM_DATA',
  payload: id
});

export const clearUserData = () => ({
  type: "CLEAR_FORM_DATA",
});
