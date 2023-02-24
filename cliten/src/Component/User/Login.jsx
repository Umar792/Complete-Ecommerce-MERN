import React, { useEffect, useState } from "react";
import "./Registration.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../ContextApi/ProductContext/UserContext";
import Loading from "../layout/Loading/Loading";

const Login = () => {
  const location = useLocation()
  const {isAuthanticated,isloginLoading,userLogin} = useUserContext();
  const naigate = useNavigate();
  const navigate = useNavigate();
  const [input, SetInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    SetInput({
      ...input,
      [name]: value,
    });
  };

  const dataSubmit = async (e) => {
    e.preventDefault();
     userLogin(input.email, input.password, navigate);
  };
  // const RedirectPATH = location.search ? location.search.split("=")[1] : "/profile"
  //  useEffect(()=>{
    
  //   if(isAuthanticated){
  //     naigate(RedirectPATH)
  //   }
  //  },[isAuthanticated])

  return (
    <>
   {
    isloginLoading ? <Loading/>
    :
    <>
    <div className="registration">
      <h2>User Login form</h2>
      <form onSubmit={dataSubmit}>
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
          value={input.name}
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
          value={input.name}
          onChange={handleInput}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
        <NavLink to="/signup">
          <p>create an account?</p>
        </NavLink>
        <NavLink to="/password/forgot">
          <p>forgot password?</p>
        </NavLink>
      </form>
    </div>
  </>
   }
   </>
  );
};

export default Login;
