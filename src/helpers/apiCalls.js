import axios from "axios";

//for maintanable API endpoints

const baseUrl = process.env.REACT_APP_BASE_URL;
const env = process.env;
const  headers = {
    "Content-Type": "multipart/form-data",
    "Accept" : "application/json",
}

export  function UserLogin(data){
    return axios.post(
        baseUrl + env.REACT_APP_LOGIN,
        {...data}, 
        {
           headers : [headers]
        } 
    );
}

export function UserRegistration(data){
    return axios.post(
        baseUrl + env.REACT_APP_REGISTER,
        {...data},
        {
            headers: [headers]
        }
    )
}