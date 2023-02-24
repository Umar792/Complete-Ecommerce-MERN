import { Fragment, useState } from "react"
import { useUserContext } from "../../ContextApi/ProductContext/UserContext"
import Loading from "../layout/Loading/Loading"
import "./ForgotPassword.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const ForgotPassword = () => {
    const {isforgotpass,fortogPassword} = useUserContext();
    const [email, setEmail] = useState("");
  const forgotPasswordSubmit = (e) => {
    e.preventDefault();
    fortogPassword(email);
    setEmail("")
  };

  return (
    <Fragment>
      {isforgotpass ? (
        <Loading />
      ) : 
        <Fragment>
          <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox">
              <h2 className="forgotPasswordHeading">Forgot Password</h2>

              <form
                className="forgotPasswordForm"
                onSubmit={forgotPasswordSubmit}
              >
                <div className="forgotPasswordEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value="Send"
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

export default ForgotPassword
