import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFormData } from "../redux/actions";
import RadioButton from "../components/RadioButton";
import Input from "../components/Input";
import SelectBox from "../components/SelectBox";
import Button from "../components/Button";

const FormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   option: '',
  //   name: '',
  //   gender: ''
  // });
  // const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm(formData);
  //   if (Object.keys(validationErrors).length === 0) {
  //     dispatch(addFormData(formData));
  //     navigate('/list');
  //   } else {
  //     setErrors(validationErrors);
  //   }
  // };

  // const validateForm = (data) => {
  //   const errors = {};
  //   if (!data.option) {
  //     errors.option = 'Please select an option';
  //   }
  //   if (!data.name) {
  //     errors.name = 'Please enter your name';
  //   } else if (!/^[a-zA-Z]+$/.test(data.name)) {
  //     errors.name = 'Name must contain only alphabetic characters';
  //   }
  //   if (!data.gender) {
  //     errors.gender = 'Please select your gender';
  //   }
  //   return errors;
  // };

  const [formData, setFormData] = useState({
    title: "",
    name: "",
    age: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData({ ...formData, [name]: value });
    // Clear error message when user starts typing again
    if (name === 'name' && !/^[a-zA-Z\s]*$/.test(value)) {
      setErrors({ ...errors, name: 'Name must contain only letters and spaces' });
    } else if(name === 'age' && (isNaN(value) || parseInt(value) < 0 || parseInt(value) > 110)){
      setErrors({ ...errors, age: 'Please enter a valid age between 0 and 120'});
    }else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    // Simple validation example (just checking if fields are filled)
    for (const key in formData) {
      if (formData[key] === "") {
        validationErrors[key] = `${key} is required`;
      }
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      console.log("Form submitted:", formData);
      dispatch(addFormData(formData));
      navigate('/list');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SelectBox
          label="Title"
          options={["Mr", "Mrs"]}
          value={formData.title}
          onChange={handleChange}
          name="title"
          error={errors.title}
        />
        <Input
          type="text"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          name="name"
        />
        <Input
          type="number"
          label="Age"
          value={formData.age}
          onChange={handleChange}
          error={errors.age}
          name="age"
        />
        <RadioButton
          label="Gender"
          options={["Male", "Female", "Other"]}
          selectedOption={formData.gender}
          onChange={handleChange}
          name="gender"
          error={errors.gender}
        />
        <Button label="Submit" />
      </form>
    </div>
  );
};

export default FormComponent;
