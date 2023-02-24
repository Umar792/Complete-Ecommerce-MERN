import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { useProductContext } from "../../ContextApi/ProductContext/ProductContext";
import { useOrderContext } from "../../ContextApi/ProductContext/OrderContext";
import HomeIcon from '@mui/icons-material/Home';
import { useUserContext } from "../../ContextApi/ProductContext/UserContext";

const Sidebar = () => {
  const {getAllAdminProducts} = useProductContext();
  const {GetAllOrder} = useOrderContext()
  const {getAllUser} = useUserContext()
  const getallproducts= ()=>{
   getAllAdminProducts()
  }
  const GetAllOrderfunc = ()=>{
    GetAllOrder()
  }

 
  return (
    <div className="sidebarDashboard" >
    <Link to="/">
      <p>
        <HomeIcon /> Home
      </p>
    </Link>
    <Link to="/admin/dashboard">
      <p onClick={()=> getAllUser()}>
        <DashboardIcon /> Dashboard
      </p>
    </Link>
    <Link>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ImportExportIcon />}
      >
        {/* <TreeItem nodeId="1" label="Products"> */}
          <Link to="/admin/products">
            <p  onClick={getallproducts}   >
            {<PostAddIcon />}
            All Product
            </p>
          </Link>

          <Link to="/admin/product/create">
            <p >
            {<AddIcon />}
            Create Product
            </p>
          </Link>
        {/* </TreeItem> */}
      </TreeView>
    </Link>
    <Link to="/admin/orders">
      <p onClick={GetAllOrderfunc}>
        <ListAltIcon />
        Orders
      </p>
    </Link>
    <Link to="/admin/users">
      <p onClick={()=> getAllUser()}>
        <PeopleIcon /> Users
      </p>
    </Link>
    <Link to="/admin/reviews">
      <p>
        <RateReviewIcon />
        Reviews
      </p>
    </Link>
  </div>
  )
}

export default Sidebar
