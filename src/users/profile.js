import {useDispatch, useSelector} from "react-redux";
import {logoutThunk, updateProfileThunk} from "./users-thunk";
import {useNavigate} from "react-router";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useState} from "react";
import {Alert, Badge} from "react-bootstrap";
const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [lastName, setLastName] = useState(currentUser.lastName);
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState(currentUser.password);
    const [editProfile, setEditProfile] = useState(false);

    const [firstNameAlert, setFirstNameAlert] = useState(false);
    const [lastNameAlert, setLastNameAlert] = useState(false);
    const [passwordAlert, setPasswordAlert] = useState(false);

    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    const updateUserProfile = () => {
        setFirstNameAlert(false);
        setLastNameAlert(false);
        setPasswordAlert(false);

        if (firstName === '') {
            setFirstNameAlert(true);
        } else if (lastName === '') {
            setLastNameAlert(true);
        } else if (password === '') {
            setPasswordAlert(true);
        } else {
            dispatch(updateProfileThunk({
                ...currentUser,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }))
            setEditProfile(false)
        }

    }
    console.log(currentUser);

    return (
        <>
            <h2>Profile</h2>

            <Alert variant="danger" onClose={() => setFirstNameAlert(false)} className={firstNameAlert ? 'd-block' : 'd-none'} dismissible>
                <span>
                    The field First Name is required!
                </span>
            </Alert>
            <Alert variant="danger" onClose={() => setLastNameAlert(false)} className={lastNameAlert ? 'd-block' : 'd-none'} dismissible>
                <span>
                    The field last name is required!
                </span>
            </Alert>
            <Alert variant="danger" onClose={() => setPasswordAlert(false)} className={passwordAlert ? 'd-block' : 'd-none'} dismissible>
                <span>
                    The field password is required!
                </span>
            </Alert>
            {
                currentUser &&
                <>

                    <h5><Badge bg="secondary">{currentUser.role}</Badge></h5>

                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="profileFirstName">
                            <Form.Label column sm="2" className={'text-secondary'}>
                                First Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" value={firstName}
                                              onChange={(event) => setFirstName(event.target.value)}
                                    readOnly={!editProfile} plaintext={!editProfile} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="profileLastName">
                            <Form.Label column sm="2" className={'text-secondary'}>
                                Last Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" value={lastName}
                                              onChange={(event) => setLastName(event.target.value)}
                                              readOnly={!editProfile} plaintext={!editProfile}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="profileUsername">
                            <Form.Label column sm="2" className={'text-secondary'}>
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
                            <Form.Label column sm="2" className={'text-secondary'}>
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" value={email}
                                              onChange={(event) => setEmail(event.target.value)}
                                              readOnly={!editProfile} plaintext={!editProfile}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="profilePassword">
                            <Form.Label column sm="2" className={'text-secondary'}>
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


            <Button className={'ms-5'}
                    onClick={() => navigate('/profile/' + currentUser._id)}>
                View Public Profile
            </Button>
            <br/>

            <Button className={'btn-danger mt-3'}
                    onClick={handleLogoutBtn}>
                Logout
            </Button>
        </>
    )
}
export default Profile