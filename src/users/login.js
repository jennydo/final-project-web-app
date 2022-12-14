import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunk";
import {Navigate, useNavigate} from "react-router";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Login = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}))
        } catch (e) {

        }
    }
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return(
        <>
            <h2>Login</h2>

            <Form>
                <Form.Group className="mb-3" controlId="loginUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username" value={username}
                                  onChange={(event => setUsername(event.target.value))} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="registerEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Enter password" value={password}
                                  onChange={(event => setPassword(event.target.value))} />
                </Form.Group>

                <Button className={'w-100 mt-3'} onClick={() => handleLoginBtn()}>Login</Button>
            </Form>
        </>
    )
}
export default Login