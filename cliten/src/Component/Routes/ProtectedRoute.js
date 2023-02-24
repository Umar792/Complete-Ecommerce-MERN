import React, { Fragment } from "react";
import { useNavigate, Route } from "react-router-dom"
import { useUserContext } from "../../ContextApi/ProductContext/UserContext";

const ProtectedRoute = ({  element: Component, ...rest }) => {
    const {loading ,isAuthanticated,user} = useUserContext();
    const Redirect = useNavigate()
  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthanticated === false) {
              return Redirect("/")
            }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  )
}

export default ProtectedRoute
