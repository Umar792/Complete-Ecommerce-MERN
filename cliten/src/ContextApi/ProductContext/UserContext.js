import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/UserReducer"
import { toast } from "react-toastify";
import axios from "axios"

const UserContext = createContext();

const initailState = {
    isAuthanticated: false,
    loading: false,
    Error: "",
    user: {},
    isUpdated : false,
    isloginLoading:false,
    isregisterloading : false,
    isforgotpass : false,
    isresetloading:false,
    AlluserData:[]
}


const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initailState);

    //  ================== registration
    const userRegistration = async (name, email, password, navigate, avatar) => {
        try {
                  
            dispatch({type : "USER_REGISTRAION_LOAD"})
            const res = await fetch("http://localhost:4000/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password, avatar
                }),
            });
            dispatch({type : "USER_REGISTRAION_LOAD_FAIL"})
            const data = await res.json(); 
            if (res.status === 400 || !data) {
                  return toast.error(data.message, {
                    theme: "dark"   
                    
                })
            } else {
                toast.success("Registartion Successfuly", {
                    theme: "dark"
                });
                navigate("/login");
                
            }
            dispatch({type : "USER_REGISTRAION_SUCCESS"})
            

        } catch (error) {
            dispatch({type : "USER_REGISTRAION_FAIL" , payload:error.message})
    }
}

    // ===============login 
    const userLogin = async (email, password, navigate) => {
        try {

            dispatch({ type: "IS_LOADING" })

            const res = await fetch("http://localhost:4000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                }),
            });
            dispatch({ type: "IS_LOGIN_FAIL" })
            const data = await res.json();
            if (res.status === 400 || !data) {
                return toast.error(data.message, {
                    theme: "dark"
                })
            } else {
                toast.success("login Successfuly", {
                    theme: "dark"
                });
                localStorage.setItem("Token", data.Token)
                navigate("/");

            }
            dispatch({ type: "USER_LOGIN_SUCCESS", payload: data.userEmail })


        } catch (error) {
            return dispatch({ type: "USER_LOGIN_FAIL", payload: error.message });

        }


    }

    // ==================== get login user data 

    const getLoginUserData = async () => {
        try {
            dispatch({ type: "LOAD_USER_DATA" });
            const res = await fetch("http://localhost:4000/me", {
                method: "get",
                headers: {
                    "Content-type": "application/json",
                    token: localStorage.getItem("Token")
                }
            });
            dispatch({ type: "LOAD_USER_DATA_FAIL" });
            const data = await res.json();
            if (res.status === 400 || !data) {
                return console.log(data.message);
            }
            dispatch({ type: "LOAD_USER_SUCCESS", payload: data.user });

        } catch (error) {
            return dispatch({ type: "LOAD_USER_FAIL", payload: error.message })

        }

    }


    // =============== logout 

    const logout = async () => {
        try {
            dispatch({ type: "LOGOUT_USER_LOAD" });
            localStorage.removeItem("Token");
            dispatch({ type: "LOGOUT_USER_SUCCESS" })
        } catch (error) {
            dispatch({ type: "LOGOUT_USER_FAIL", payload: error.message })
        }
    }


    // ===========update password 

    const updatePassword = async(oldpassword,newpassword,navigate)=>{
        try {
            dispatch({type:"UPDATE_PASSWORD"});

            const res = await fetch("http://localhost:4000/updatePassword",{
                method:"put",
                headers: {
                    "Content-type": "application/json",
                    token: localStorage.getItem("Token")
                },
                body: JSON.stringify({
                    oldpassword,newpassword
                }),
            })
            dispatch({type:"UPADTE_PASSWORD_CHECK"});
            const data = await res.json();
            if(res.status === 400 || !data){
                return toast.error(data.message,{
                    theme:"dark"
                })
            }else{
                toast.success("change password successfuly",{
                    theme:"dark"
                });
                navigate("/profile")
            }
            dispatch({type:"UPADTE_PASSWORD_CHECK_SUCCESS"});
            
        } catch (error) {
            dispatch({type:"UPADTE_PASSWORD_FAIL", payload:error.message});
        }
    }

    // =============== fortogPassword

    const fortogPassword = async(email)=>{
       try {
        dispatch({type: "FORGOT_PASSWORD_LOADING"})

        const res = await fetch("http://localhost:4000/fortogPassword",{
            method:"post",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email
            })
    })

       const data =await res.json();
       if(res.status === 400 || !data){
        return toast.error(data.message,{
            theme:"dark"
        })
       }else{
        toast.success(data.message,{
            theme:"dark"
        })
       }
       dispatch({type: "FORGOT_PASSWORD_SUCCESS", payload:data.message});
       } catch (error) {
        dispatch({type: "FORGOT_PASSWORD_FAIL", payload : error.message});
       }
    }


     // =============== fortogPassword

     const RestPassword = async(password,navigate,token)=>{
        try {
         dispatch({type: "RESET_PASSWORD_LOADING"})
 
         const res = await fetch(`http://localhost:4000/password/reset/${token}`,{
             method:"put",
             headers:{
                 "Content-Type" : "application/json"
             },
             body : JSON.stringify({
                 password
             })
     })
 
        const data =await res.json();
        if(res.status === 400 || !data){
         return toast.error(data.message,{
             theme:"dark"
         })
        }else{
         toast.success(data.message,{
             theme:"dark"
         })
         navigate("/login")
        }
        dispatch({type: "RESET_PASSWORD_SUCCESS", payload:data.message});
        } catch (error) {
         dispatch({type: "RESET_PASSWORD_FAIL", payload : error.message});
        }
     }
 

     // get all user 

     const getAllUser = async()=>{
        try {
         dispatch({type: "GET_ALL_USER_LOADING"})
 
         const res = await fetch(`http://localhost:4000/allusers`,{
             method:"get",
             headers:{
                 "Content-Type" : "application/json",
                 token: localStorage.getItem("Token")
             },
     })
     dispatch({type: "GET_ALL_USER_LOADING_FAIL"})
        const data =await res.json();
        if(res.status === 400 || !data){
         return toast.error(data.message,{
             theme:"dark"
         })
        }else{
         toast.success(data.message,{
             theme:"dark"
         })
        }
        dispatch({type: "GET_ALL_USER_SUCCESS", payload:data.users});
        } catch (error) {
         dispatch({type: "GET_ALL_USER_FAIL", payload : error.message});
        }
     }



       // Delete user 

       const DeleteSingleUser = async(id,navigate)=>{
        try {
         dispatch({type: "DELETE_USER_LOADING"})
 
         const res = await fetch(`http://localhost:4000/deleteUser/${id}`,{
             method:"delete",
             headers:{
                 "Content-Type" : "application/json",
                 token: localStorage.getItem("Token")
             },
     })
     dispatch({type: "DELETE_USER_LOADING_FAIL"})
        const data =await res.json();
        if(res.status === 400 || !data){
         return toast.error(data.message,{
             theme:"dark"
         })
        }else{
         toast.success(data.message,{
             theme:"dark"
         })
         navigate("/admin/dashboard")
        }
        dispatch({type: "DELETE_USER_SUCCESS"});
        } catch (error) {
         dispatch({type: "DELETE_USER_FAIL", payload : error.message});
        }
     }

     // Delete user 

     const UpdateUserRole = async(id,userdata)=>{
        try {
         dispatch({type: "UPDATE_ROLE_USER_LOADING"})

         const config = { headers: { "Content-Type": "application/json",
         token: localStorage.getItem("Token") } };

    const {data} = await axios.put(
      `http://localhost:4000/updateUserRole/${id}`,
      userdata,
      config
    );
 
        
     dispatch({type: "UPDATE_ROLE_USER_LOADING_FAIL"})
       
        if(!data){
         return toast.error(data.message,{
             theme:"dark"
         })
        }else{
         toast.success(data.message,{
             theme:"dark"
         })
        }
        dispatch({type: "UPDATE_ROLE_USER_SUCCESS"});
        } catch (error) {
         dispatch({type: "UPDATE_ROLE_USER_FAIL", payload : error.message});
        }
     }


    return <UserContext.Provider value={{ ...state,UpdateUserRole,DeleteSingleUser,getAllUser,RestPassword,fortogPassword,updatePassword, userRegistration, getLoginUserData, userLogin, logout }}>{children}</UserContext.Provider>
} 


const useUserContext = () => {
    return useContext(UserContext)
}

export { UserContext, UserProvider, useUserContext }