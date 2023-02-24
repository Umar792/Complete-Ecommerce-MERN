import React, {  useEffect, useState } from "react";
import "./MyOrders.css";
import Loading from "../layout/Loading/Loading";
import { useOrderContext } from "../../ContextApi/ProductContext/OrderContext";
import { useUserContext } from "../../ContextApi/ProductContext/UserContext";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";


const MyOrders = () => {
  const { myOrders, orderLoading ,myOrderget} = useOrderContext();
  const { user } = useUserContext();
  useEffect(()=>{
    myOrderget()
  },[])


  return (
    <>
    {
      orderLoading ? 
      <Loading/>
      :
    <div className="table">
      <h2>{user.name}'s Orders</h2>
      <TableContainer component={Paper}>
        <p>Total Orders : {myOrders.length}</p>
      <Table sx={{ maxWidth: "80%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">totalPrice</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrders.map((row) => (
            <TableRow
              key={myOrders._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" >{row._id}</TableCell>
              <TableCell align="center" style={{color : row.orderStatus === "Processing"  ? "red"  :"green"}}  >{row.orderStatus}</TableCell>
              <TableCell align="center">{row.totalPrice}</TableCell>
              <TableCell align="center"><Link to={`/SingleOrderDetails/${row._id}`} >
                    <OpenInNewIcon />
                    </Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    }
    </>
  );
};

export default MyOrders;
