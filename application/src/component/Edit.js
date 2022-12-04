import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Edit() {
    const [name, setName] = useState("");
   // const [Id1, setId1] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [id, setId] = useState("");
    let history = useNavigate();
    
        // var index = Employee.map(function (e) {
        //     return e.id

        // }).indexOf(id);
    
        const handleSubmit = (e) => {
            //e.preventDefault();
            //let a=Employee[index];
            // const applicationId=id;
            // const applicationName=name;
            // const applicationEmail=email;
            // const applicationDob=dob;
            //console.log(email);
            

            axios.put('https://localhost:44388/api/Application/'+parseInt(id), {
                "applicationId": parseInt(id),
                 "applicationName": name,
                 "applicationEmail":email,
                 "applicationDob": dob
               });
            history("/");
            
        }

        useEffect(()=>{
            setName(localStorage.getItem('Name'))
            setEmail(localStorage.getItem('Email'))
            setDob(localStorage.getItem('Dob'))
            setId(localStorage.getItem('Id'))
        },[])
    
        return (
            <div>
                <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                    <Form.Group className="mb-3" controlId="formId">
                        <Form.Control type="text" placeholder="Enter Id" value={id} requried onChange={(e) => setId(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter Name" value={name} requried onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control type="text" placeholder="Enter Email" value={email} requried onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDob">
                        <Form.Control type="text" placeholder="Enter Dob" value={dob} requried onChange={(e) => setDob(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
                </Form>
            </div>
        )


    }

    export default Edit;