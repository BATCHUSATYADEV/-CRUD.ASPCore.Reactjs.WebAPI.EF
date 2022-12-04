import React, { Fragment } from "react";
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom'
import { render } from "@testing-library/react";
import axios from 'axios';
import history from "./Edit";

const apiUrl = "https://localhost:44388/api/Application";



class Home extends React.Component{
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           users:[],  
           response: {}  
              
        }  
    }  

    componentDidMount(){  

        axios.get('https://localhost:44388/api/Application/').then(response => response.data).then(  
             (result)=>{  
                //const a=result
                 this.setState({  
                     users:result  
                     
                 });  
             },  
             (error)=>{  
                 this.setState({error});  
             }  
         )
       
     } 


    // handleEdit(id,name,age,email,dob){
    //     localStorage.setItem('Name',name);
    //     localStorage.setItem('Age',age);
    //     localStorage.setItem('Email',email);
    //     localStorage.setItem('Dob',dob);
    //     localStorage.setItem('Id',id);
    // }
    // handleDelete(id){
        
    //     var index = Employee.map(function (e) {
    //         return e.id

    //     }).indexOf(id);
    //     Employee.splice(index, 1);

    //     history('/');
    //     //useNavigate();
    // }

    deleteUser(userId) {  
        const { users } = this.state;     
       axios.delete(apiUrl +'/'+ userId).then(result=>{  
          this.setState({  
            response:result,  
            users:users.filter(user=>user.userId !== userId)  
          });  
        });  
        window.location.reload(true);
      }

render() {
    const{error,users}=this.state;  
        if(error){  
            return(
                <div>Error:</div>  
            )  
        } else{

    const handleEdit=(id,name,email,dob)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Email',email);
        localStorage.setItem('Dob',dob);
        localStorage.setItem('Id',id);

 
        
    }
    const create=(length)=>{
        localStorage.setItem('length',length);
    }

    // const handleDelete = (id) => {
    //     var index = Employee.map(function (e) {
    //         return e.id

    //     }).indexOf(id);
    //     Employee.splice(index, 1);

    //     history('/');
    // }

    return (
        <Fragment>
            
            <div style={{backgroundcolor:"grey"}}>
            <h1 style={{textAlign:"center",fontFamily:"cursive",fontWeight:"bold",backgroundColor:"ButtonShadow"}}>REACT CRUD OPERATIONS😅😅</h1>
            <br /><br />
            </div>
            <div className="container" style={{ margine: "10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead variant="dark">
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                NAME
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                DOB
                            </th>
                            <th>
                                Actions
                            
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users && users.length > 0
                                ?
                                users.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.applicationId}
                                            </td>
                                            <td>
                                                {item.applicationName}
                                            </td>
                                            <td>
                                                {item.applicationEmail}
                                            </td>
                                            <td>
                                                {item.applicationDob}
                                            </td>
                                            <td>
                                                <Link to={'/edit'}>
                                                    <Button variant="warning" size="sm" onClick={() => handleEdit(item.applicationId,item.applicationName,item.applicationEmail,item.applicationDob)} >EDIT</Button>
                                                </Link>
                                                &nbsp;
                                                <Button variant="danger" size="sm" onClick={() => this.deleteUser(item.applicationId)}>DELETE</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data Available"
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link className="d-grid gap-2" to="/create">
                        <Button size="lg" onClick={() => create(users.length)}>Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}
}
}
export default Home;