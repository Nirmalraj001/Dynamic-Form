const initialState = {
  formData: JSON.parse(localStorage.getItem("formData")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FORM_DATA":
      const newFormData = [...state.formData, action.payload];
      localStorage.setItem("formData", JSON.stringify(newFormData)); // Update localStorage
      return {
        ...state,
        formData: newFormData,
      };
    case "DELETE_FORM_DATA":
      const updateFormData = state.formData.filter(
        (data, index) => index !== action.payload
      );
      localStorage.setItem("formData", JSON.stringify(updateFormData)); // Delete localStorage
      return {
        ...state,
        formData: updateFormData
      };
    case "CLEAR_FORM_DATA":
      localStorage.removeItem("formData"); // Remove from localStorage
      return {
        ...state,
        formData: [],
      };
    default:
      return state;
  }
};

export default reducer;
