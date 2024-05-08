import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUserData, deleteUserData } from "../redux/actions";
import Button from "../components/Button";

const ListComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  console.log(userData, "userData");

  const handleDelete = (id) => {
    dispatch(deleteUserData(id));
  };

  const handleDeleteAll = () => {
    dispatch(clearUserData());
    localStorage.removeItem("userData");
  };

  return (
    <>
    <div class="contacts table">
      <h2 class="caption">User List</h2>
      {userData.length === 0 ? (
        <p className="no-data">No User data stored.</p>
      ) : (
        <>
          <div class="contacts-header thead">
            <span class="th" id="th-name">
              Name:
            </span>
            <span class="th" id="th-age">
              Age:
            </span>
            <span class="th" id="th-gender">
              Gender:
            </span>
          </div>
          <ul class="tbody">
            {userData.map((data, index) => (
              <li key={index} class="tr" itemscope>
                <span class="td">
                  <span class="label">Name:</span>
                  <span class="data" itemprop="name" aria-labelledby="th-name">
                    {" "}
                    {data.title} {data.name}
                  </span>
                </span>
                <span class="td">
                  <span class="label">Age:</span>
                  <span class="data" itemprop="name" aria-labelledby="th-name">
                    {" "}
                    {data.age}
                  </span>
                </span>
                <span class="td">
                  <span class="label">Gender:</span>
                  <span class="data" itemprop="name" aria-labelledby="th-name">
                    {" "}
                    {data.gender}
                  </span>
                </span>
                <button class="del-button" onClick={() => handleDelete(index)}>
                  <svg viewBox="0 0 448 512" class="svgIcon">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      </div>
      <div className="btn-wrap">
        <div className="btn-align">
          <Button className='button' onClick={() => navigate("/form")} label='Add' />
          {userData.length > 1 && (
            <Button className='delbutton' onClick={() => handleDeleteAll()} label='Delete All' />
          )}
        </div>
      </div>
    </>
  );
};

export default ListComponent;
