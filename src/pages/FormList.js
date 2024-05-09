import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserData } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const FormList = () => {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteUserData(id));
  };

  return (
    <>
      <h2 className="caption">User List</h2>
      {userData.length === 0 ? (
        <p className="no-data">No User data stored.</p>
      ) : (
        <div className="card-container">
          {userData &&
            userData?.map((data, index) => (
              <div key={index} className="card">
                <p>
                  <strong>Name : </strong>
                  <span>
                    {data.option}. {data.userName}
                  </span>
                </p>
                <p>
                  <strong>Gender : </strong>
                  <span>{data.gender}</span>
                </p>
                <Button
                  className="remove_btn"
                  onClick={() => handleDelete(index)}
                  label="Delete"
                />
              </div>
            ))}
        </div>
      )}
      <div className="btn-wrap">
        <Button onClick={() => navigate("/")} label="Add Data" />
      </div>
    </>
  );
};

export default FormList;
