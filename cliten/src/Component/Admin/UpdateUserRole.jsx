import React, { Fragment, useState } from "react";
import "./newProduct.css";
import { Button } from "@material-ui/core";
import SideBar from "./Sidebar"; 
import Loading from "../layout/Loading/Loading";
import { useUserContext } from "../../ContextApi/ProductContext/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUserRole = () => {
    const {UpdateUserRole,isresetloading} = useUserContext();

  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

 

  const myrole = {
    "role" : role
  }

  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    if(role === ""){
      return toast.error("Please select role",{
        theme:"dark"
      })
    }
    UpdateUserRole(id,myrole,navigate)
  };

  
  return (
   <>
   {
    isresetloading ? <Loading/>
    :
    <Fragment>
    <div className="dashboard">
      <div>
      <SideBar />
      </div>
      <div className="newProductContainer">
        <form
          className="createProductForm"
          encType="multipart/form-data"
          onSubmit={createProductSubmitHandler}
        >
          <h1>Update User Role</h1>

          <div>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Choose Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
                
              
            </select>
          </div>



          <Button
            id="createProductBtn"
            type="submit"
            disabled={isresetloading ? true : false}
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  </Fragment>
   }
   </>
  )
}



export default UpdateUserRole
