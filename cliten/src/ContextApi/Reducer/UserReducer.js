const userReducer = (state, action) => {
    switch (action.type) {

        case "USER_REGISTRAION_LOAD":
            return {
                ...state,
                isregisterloading: true,
            }
        case "USER_REGISTRAION_LOAD_FAIL":
            return {
                ...state,
                isregisterloading: false,
                loading : false
            }
            
        case "USER_REGISTRAION_SUCCESS":
            return {
                ...state,
                isregisterloading: false,
            }
        case "USER_REGISTRAION_FAIL":
            return {
                ...state,
                isregisterloading: false,
                Error: action.payload
            }


        case "USER_REGISTRATIOIN_FAIL":
            return {
                ...state,
                isregisterloading : false,
                Error: action.payload
            }


        // ==================LOGIN 

        case "IS_LOADING":
            return {
                ...state,
                isloginLoading: true,
                isAuthanticated: false,
            }
        case "IS_LOGIN_FAIL":
            return {
                ...state,
                isloginLoading: false,
                isAuthanticated: false,
            }
        case "USER_LOGIN_SUCCESS":
            return {
                ...state,
                isloginLoading: false,
                isAuthanticated: true,
                user: action.payload
            }
            case "USER_LOGIN_FAIL":
            return {
                ...state,
                isloginLoading: false,
                isAuthanticated: false,
                Error: action.payload
            }


        // ======================= get login user data 
        case "LOAD_USER_DATA":
            return {
                ...state,
                loading: true,
                isAuthanticated: false,
            }

            case"LOAD_USER_DATA_FAIL" :
            return {
                ...state,
                loading: false,
                isAuthanticated: false,
            }
 
        case "LOAD_USER_SUCCESS":
            return {
                ...state,
                loading: false,
                isAuthanticated: true,
                user: action.payload
            }
        case "LOAD_USER_FAIL":
            return {
                ...state,
                loading: false,
                isAuthanticated: false,
                Error: action.payload
            }



        // ======================= logout 

        case "LOGOUT_USER_LOAD":
            return {
                ...state,
                loading: true,
                isAuthanticated: true
            }

        case "LOGOUT_USER_SUCCESS":
            return {
                ...state,
                loading: false,
                isAuthanticated: false
            }

        case "LOGOUT_USER_FAIL":
            return {
                ...state,
                loading: false,
                isAuthanticated: false,
                Error: action.payload
            }

        //      // ======================= update password 

        case "UPDATE_PASSWORD":
            return {
                ...state,
                loading: true,
                isAuthanticated: false,
                isUpdated: false,
            }

        case "UPADTE_PASSWORD_CHECK":
            return {
                ...state,
                loading: false,
            }
        case "UPADTE_PASSWORD_CHECK_SUCCESS":
            return {
                ...state,
                loading: false,
            }

        case "UPADTE_PASSWORD_FAIL":
            return {
                ...state,
                loading: false,
                Error: action.payload
            }
        //      // ======================= update password 

        case "FORGOT_PASSWORD_LOADING":
            return {
                ...state,
                isforgotpass: true,
                isAuthanticated: false,
                isUpdated: false,
            }

        case "FORGOT_PASSWORD_CHECK":
            return {
                ...state,
                isforgotpass: false,
            }
        case "FORGOT_PASSWORD_SUCCESS":
            return {
                ...state,
                isforgotpass: false,
            }

        case "FORGOT_PASSWORD_FAIL":
            return {
                ...state,
                isforgotpass: false,
                Error: action.payload
            }
        //      // ======================= reset password 

        case "RESET_PASSWORD_LOADING":
            return {
                ...state,
                isresetloading: true,
                isAuthanticated: false,
                isUpdated: false,
            }
        case "RESET_PASSWORD_SUCCESS":
            return {
                ...state,
                isresetloading: false,
            }

        case "RESET_PASSWORD_FAIL":
            return {
                ...state,
                isresetloading: false,
                Error: action.payload
            }
        //      // ======================= GET_ALL_USER_LOADING 

        case "GET_ALL_USER_LOADING":
            return {
                ...state,
                isresetloading: true,
            }
        case "GET_ALL_USER_LOADING_FAIL":
            return {
                ...state,
                isresetloading: false,
            }
        case "GET_ALL_USER_SUCCESS":
            return {
                ...state,
                isresetloading: false,
                AlluserData : action.payload
            }

        case "GET_ALL_USER_FAIL":
            return {
                ...state,
                isresetloading: false,
                Error: action.payload
            }


             //      // ======================= DELETE_USER_LOADING 

        case "DELETE_USER_LOADING":
            return {
                ...state,
                isresetloading: true,
            }
        case "DELETE_USER_LOADING_FAIL":
            return {
                ...state,
                isresetloading: false,
            }
        case "DELETE_USER_SUCCESS":
            return {
                ...state,
                isresetloading: false,
            }

        case "DELETE_USER_FAIL":
            return {
                ...state,
                isresetloading: false,
                Error: action.payload
            }
             //      // ======================= UPDATE_ROLE_USER_LOADING 

        case "UPDATE_ROLE_USER_LOADING":
            return {
                ...state,
                isresetloading: true,
            }
        case "UPDATE_ROLE_USER_LOADING_FAIL":
            return {
                ...state,
                isresetloading: false,
            }
        case "UPDATE_ROLE_USER_SUCCESS":
            return {
                ...state,
                isresetloading: false,
            }

        case "UPDATE_ROLE_USER_FAIL":
            return {
                ...state,
                isresetloading: false,
                Error: action.payload
            }

        default:
            return state;
    }

}

export default userReducer