import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";
import {current} from "@reduxjs/toolkit";
import {Navigate, useNavigate} from "react-router";

const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({username, password, email, phoneNumber}))
    }
    const navigate = useNavigate();
    if(currentUser) {
        navigate('/profile');
    }

    return(
        <>
            <h1>Register</h1>
            <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="username"
                value={username}/>
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="password"
                type="password"
                value={password}/>



            <input
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="email"
                type="email"
                value={email}/>
            <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control"
                placeholder="phone number"
                type="number"
                value={phoneNumber}/>

            <button
                className="btn btn-primary w-100"
                onClick={handleRegisterBtn}>
                Register
            </button>
            {
                currentUser &&
                <h1>Welcome user: {currentUser.username}</h1>
            }
        </>
    )
}
export default Register