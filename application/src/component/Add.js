import React, { Component, useState,useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



function Add(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [id,setState]=useState("");
    const [length,setLength]=useState("");
    let history = useNavigate();

    useEffect(()=>{
        setLength(localStorage.getItem('length'))
    },[])
    // const onChange=(e)=>{
    //     switch(e.target.name){
    //         case "name":setName(e.target.value);
    //         break;
    //         case "email":setName(e.target.value);
    //         break;
    //         case "dob":setName(e.target.value);
    //         break;
    //     }
    // }

    const handleSubmit=(e)=>{
        //e.preventDefault();
        const ids=uuid();
        const uniqueId=ids.slice(0,8);

        let a=name,
        c=email,
        d=dob;
        axios.get('https://localhost:44388/api/Application/').then(response => response.data).then(  
            (result)=>{  
               //const a=result
                setState(result);  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )
        


        //const user1={"applicationId":uniqueId,"applicationName":name,"applicationEmail":email,"applicationDob":dob};
        axios.post("https://localhost:44388/api/Application/",{
           // "applicationId": parseInt(length)+1,
            "applicationName": name,
            "applicationEmail":email,
            "applicationDob": dob
          })
        //console.log(user1);
        //setUser({"applicationId":uniqueId,"applicationName":a,"applicationEmail":c,"applicationDob":d});

        history("/");
    }
    // useEffect(()=>{
        
    //     console.log(user,name);
    //     axios.post("https://localhost:44388/api/Application/",user)
    
    // },[]);


    return <div>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" name="name" requried onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="text" placeholder="Enter Email" name="email" requried onChange={(e) => setEmail(e.target.value)}>
                    
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDob">
                    <Form.Control type="text" placeholder="Enter Dob" name="dob" requried onChange={(e) => setDob(e.target.value)}>
                    </Form.Control>
                </Form.Group>



                <Button onClick={(e)=>handleSubmit(e)} type="submit">Submit</Button>
               </Form>
        </div>
    

}

export default Add;