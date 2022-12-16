import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "./users-thunk";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";
import {findFollowersThunk, findFollowingThunk, followUserThunk} from "../follows/follows-thunks";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Badge} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Follows from "../follows/follows";
import Likes from "../likes/likes";

const PublicProfile = () => {
    const {uid} = useParams()
    const {currentUser} = useSelector((state) => state.users)
    const {publicProfile} = useSelector((state) => state.users)
    const {blogs} = useSelector((state) => state.blog)
    const {reviews} = useSelector((state) => state.reviews)
    const {followers, following} = useSelector((state) => state.follows)
    const [followed, setFollowed] = useState(false);
    const dispatch = useDispatch()
    const handleFollowBtn = () => {
        dispatch(followUserThunk({
                                     followed: uid
                                 }))
        setFollowed(!followed)
    }



    useEffect(() => {
       dispatch(findUserByIdThunk(uid))
        dispatch(findReviewsByAuthorThunk(uid))
       // dispatch(findFollowersThunk(uid))
        //dispatch(findFollowingThunk(uid))
    }, [])

    return (
        <div className={'mb-3 mt-2'}>
            <div className={'mb-2'}>
                <Link to={-1} className={'text-decoration-none text-secondary'}>
                    <i className="bi bi-arrow-left me-1"></i>Back
                </Link>
            </div>


            {publicProfile &&
             <>
                 {
                     followed ?
                     <Button onClick={handleFollowBtn} variant={'outline-success'}
                             className={'float-end'}>Followed</Button>
                              :
                     <Button onClick={handleFollowBtn} className={'float-end'}>Follow</Button>
                 }

                 <h2>@{publicProfile.username}</h2>

                 <h5><Badge bg={'secondary'}>{publicProfile.role}</Badge></h5>
                 <Container>
                     <Form>
                         <Form.Group as={Row} className="mb-3" controlId="profileFirstName">
                             <Form.Label column sm="2" className={'text-secondary'}>
                                 First Name
                             </Form.Label>
                             <Col sm="10">
                                 <Form.Control type="text" value={publicProfile.firstName} plaintext
                                               readOnly/>
                             </Col>
                         </Form.Group>
                         <Form.Group as={Row} className="mb-3" controlId="profileLastName">
                             <Form.Label column sm="2" className={'text-secondary'}>
                                 Last Name
                             </Form.Label>
                             <Col sm="10">
                                 <Form.Control type="text" value={publicProfile.lastName} plaintext
                                               readOnly/>
                             </Col>
                         </Form.Group>


                     </Form>

                     {currentUser.role = 'BLOGGER' &&
                                         <>
                                             <h4>Blogs</h4>
                                             <ul className={'list-group'}>
                                                 {
                                                     blogs &&
                                                     blogs.length === 0 ?
                                                     <p>This user haven't written any blog.</p>
                                                                        :

                                                     blogs.map((blog) =>
                                                                   <li>
                                                                       <Link
                                                                           to={`/blog/details/${blog.id}`}>
                                                                           {blog.title}
                                                                       </Link>
                                                                   </li>
                                                     )

                                                 }
                                             </ul>
                                         </>
                     }


                     <Follows uid={uid}/>

                     <hr/>

                     <h4>Favorites</h4>
                     <Likes/>

                     <h4>Comments</h4>
                     <ul className={'list-group'}>
                         {
                             reviews &&
                             reviews.length === 0 ?
                             <p>This user haven't posted any comments yet.</p>
                                                  :

                             reviews.map((review) =>
                                             <li>
                                                 <Link to={`/meal/details/${review.idMeal}`}>
                                                     {review.review} {review.idMeal}
                                                 </Link>
                                             </li>
                             )

                         }
                     </ul>


                 </Container>
             </>
            }


        </div>
    )
}

export default PublicProfile