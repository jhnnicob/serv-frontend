import React from 'react'
import Button from '../components/button';
import TextField from '../components/text-field'
import './ForgotPassword.css';

export default function ForgotPassword() {
    return (
        <div className="forgotPassword">
            <form>
                <h3>Reset your password</h3>
                <TextField label="Email address"/>
                <div className="forgotPassword__action">
                    <Button color="primary">Request new password</Button>
                </div>
            </form>
        </div>
    )
}