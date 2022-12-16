import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findUserByIdThunk} from "../users/users-thunk";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {findFollowersThunk, findFollowingThunk} from "./follows-thunks";
import {Link} from "react-router-dom";

const Follows = ({uid}) => {
    const {followers, following} = useSelector((state) => state.follows)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
    }, [])

    return(
        <>
            <h2>Following</h2>
            <div className="list-group">
                {
                    following && following.map((follow) =>
                                                   <Link to={`/profile/${follow.following._id}`} className="list-group-item">
                                                       {follow.following.username}
                                                   </Link>
                              )
                }
            </div>
            <h2>Followers</h2>
            <div className="list-group">
                {
                    followers && followers.map((follow) =>
                                                   <Link to={`/profile/${follow.followers._id}`} className="list-group-item">
                                                       {follow.followers.username}
                                                   </Link>
                              )
                }
            </div>
        </>
    )
}

export default Follows