import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserData } from "../redux/actions";
import RadioButton from "../components/RadioButton";
import Input from "../components/Input";
import SelectBox from "../components/SelectBox";
import Button from "../components/Button";

const FormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    title: "",
    name: "",
    age: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});

  console.log(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setUserData({ ...userData, [name]: value });
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      setErrors({
        ...errors,
        name: "Name must contain only letters and spaces",
      });
    } else if (
      name === "age" &&
      (isNaN(value) || parseInt(value) < 0 || parseInt(value) > 110)
    ) {
      setErrors({
        ...errors,
        age: "Please enter a valid age between 0 and 120",
      });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    for (const key in userData) {
      if (userData[key] === "") {
        validationErrors[key] = `${key} is required`;
      }
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      console.log("Form submitted:", userData);
      dispatch(addUserData(userData));
      navigate("/list");
    }
  };

  return (
    <div>
      <form class="form-control" onSubmit={handleSubmit}>
        <p class="title">Login</p>
        <div class="input-field">
          <SelectBox
            label="Title"
            options={["Mr", "Mrs"]}
            value={userData.title}
            onChange={handleChange}
            name="title"
            error={errors.title}
            className="input"
          />
        </div>
        <div class="input-field">
          <Input
            type="text"
            label="Name"
            value={userData.name}
            onChange={handleChange}
            error={errors.name}
            name="name"
            className="input"
          />
        </div>
        <div class="input-field">
          <Input
            type="number"
            label="Age"
            value={userData.age}
            onChange={handleChange}
            error={errors.age}
            name="age"
            className="input"
          />
        </div>
        <div class="input-field">
          <RadioButton
            label="Gender"
            options={["Male", "Female"]}
            selectedOption={userData.gender}
            onChange={handleChange}
            name="gender"
            error={errors.gender}
            className="input-radio on"
          />
        </div>
        <Button label="Submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default FormComponent;
