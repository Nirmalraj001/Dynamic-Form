import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearFormData, deleteFormData } from "../redux/actions";

const ListComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.formData);

  console.log(formData, "formData");

  const handleDelete = (id) => {
    dispatch(deleteFormData(id));
  };

  const handleDeleteAll = () => {
    dispatch(clearFormData());
    localStorage.removeItem("formData");
  };

  return (
    <div>
      <h2>Form Data List</h2>
      {formData.length === 0 ? (
        <p>No form data stored.</p>
      ) : (
        <ul>
          {formData.map((data, index) => (
            <li key={index}>
              <div>
                <strong>Option:</strong> {data.title}
              </div>
              <div>
                <strong>Name:</strong> {data.name}
              </div>
              <div>
                <strong>Age:</strong> {data.age}
              </div>
              <div>
                <strong>Gender:</strong> {data.gender}
              </div>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate("/form")}>Add</button>
      {formData.length > 1 && (
          <button onClick={() => handleDeleteAll()}>Delete All</button>
        )}
    </div>
  );
};

export default ListComponent;
