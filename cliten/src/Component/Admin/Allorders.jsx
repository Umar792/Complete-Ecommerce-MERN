import React, { useEffect } from 'react';
import "./AdminAllproduct.css"
import Loading from "../layout/Loading/Loading";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { useProductContext } from '../../ContextApi/ProductContext/ProductContext';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Sidebar from './Sidebar';
import {useNavigate} from "react-router-dom"
import { useOrderContext } from '../../ContextApi/ProductContext/OrderContext';

const Allorders = () => {
    const {loading} = useProductContext();
    const {Allorders,DeleteOrder,GetSingleOrder} = useOrderContext();
    const navigate = useNavigate()
    const deleteP = (id)=>{
        DeleteOrder(id);
        navigate("/admin/dashboard")
    }
    const UpdateP = (id)=>{
      GetSingleOrder(id)
    }
  return (
    <>
    {
      loading ? 
      <Loading/>
      :
   <div className='dashboard'>
    <div>
      <Sidebar/>
    </div>
    {/* ===== */}
    <div className="table">
      <TableContainer component={Paper}>
        <p style={{textAlign : "center"}}>All Orders : {Allorders.length}</p>
      <Table sx={{ maxWidth: "80%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">NO.</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Allorders && Allorders.map((row,index) => (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  key={index}
                >
                  
                  <TableCell align="center" >{index+1}</TableCell>
                  <TableCell align="center" >{row.createdAt}</TableCell>
                  <TableCell align="center" >{row._id}</TableCell>
                  <TableCell align="center" style={{color : row.orderStatus === "Processing"  ? "red"  :"green"}}  >{row.orderStatus }</TableCell>
                  <TableCell  align="center">{row.totalPrice}</TableCell>
                  <TableCell align="center">
                        <Link to={`/admin/order/update/${row._id}`}>
                        <BorderColorIcon style={{color:"green", margin:"0px 3px"}} onClick={()=> UpdateP(row._id)}/>
                        </Link>
                        <DeleteIcon   style={{color:"red", margin:"0px 3px"}} onClick={()=> deleteP(row._id,navigate)}/>
                      </TableCell>
                </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
   </div>
    }
    </>
  )
}





export default Allorders
