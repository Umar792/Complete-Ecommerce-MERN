import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Header from "./Component/layout/Header/Header";
import Footer from "./Component/layout/footer/Footer";
import Home from "./Component/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleProductDetals from "./Component/product/SingleProductDetals";
import Boski from "./Component/MenDressing/Boski";
import AllProducts from "./Component/product/AllProducts";
import { useProductContext } from "./ContextApi/ProductContext/ProductContext";
import { useEffect } from "react";
import Kurta from "./Component/MenDressing/kurta";
import WashWear from "./Component/MenDressing/WashWear";
import MenShawl from "./Component/MenDressing/MenShawl";
import Cotton from "./Component/MenDressing/Cotton";
import Karandi from "./Component/MenDressing/Karandi";
import MenAllproduct from "./Component/MenDressing/MenAllproduct";
import WomenAllProducts from "./Component/WomenDressing/WomenAllProducts";
import GirlAllProducts from "./Component/WomenDressing/GirlAllProducts";
import BoyAllProducts from "./Component/MenDressing/BoyAllProducts";
import { ScrollToTop } from "react-router-scroll-to-top";
import Registration from "./Component/User/Registration";
import Login from "./Component/User/Login";
import { useUserContext } from "./ContextApi/ProductContext/UserContext";
import UserOptionHeader from "./Component/layout/Header/UserOptionHeader";
import Profile from "./Component/User/Profile";
import UpdatePassword from "./Component/User/UpdatePassword";
import ForgotPassword from "./Component/User/ForgotPassword";
import RessetPassword from "./Component/User/RessetPassword";
import Card from "./Component/Crad/Crad";
import Shipping from "./Component/Crad/Shipping";
import ConfirmOrder from "./Component/Crad/ConfirmOrder";
import PymentSuccess from "./Component/Crad/PymentSuccess";
import OrderSuccess from "./Component/Crad/OrderSuccess";
import MyOrders from "./Component/Orders/MyOrders";
import SingleOrderDetails from "./Component/Orders/SingleOrderDetails";
import Dashboard from "./Component/Admin/Dashboard";
import Allproducts from "./Component/Admin/Allproducts";
import CreateProduct from "./Component/Admin/CreateProduct";
import AdminUpdateProduct from "./Component/Admin/AdminUpdateProduct";
import Allorders from "./Component/Admin/Allorders";
import UpdateOrder from "./Component/Admin/UpdateOrder";
import Loading from "./Component/layout/Loading/Loading";
import AllUser from "./Component/Admin/AllUser";
import UpdateUserRole from "./Component/Admin/UpdateUserRole";
import NotFound from "./Component/layout/NotFound/NotFound";

function App() {
  const { getAllproducts, loading } = useProductContext();
  const { getLoginUserData, isAuthanticated, user } = useUserContext();
  const PrivateRoute = () => {
    return !isAuthanticated ? <Navigate to="/" replace /> : <Outlet />;
  };
  const PrivateRouteadmin = () => {
    return isAuthanticated === false && user.role !== "admin" ? (
      <Navigate to="/" replace />
    ) : (
      <Outlet />
    );
  };

  useEffect(() => {
    getAllproducts();
    getLoginUserData();
  }, []);
  useEffect(() => {
    getAllproducts();
    getLoginUserData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer position="top-right" theme="dark" />
      <ScrollToTop />
      <Header />
      {isAuthanticated && <UserOptionHeader user={user} />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/serach" exact element={<AllProducts />} />
        <Route path="/serach/:keyword" element={<AllProducts />} />
        {/* ==============men  */}
        <Route path="/men" exact element={<MenAllproduct />} />
        <Route path="/boski" exact element={<Boski />} />
        <Route path="/wash&wear" exact element={<WashWear />} />
        <Route path="/menShawl" exact element={<MenShawl />} />
        <Route path="/cotton" exact element={<Cotton />} />
        <Route path="/karandi" exact element={<Karandi />} />
        <Route path="/kurta" exact element={<Kurta />} />
        {/* ===================== women */}
        <Route path="/women" exact element={<WomenAllProducts />} />
        <Route path="/boy" exact element={<BoyAllProducts />} />
        <Route path="/girl" exact element={<GirlAllProducts />} />
        <Route
          path="/singleProduct/:id"
          exact
          element={<SingleProductDetals />}
        />
        {/* ========== user  */}
        <Route path="/signup" exact element={<Registration />} />
        <Route path="/login" exact element={<Login />} />

        <Route path="/profile" exact element={<PrivateRoute />}>
          <Route path="/profile" exact element={<Profile />} />
        </Route>

        <Route path="/password/update" exact element={<PrivateRoute />}>
          <Route path="/password/update" exact element={<UpdatePassword />} />
        </Route>
        <Route path="/password/forgot" exact element={<ForgotPassword />} />
        <Route
          path="/password/reset/:token"
          exact
          element={<RessetPassword />}
        />

        {/* ================== card  */}

        <Route exact path="/card" element={<Card />} />
        <Route exact path="/login/shipping" element={<Shipping />} />
        <Route
          exact
          path="/login/shipping/conform/shipping"
          element={<ConfirmOrder />}
        />
        <Route exact path="/process/payment" element={<PymentSuccess />} />

        {/* =========== orders  */}
        <Route exact path="/order/success" element={<OrderSuccess />} />
        <Route path="/order" exact element={<PrivateRoute />}>
          <Route exact path="/order" element={<MyOrders />} />
        </Route>
        <Route path="/SingleOrderDetails/:id" exact element={<PrivateRoute />}>
          <Route
            exact
            path="/SingleOrderDetails/:id"
            element={<SingleOrderDetails />}
          />
        </Route>

        {/* ========== dashboard */}
        <Route path="/admin/dashboard" exact element={<PrivateRouteadmin />}>
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/admin/products" exact element={<PrivateRouteadmin />}>
          <Route exact path="/admin/products" element={<Allproducts />} />
        </Route>
        <Route
          path="/admin/product/create"
          exact
          element={<PrivateRouteadmin />}
        >
          <Route
            exact
            path="/admin/product/create"
            element={<CreateProduct />}
          />
        </Route>
        <Route
          path="/admin/product/adminUpdateProduct/:id"
          exact
          element={<PrivateRouteadmin />}
        >
          <Route
            exact
            path="/admin/product/adminUpdateProduct/:id"
            element={<AdminUpdateProduct />}
          />
        </Route>
        <Route path="/admin/orders" exact element={<PrivateRouteadmin />}>
          <Route exact path="/admin/orders" element={<Allorders />} />
        </Route>
        <Route
          path="/admin/order/update/:id"
          exact
          element={<PrivateRouteadmin />}
        >
          <Route
            exact
            path="/admin/order/update/:id"
            element={<UpdateOrder />}
          />
        </Route>
        <Route path="/admin/users" exact element={<PrivateRouteadmin />}>
          <Route exact path="/admin/users" element={<AllUser />} />
        </Route>
        <Route
          path="/admin/user/updateuser/:id"
          exact
          element={<PrivateRouteadmin />}
        >
          <Route
            exact
            path="/admin/user/updateuser/:id"
            element={<UpdateUserRole />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
