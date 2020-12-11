import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from "@material-ui/core";
import Title from './Title';
import Axios from "axios";


export default function Orders(props) {
  const [mentorList, setMentorList]=React.useState([]);
  React.useEffect(()=>{
    const id=setInterval(()=>{
      Axios.get("http://localhost:8080/mentor/lists")
    .then(response=>{
      setMentorList(response.data);
    });
    }, 500)
    return()=>{
      clearInterval(id);
    }
  },[]);

  const handleDelete=(id)=>{
    alert("Are you sure, You want to delete");
    Axios.delete("http://localhost:8080/mentor/delete/"+id)
    .then(res=>console.log(res));
  }
  return (
    <React.Fragment>
      <Title>Mentor List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Address</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mentorList.map((mentor) => (
            <TableRow key={mentor._id}>
              <TableCell>{mentor._id}</TableCell>
              <TableCell>{mentor.name}</TableCell>
              <TableCell>{mentor.email}</TableCell>
              <TableCell>{mentor.address}</TableCell>
              <TableCell><Button onClick={()=>handleDelete(mentor._id)}><DeleteIcon/></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}