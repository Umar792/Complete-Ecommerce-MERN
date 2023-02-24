import React from 'react';
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
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Sidebar from './Sidebar';
import {useNavigate} from "react-router-dom"
import { useUserContext } from '../../ContextApi/ProductContext/UserContext';

const AllUser = () => {
    const {AlluserData,isresetloading,DeleteSingleUser} = useUserContext();
    const navigate = useNavigate();
    const UpdateP = (id)=>{
      
    }
  return (
    <>
    {
      isresetloading ? 
      <Loading/>
      :
   <div className='dashboard'>
    <div>
      <Sidebar/>
    </div>
    {/* ===== */}
    <div className="table">
      <TableContainer component={Paper}>
        <p style={{textAlign : "center"}}>All User : {AlluserData.length}</p>
      <Table sx={{ maxWidth: "80%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">NO.</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            AlluserData && AlluserData.map((row,index) => (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  key={index}
                >
                  
                  <TableCell align="center" >{index+1}</TableCell>
                  <TableCell align="center" >{row._id}</TableCell>
                  <TableCell align="center" >{row.name}</TableCell>
                  <TableCell align="center" >{row.email}</TableCell>
                  <TableCell align="center" style={{color : row.role === "admin"  ? "green"  :"red"}}  >{row.role }</TableCell>
                  <TableCell align="center">
                        <Link to={`/admin/user/updateuser/${row._id}`}>
                        <BorderColorIcon style={{color:"green", margin:"0px 3px"}} onClick={()=> UpdateP(row._id)}/>
                        </Link>
                        <DeleteIcon   style={{color:"red", margin:"0px 3px"}} onClick={()=> DeleteSingleUser(row._id,navigate)}/>
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





export default AllUser
