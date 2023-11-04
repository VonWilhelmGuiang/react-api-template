/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Collapse,
    Alert,
    Spinner
} from "reactstrap";

import { useReducer } from "react";
import { validEmail } from "helpers/helpers";


const Login = () => {
    
    const [state,set_state] = useReducer( (state,next_state) => {
        const new_state = {...state , ...next_state} //overrides current state to new state

        //email address trappings
        if(new_state.email === ""){
            new_state.email_error = 'Email Address is Required';
        }else if(!validEmail(new_state.email)){
            new_state.email_error = 'Email Address is Invalid';
        }else{
            new_state.email_error = false;
        }

        //password trappings
        if(new_state.password === ""){
            new_state.password_error = "Password is Required";
        }else{
            new_state.password_error = false;
        }

        //login button
        if(new_state.password_error === false && new_state.email_error === false){
            new_state.disable_log_in = false;
        }else{
            new_state.disable_log_in = true;
        }

        return new_state;
    }, { 
        'email':'', 'email_error':'', 'email_active':false, 
        'password':'',  'password_error':'', 'password_active': false,
        'error_message': [], 'show_errors':false,
        'disable_log_in': true, 'processing':false
    });

    //clear all local storage
    localStorage.clear()

    const processLogin = (e) => {
        e.preventDefault();
        if(state.disable_log_in === false){
            fetch('http://127.0.0.1:8000/api/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Accept': 'application/json'
                },
                body : JSON.stringify({
                    'email' : state.email,
                    'password' : state.password
                })
            })
            .then((response)=>response.json())
                .then((data)=>{
                    if(data.hasOwnProperty('errors')){
                        const error_messages = (Object.keys(data.errors).map((error_key)=>data.errors[error_key]));
                        set_state({'error_message':error_messages, 'show_errors': true});
                    }else if(data.success === false){
                        set_state({'error_message':[data.message], 'show_errors': true});
                    }
                    else if(data.success === true){
                        //set token
                        localStorage.setItem('token',data.token);
                    }
                    else{
                        set_state({'error_message':['An Error has occured. Please try again.'], 'show_errors': true});
                    }
                    
                    set_state({'processing': false});
                })
                .catch(()=>{
                    set_state({'error_message':['An Error has occured. Please try again.'], 'show_errors': true, 'processing': false});
                });
        }else{
            set_state({'error_message':'An Empty Required Field is Detected'});
        }
        
    }


    return (
        <>
            
            <Col lg="5" md="7">
                
                <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted">
                            <small>Sign in with credentials</small>
                        </div>
                        <div className="py-2">
                            <Collapse isOpen={state.show_errors? true : false}>
                                <div>
                                    <small>
                                        {state.error_message.map((message,key)=><Alert color="danger" className="m-1"  key={key} fade={true} >{message}</Alert>)}
                                    </small>
                                </div>
                            </Collapse>
                        </div>
                        <Form role="form">
                            <FormGroup 
                                onFocus={
                                    ()=>{
                                        set_state({'email_active':true, 'password_active':true});
                                    }
                                }
                                onChange={
                                    (e)=>{ 
                                        set_state({[e.target.name]:e.target.value})
                                    }
                                }
                            >
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                        <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        autoComplete="off"
                                        defaultValue={state.email}
                                    />
                                    </InputGroup>
                                    <Collapse isOpen={state.email_error ? true:false}>
                                        <div><small className="text-danger">{state.email_error}</small></div>
                                    </Collapse>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                        <i className="ni ni-lock-circle-open" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        autoComplete="off"
                                        defaultValue={state.password}
                                    />
                                    </InputGroup>
                                    <Collapse isOpen={state.password_error? true:false}>
                                        <div><small className="text-danger">{state.password_error}</small></div>
                                    </Collapse>
                                </FormGroup>
                            </FormGroup>
                            <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                    className="custom-control-input"
                                    id=" customCheckLogin"
                                    type="checkbox"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor=" customCheckLogin"
                                >
                                    <span className="text-muted">Remember me</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <Button 
                                    className="my-4" 
                                    color="primary" 
                                    type="submit" 
                                    disabled={state.disable_log_in===true || state.processing === true} 
                                    onClick={
                                        (e)=>{
                                            set_state({'show_errors':false, 'disable_log_in': true, 'processing': true});
                                            processLogin(e);
                                        }
                                    }
                                >
                                    {
                                        state.processing?
                                            <Spinner
                                                type="grow"
                                            >
                                                Loading...
                                            </Spinner>
                                        :
                                            <span>Log in</span>
                                    }                                    
                                </Button>
                            </div>
                        </Form>
                        <Row>
                            <Col className="text-left">
                                <small>Forgot password</small>
                            </Col>
                            <Col className="text-right">
                                <small>Create new account</small>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
};

export default Login;
