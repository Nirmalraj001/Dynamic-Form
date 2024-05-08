export const addFormData = (formData) => ({
  type: "ADD_FORM_DATA",
  payload: formData,
});

export const deleteFormData = id => ({
  type: 'DELETE_FORM_DATA',
  payload: id
});

export const clearFormData = () => ({
  type: "CLEAR_FORM_DATA",
});
