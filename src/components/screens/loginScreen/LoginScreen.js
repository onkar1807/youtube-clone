import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Login } from '../../../redux/action/authAction'
import './_loginScreen.scss'

const LoginScreen = () => {

    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = () => {
        dispatch(Login())
    }

    useEffect(() => {
        if(auth.accessToken) {
            history.push('/')
        }
    },[auth.accessToken, history])
    
    return (
        <div className="login">
            <div className="login_container">
                <img 
                    src="https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png" 
                    alt="" 
                />
                <button
                    onClick={handleLogin}
                >
                    Login with google
                </button>
                <p>This Project is made using YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen
