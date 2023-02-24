import React, { Fragment, useState } from "react";
import "./UpdatePassword.css";
import Loading from "../layout/Loading/Loading";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import {useNavigate} from "react-router-dom"
import { useUserContext } from "../../ContextApi/ProductContext/UserContext";

const UpdatePassword = () => {
    const {loading,updatePassword} = useUserContext()
    const navigate = useNavigate()
    const [oldPassword, setOldPassword] = useState({
        oldpassword:"",
        newpassword : ""
    });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setOldPassword({
      ...oldPassword,
      [name]: value,
    });
  };

  const updatePasswordSubmit = (e) => {
    e.preventDefault();


    updatePassword(oldPassword.oldpassword,oldPassword.newpassword,navigate);
  };

  return (
    <Fragment>
    {loading ? 
      <Loading />
     : 
      <Fragment>
        <div className="updatePasswordContainer">
          <div className="updatePasswordBox">
            <h2 className="updatePasswordHeading">Update Profile</h2>

            <form
              className="updatePasswordForm"
              onSubmit={updatePasswordSubmit}
            >
              <div className="loginPassword">
                <VpnKeyIcon />
                <input
                  type="password"
                  placeholder="Old Password"
                  required
                  value={oldPassword.oldpassword}
                  onChange={handleInput}
                  name = "oldpassword"
                />
              </div>

              <div className="loginPassword">
                <LockOpenIcon />
                <input
                  type="password"
                  placeholder="New Password"
                  required
                  value={oldPassword.newpassword}
                  onChange={handleInput}
                  name = "newpassword"
                />
              </div>
              <input
                type="submit"
                value="Change"
                className="updatePasswordBtn"
              />
            </form>
          </div>
        </div>
      </Fragment>
    }
  </Fragment>
  )
}

export default UpdatePassword
