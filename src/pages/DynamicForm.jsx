import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserData } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import SelectBox from "../components/SelectBox";
import RadioButton from "../components/RadioButton";
import Button from "../components/Button";

const DynamicForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState([
    { id: 1, userName: "", option: "", gender: "", errors: {} },
  ]);

  const handleChange = (index, field, value) => {
    console.log(index, "index");
    const newUserData = [...userData];

    // check onChange validation
    if (field === "userName") {
      if (value === "") {
        newUserData[index].errors.userName = "Enter a name";
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        newUserData[index].errors.userName = "Only alphabets allowed";
      } else {
        newUserData[index].errors[field] = "";
      }
    } else {
      newUserData[index].errors[field] = "";
    }

    newUserData[index][field] = value;
    setUserData(newUserData);
  };

  const handleSubmit = () => {
    let formIsValid = true;
    const newUserData = [...userData];

    // check loop form validation
    newUserData.forEach((data, index) => {
      const errors = {};
      if (!data.userName.trim()) {
        errors.userName = "Name is required";
        formIsValid = false;
      }
      if (!data.option.trim()) {
        errors.option = "Please select option";
        formIsValid = false;
      }
      if (!data.gender) {
        errors.gender = "Please choose gender";
        formIsValid = false;
      }
      newUserData[index].errors = errors;
    });

    if (formIsValid) {
      dispatch(addUserData(userData));
      navigate("/list");
    } else {
      setUserData(newUserData);
    }
  };

  // Add dynamic form functionality
  const handleAddMore = () => {
    setUserData([
      ...userData,
      {
        id: userData.length + 1,
        userName: "",
        option: "",
        gender: "",
        errors: {},
      },
    ]);
  };

  // remove particular added dynamic form functionality
  const handleRemove = (index) => {
    const newUserData = userData.filter((data, i) => i !== index);
    setUserData(newUserData);
  };

  return (
    <div className="form-container">
      {userData.map((data, index) => (
        <div key={data.id}>
          <h3>Form {data.id}</h3>
          <div className="form-row">
            <div className="select-wrapper">
              <SelectBox
                options={["Mr", "Mrs"]}
                value={data.option}
                onChange={(e) => handleChange(index, "option", e.target.value)}
                className="select-field"
                error={data.errors.option}
              />
            </div>
            <div className="input-wrapper">
              <Input
                className="input-field"
                type="text"
                value={data.userName}
                onChange={(e) =>
                  handleChange(index, "userName", e.target.value)
                }
                error={data.errors.userName}
                placeHolder="Enter a Name"
              />
            </div>
          </div>
          <div className="radio-group">
            <RadioButton
              label="Gender :"
              options={["Male", "Female"]}
              selectedOption={data.gender}
              onChange={(e) => handleChange(index, "gender", e.target.value)}
              name={`radio_${data.id}`}
              error={data.errors.gender}
              className="input-radio on"
            />
          </div>
          <br />
          {userData.length > 1 && (
            <Button className="remove_btn" onClick={() => handleRemove(index)} label='Remove' />
          )}
          <hr />
        </div>
      ))}
      <div className="button-container">
        <Button onClick={handleAddMore} label='Add more' />
        <Button onClick={handleSubmit} label='Submit' />
      </div>
    </div>
  );
};

export default DynamicForm;
