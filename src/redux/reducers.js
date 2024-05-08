const initialState = {
  userData: JSON.parse(localStorage.getItem("userData")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FORM_DATA":
      const newUserData = [...state.userData, action.payload];
      localStorage.setItem("userData", JSON.stringify(newUserData)); // Update localStorage
      return {
        ...state,
        userData: newUserData,
      };
    case "DELETE_FORM_DATA":
      const updateUserData = state.userData.filter(
        (data, index) => index !== action.payload
      );
      localStorage.setItem("userData", JSON.stringify(updateUserData)); // Delete localStorage
      return {
        ...state,
        userData: updateUserData
      };
    case "CLEAR_FORM_DATA":
      localStorage.removeItem("userData"); // Remove from localStorage
      return {
        ...state,
        userData: [],
      };
    default:
      return state;
  }
};

export default reducer;
