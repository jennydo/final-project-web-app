import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk, logoutThunk, updateProfileThunk} from "./users-thunk";
import {useNavigate} from "react-router";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useEffect, useState} from "react";
import {Alert, Badge} from "react-bootstrap";
import {Link} from "react-router-dom";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {findFollowersThunk, findFollowingThunk} from "../follows/follows-thunks";
import {userLikesFoodThunk} from "../likes/likes-thunks";
import {parseTime} from "../blog/parseTime";
import Follows from "../follows/follows";
import {getBlogsByUserIdThunk} from "../blog/blog-thunks";

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

    const {reviews} = useSelector((state) => state.reviews)
    const {followers, following} = useSelector((state) => state.follows)
    const [followed, setFollowed] = useState(false);
    const {blog} = useSelector((state) => state.blog)
    useEffect(() => {
        dispatch(findUserByIdThunk(currentUser._id))
        dispatch(getBlogsByUserIdThunk(currentUser._id))
        dispatch(findReviewsByAuthorThunk(currentUser._id))
    }, [])
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        dispatch(findUserByIdThunk(currentUser._id))
        dispatch(findReviewsByAuthorThunk(currentUser._id))
        dispatch(findFollowersThunk(currentUser._id))
        dispatch(findFollowingThunk(currentUser._id))
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

    return (
        <>
            <h2>Profile</h2>

            <Alert variant="danger" onClose={() => setFirstNameAlert(false)}
                   className={firstNameAlert ? 'd-block' : 'd-none'} dismissible>
                <span>
                    The field First Name is required!
                </span>
            </Alert>
            <Alert variant="danger" onClose={() => setLastNameAlert(false)}
                   className={lastNameAlert ? 'd-block' : 'd-none'} dismissible>
                <span>
                    The field last name is required!
                </span>
            </Alert>
            <Alert variant="danger" onClose={() => setPasswordAlert(false)}
                   className={passwordAlert ? 'd-block' : 'd-none'} dismissible>
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
                                              readOnly={!editProfile} plaintext={!editProfile}/>
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
                                              readOnly={!editProfile} plaintext={!editProfile}
                                              disabled={editProfile}/>
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
            <div className={' mt-3 mb-3'}>

                <hr/>


                {currentUser && currentUser.role === 'BLOGGER' &&
                 <>
                     <h2>Blogs</h2>
                     <ul className={'list-group mb-3'}>
                         {
                             blog &&
                             blog.length === 0 ?
                             <p>This user haven't written any blog.</p>
                                               :

                             blog.filter(bg => bg.author.authorName === currentUser.username)
                                 .map((b) =>

                                          <li className={'list-group-item'}
                                              onClick={() => navigate('/blog/details/' + b._id)}
                                              key={b._id}>
                                              <h5>{b.title}</h5>


                                              <i onClick={() => {
                                                  dispatch(userLikesFoodThunk())
                                              }}
                                                 className="red"></i>
                                              <div className={'text-secondary'}>
                                                  <span>By: {b.author.authorName}</span>
                                                  <i className="bi bi-dot"></i>
                                                  <span>{parseTime(b.time)}</span>
                                              </div>

                                          </li>
                                 )

                         }
                     </ul>
                 </>
                }


                <Follows uid={currentUser._id}/>


                <h2>Comments</h2>
                <ul className={'list-group mb-3'}>
                    {currentUser &&
                     reviews &&
                     reviews.length === 0 ?
                     <p>This user haven't posted any comments yet.</p> :
                     reviews.map((u) =>
                                     <li className={'list-group-item'}
                                         onClick={() => navigate(`/meal/details/${u.idMeal}`)}>


                                         {/*            reviews.map((review) =>*/}
                                         {/*                <li>*/}
                                         {/*                    <Link to={`/meal/details/${review.idMeal}`}>*/}
                                         {/*                        {review.review} {review.idMeal}*/}
                                         {/*                    </Link>*/}
                                         {/*                </li>*/}
                                         {/*            )*/}

                                         {/*    }*/}

                                         {/*                */}
                                         {/*<h4>Following</h4>*/}
                                         {/*<ul className={'list-group'}>*/}
                                         {/*    {*/}
                                         {/*        following &&*/}
                                         {/*        reviews.length === 0 ?*/}
                                         {/*            <p>This user haven't followed anyone yet.</p>*/}
                                         {/*            :*/}
                                         {/*            following.map((follow) =>*/}
                                         {/*                <Link to={`/profile/${follow.followed._id}`} className="list-group-item">*/}
                                         {/*                    {follow.followed.username}*/}
                                         {/*                </Link>*/}
                                         {/*            )*/}
                                         {/*    }*/}
                                         {/*</ul>*/}

                                         <span className={'fw-bold'}><Link className={'text-black'}
                                                                           to={`/profile/${u.author._id}`}>{u.author.username}</Link></span>
                                         <span><i className="bi bi-dot"></i>{parseTime(
                                             u.time)}</span><p>{u.review}</p>
                                     </li>)
                    }
                </ul>


            </div>
            <hr/>

            <Button className={'btn-danger mt-3'}
                    onClick={handleLogoutBtn}>
                Logout
            </Button>
        </>
    )
}
export default Profile