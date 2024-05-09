import { ADD_USER_DATA, DELETE_USER_DATA } from './actions';

const initialState = {
  userData: JSON.parse(localStorage.getItem('userData')) || [],
};

const rootReducer = (state = initialState, action) => {
  console.log(initialState,"initialState")
  switch (action.type) {
    case ADD_USER_DATA:
      const addedUserData = [...state.userData, ...action.payload];
      localStorage.setItem('userData', JSON.stringify(addedUserData));
      return {
        ...state,
        userData: addedUserData,
      };
    case DELETE_USER_DATA:
      const updatedUserData = state.userData.filter((data, index) => index !== action.payload);
      localStorage.setItem('userData', JSON.stringify(updatedUserData));
      return {
        ...state,
        userData: updatedUserData,
      };
    default:
      return state;
  }
};

export default rootReducer;
