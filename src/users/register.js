import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";
import {useNavigate} from "react-router";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('CRITIC')
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({
            firstName: firstname,
            lastName: lastname,
            username: username,
            email: email,
            password: password,
            role: role
        }))
    }
    const navigate = useNavigate();
    if(currentUser) {
        navigate('/profile');
    }

    return(
        <>
            <h2>Register</h2>
            {
                currentUser &&
                <h1>Welcome user: {currentUser.username}</h1>
            }

            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="registerFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" value={firstname}
                        onChange={(event => setFirstname(event.target.value))}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="registerLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" value={lastname}
                                      onChange={(event => setLastname(event.target.value))}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="registerUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username" value={username}
                                  onChange={(event => setUsername(event.target.value))} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="registerEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Enter email" value={email}
                                  onChange={(event => setEmail(event.target.value))} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="registerPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Enter password" value={password} type={'password'}
                                  onChange={(event => setPassword(event.target.value))} />
                </Form.Group>


                <Form.Group className="mb-3" id="registerRoles">
                    <Form.Label>Role</Form.Label>
                    <Form.Check
                        type={'radio'}
                        name={'registerRolesRadio'}
                        label={`Blogger`}
                        value={'BLOGGER'}
                        id={`registerRoleBlogger`}
                        checked={role === 'BLOGGER'}
                        onChange={(event) => setRole(event.target.value)}
                    />
                    <Form.Check
                        type={'radio'}
                        name={'registerRolesRadio'}
                        label={`Food Critic`}
                        value={'CRITIC'}
                        id={`registerRoleCritic`}
                        checked={role === 'CRITIC'}
                        onChange={(event) =>  setRole(event.target.value)}
                    />
                </Form.Group>

                <Button className={'w-100 mt-3'} variant="primary" type="submit"
                onClick={() => handleRegisterBtn()}>
                    Create an account
                </Button>
            </Form>
        </>
    )
}
export default Register