import { Fragment, useState } from "react"
import { useUserContext } from "../../ContextApi/ProductContext/UserContext"
import Loading from "../layout/Loading/Loading"
import "./ForgotPassword.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {useNavigate, useParams} from "react-router-dom"

const RessetPassword = () => {
    const {isresetloading,RestPassword} = useUserContext();
    const navigate = useNavigate();
    const {token} = useParams();
    const [password, setpassword] = useState("");
  const ResetPasswordSubmit = (e) => {
    e.preventDefault();
    RestPassword(password,navigate,token);
    setpassword("")
  };
  return (
    <Fragment>
      {isresetloading ? (
        <Loading />
      ) : 
        <Fragment>
          <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox">
              <h2 className="forgotPasswordHeading">Resset Password</h2>

              <form
                className="forgotPasswordForm"
                onSubmit={ResetPasswordSubmit}
              >
                <div className="forgotPasswordpassword">
                  <MailOutlineIcon />
                  <input
                    type="password"
                    placeholder="password"
                    required
                    name="password"
                    value={password}
                    onChange={(e)=> setpassword(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  className="forgotPasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      }
    </Fragment>
  )
}

export default RessetPassword
