import React, {useState} from 'react';
import './Signup.css';
import Footer from '../components/footer'
import TextField from '../components/text-field';
import Button from '../components/button';
import {useForm} from '../hooks/useForm';
import {validateSignup} from '../validation';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ApiService from '../services/apiService';


const defualtError = {
    username: '',
    email: '',
    password: ''
}

const initialState = {
    username: '',
    password: '',
    email: '',
}

export default function Signup() {

    const {
        values: user,
        setValues: setUser,
        handleOnChange,
        handleOnSubmit, 
        errors
        } = useForm(
            initialState, 
            defualtError, 
            submit, 
            validateSignup
        );

    const [isLoading, setIsLoading] = useState(false);

    function submit() {
        setIsLoading(true)
        user && ApiService
            .signup("/user/auth/signup",
                user.username, 
                user.email, 
                user.password
        ).then(
            (response) => {
                setIsLoading(false)
                setUser({username: '', password: '', email: ''});
                // console.log(response);
                window.location.replace("../login");
            }
        ).catch((error) => {
            setIsLoading(false);
            setUser({username: '', password: '', email: ''});
            console.log("Error ", error);
        });
    }

    return (
        <div className="signup">
            <form onSubmit={handleOnSubmit} noValidate>
                <div className="signup__head">
                    <div className="top">
                        <div className="icon"><LockOutlinedIcon /></div>
                    </div>
                    <h2>Sign up</h2>
                </div>
                
                <TextField 
                    type="text"
                    label="Username"
                    name="username"
                    value={user.username}
                    onChange={handleOnChange}
                    errors={errors.username}
                />

                <TextField 
                    type="text"
                    label="Email"
                    name="email"
                    value={user.email}
                    onChange={handleOnChange}
                    errors={errors.email}
                />

                <TextField 
                    type="password"
                    label="Password"
                    name="password"
                    value={user.password}
                    onChange={handleOnChange}
                    errors={errors.password}
                />

                <Button color="primary">
                    {isLoading ? <span>Loading....</span> : "Sign Up"}
                </Button>
            
                <div className="signin__recommendation ">
                    <span>Already have an account? <a href="/signin">Sign in</a>
                    </span>
                </div>
                
                <div className="signup__footer">
                    <Footer />
                </div>
            </form>
        </div>
    )
}
