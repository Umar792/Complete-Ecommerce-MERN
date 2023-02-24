import React, { Fragment, useEffect } from "react";
import Loading from "../layout/Loading/Loading";
import { Link } from "react-router-dom";
import "./Profile.css";
import {useNavigate} from "react-router-dom"
import { useUserContext } from "../../ContextApi/ProductContext/UserContext";

const Profile = () => {
  const {user,isAuthanticated,loading} = useUserContext()
  const navigtae = useNavigate()
  useEffect(() => {
    if (isAuthanticated === false) {
      navigtae("/login");
    }
  }, [navigtae, isAuthanticated]);
  return (
    <Fragment>
    {loading ? (
      <Loading />
    ) : (
      <Fragment>
        <div className="profileContainer">
          <div>
            <h1>My Profile</h1>
            <img src={user.avatar.url} alt={user.name} />
            <p>{user.name} Profile</p>
          </div>
          <div>
            <div>
              <h4>Full Name</h4>
              <p>{user.name}</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>{user.email}</p>
            </div>
            <div>
              <h4>Joined On</h4>
              <p>{String(user.createAt).slice(0, 10)}</p>
            </div>

            <div>
              <Link to="/orders">My Orders</Link>
              <Link to="/password/update">Change Password</Link>
            </div>
          </div>
        </div>
      </Fragment>
    )}
  </Fragment>
  )
}

export default Profile
