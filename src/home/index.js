import React, {useEffect} from "react";
import RandomRecipes from "../random-recipes";
import {useDispatch, useSelector} from "react-redux";
import {userLikesFoodThunk} from "../likes/likes-thunks";
import {parseTime} from "../blog/parseTime";
import {useNavigate} from "react-router";
import {findUserByIdThunk} from "../users/users-thunk";
import {getBlogsByUserIdThunk} from "../blog/blog-thunks";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";

const Home = () => {
    const {currentUser} = useSelector((state) => state.users)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {blog} = useSelector((state) => state.blog)
    const {reviews} = useSelector((state) => state.reviews)
    useEffect(() => {
        if (currentUser) {
            dispatch(findUserByIdThunk(currentUser._id))
            dispatch(getBlogsByUserIdThunk(currentUser._id))
            dispatch(findReviewsByAuthorThunk(currentUser._id))
        }
    }, [])

    return(
        <div>
            <div className={'container'}>
                {
                    currentUser &&
                    <h1>Welcome {currentUser.role.toLowerCase()} {currentUser.username}!</h1>
                }
                { currentUser &&  currentUser.role === 'BLOGGER' &&
                    <>
                        <h4> Recent Blogs</h4>
                        <ul className={'list-group mb-3'}>
                            {
                                blog &&
                                blog.length === 0 ?
                                    <p>This user haven't written any blog.</p>
                                    :

                                blog.filter(bg => bg.author.authorName === currentUser.username).map((b) =>

                                        <li className={'list-group-item'}
                                            onClick={() => navigate('/blog/details/' + b._id)} key={b._id}>
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

                {currentUser &&
                 <>
                     <h4>Recent Comments</h4>
                     <ul className={'list-group mb-3'}>
                         {currentUser &&
                          reviews &&
                          reviews.length === 0 ?
                          <p>This user haven't posted any comments yet.</p> :
                          reviews.map((u) =>
                                          <li className={'list-group-item'}
                                              onClick={() => navigate(`/meal/details/${u.idMeal}`)}>

                                              <span className={'fw-bold'}><Link
                                                  className={'text-black'}
                                                  to={`/profile/${u.author._id}`}>{u.author.username}</Link></span>
                                              <span><i className="bi bi-dot"></i>{parseTime(u.time)}</span>
                                              <p>{u.review}</p>
                                          </li>)
                         }
                     </ul>
                 </>
                }

                <h3>Recommended Recipes</h3>
                <RandomRecipes/>

            </div>

            <p>
                {}
            </p>



        </div>
    )
}

export default Home;