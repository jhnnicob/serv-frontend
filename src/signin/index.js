import React, {useState} from 'react';
import './Signin.css';
import Button from '../components/button';
import Footer from '../components/footer';
import TextField from '../components/text-field';
import Checkbox from '../components/checkbox';
import {useForm} from '../hooks/useForm';
import {validateSignin} from '../validation';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ApiService from '../services/apiService';
import Alert from '@material-ui/lab/Alert';

const defualtError = {
    username: '',
    password: ''
}

const initialState = {
    username: '',
    password: '',
}

export default function Signin() {

    const {
        values: users,
        handleOnChange,
        handleOnSubmit, 
        errors,
        setErrors
        } = useForm(
            initialState, 
            defualtError, 
            submit, 
            validateSignin
        );

    const [isLoading, setIsLoading] = useState(false);

    function submit() {
        users && ApiService
            .signin("/user/auth/signin",
                users.username, users.password)
        .then((response) => {
            localStorage.setItem("token", JSON.stringify(response.data));
            window.location.href = "/";
        }).catch((error) => {
            setErrors({error: "Invalid username or password"})
            console.log("Error: ", error.message);
        });
        
    }

    console.log(errors);

    return (
        <div className="signin">
            {errors.error && <Alert severity="error">{errors.error}</Alert>}
            <form onSubmit={handleOnSubmit} noValidate>
                <div className="signin__head">
                    <div className="top">
                        <div className="icon"><LockOutlinedIcon /></div>
                    </div>
                    <h2>Sign in</h2>
                </div>

                <TextField 
                    type="text"
                    label="Username"
                    name="username"
                    value={users.username}
                    onChange={handleOnChange}
                    errors={errors.username}
                />
        
                <TextField 
                    type="password"
                    label="Password"
                    name="password"
                    value={users.password}
                    onChange={handleOnChange}
                    errors={errors.password}
                />
    
                <div className="signin__recommendation">
                    <Checkbox label="Remember me"/>
                    <a href="/forgot-password">Forgot your password?</a>
                </div>
                
                <Button color="primary">
                    {isLoading ? <span>Loading....</span> : "Sign Up"}
                </Button>

                <div className="signin__recommendation ">
                    <span>Don't have an account yet? 
                        <a href="/signup"> Register now</a>
                    </span>
                </div>
                
                <div className="signin__footer">
                    <Footer />
                </div>
            </form>
        </div>
    )
}
