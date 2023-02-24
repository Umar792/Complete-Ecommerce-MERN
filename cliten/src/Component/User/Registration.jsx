import React, { useState } from "react";
import "./Registration.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../../ContextApi/ProductContext/UserContext";
import { toast } from "react-toastify";
import Loading from "../layout/Loading/Loading";

const Registration = () => {
  const navigate = useNavigate();
  const { userRegistration,isregisterloading } = useUserContext();
  const [input, SetInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [avatar,setAvatar] = useState()
  const [avatarPreview , setavatarPreview] = useState("./Profile.png")

  

  
  const handleInput = (e) => {
    if(e.target.name === "avatar"){
      const render = new FileReader();
      
      render.onload = ()=>{
        if(render.readyState === 2){
          setAvatar(render.result);
          setavatarPreview(render.result)
        }

      }
      render.readAsDataURL(e.target.files[0]);

    }else{
      const { name, value } = e.target;
    SetInput({
      ...input,
      [name]: value,
    });
    }
  };
  const dataSubmit = async (e) => {
    e.preventDefault();
    if(!avatar){
      return toast.error("Please select profile photo and all fileds",{
        theme:"dark"
      })
    }

     userRegistration(input.name, input.email, input.password, navigate,avatar);
  };

  return (
    <>
    {
      isregisterloading ? <Loading/>
      : 
      <>
      <div className="registration">
        <h2>User Registration form</h2>
        <form onSubmit={dataSubmit}>
          <TextField
            fullWidth
            sx={{ m: 1 }}
            className="input"
            id="standard-basic"
            type="text"
            name="name"
            label="User Name"
            variant="standard"
            autoComplete="off"
            value={input.name}
            onChange={handleInput}
          />
          <TextField
            fullWidth
            sx={{ m: 1 }}
            className="input"
            id="standard-basic"
            type="email"
            name="email"
            label="Email"
            variant="standard"
            autoComplete="off"
            value={input.email}
            onChange={handleInput}
          />
          <TextField
            fullWidth
            sx={{ m: 1 }}
            className="input"
            id="standard-basic"
            type="password"
            name="password"
            label="Password"
            variant="standard"
            autoComplete="off"
            value={input.password}
            onChange={handleInput}
          />
            <img src={avatarPreview} alt="Avatar Preview" />
          <TextField
            fullWidth
            sx={{ m: 1 }}
            type="file"
            placeholder="Select profile photo"
            accept = "image/"
            onChange={handleInput}
            variant="standard"
            name="avatar"
          />
          <Button type="submit" variant="contained">
            SignUp
          </Button>
          <NavLink to="/login">
            <p>have an account?</p>
          </NavLink>
        </form>
      </div>
    </>
    }
    </>
  );
};

export default Registration;
