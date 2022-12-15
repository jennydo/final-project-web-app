import {useDispatch, useSelector} from "react-redux";
import {logoutThunk, updateProfileThunk} from "./users-thunk";
import {useNavigate} from "react-router";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useState} from "react";
const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [lastName, setLastName] = useState(currentUser.lastName);
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState(currentUser.password);
    const [editProfile, setEditProfile] = useState(false);
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    const updateUserProfile = () => {
        dispatch(updateProfileThunk({
            ...currentUser,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }))
        setEditProfile(false)
        dispatch()
    }
    console.log(currentUser);

    return (
        <>
            <h2>Profile</h2>
            {
                currentUser &&
                <>

                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="profileFirstName">
                            <Form.Label column sm="2">
                                First Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" value={firstName}
                                              onChange={(event) => setFirstName(event.target.value)}
                                    readOnly={!editProfile} plaintext={!editProfile} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="profileLastName">
                            <Form.Label column sm="2">
                                Last Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" value={lastName}
                                              onChange={(event) => setLastName(event.target.value)}
                                              readOnly={!editProfile} plaintext={!editProfile}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="profileUsername">
                            <Form.Label column sm="2">
                                Username
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" value={currentUser.username}
                                              readOnly={!editProfile} plaintext={!editProfile} disabled={editProfile}/>
                                {
                                    editProfile &&
                                    <Form.Text>
                                        Username are not changeable
                                    </Form.Text>
                                }
                            </Col>

                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="profileEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" value={email}
                                              onChange={(event) => setEmail(event.target.value)}
                                              readOnly={!editProfile} plaintext={!editProfile}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="profilePassword">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" value={password} as={'input'}

                                              onChange={(event) => setPassword(event.target.value)}
                                              readOnly={!editProfile} plaintext={!editProfile}/>
                            </Col>
                        </Form.Group>
                    </Form>

                </>

            }

            {
                !editProfile ?
                    <Button onClick={() => setEditProfile(true)}>Edit Profile</Button>
                    :
                    <Button onClick={updateUserProfile}>Save</Button>

            }
            <br/>

            <Button className={'btn-danger mt-3'}
                    onClick={handleLogoutBtn}>
                Logout
            </Button>
        </>
    )
}
export default Profile