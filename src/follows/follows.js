import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findUserByIdThunk} from "../users/users-thunk";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {findFollowersThunk, findFollowingThunk, followUserThunk} from "./follows-thunks";
import {Link} from "react-router-dom";

const Follows = ({uid}) => {
    const {followers, following} = useSelector((state) => state.follows)
    const dispatch = useDispatch()
    const handleFollowBtn = () => {
        dispatch(followUserThunk({
                                     followed: uid
                                 }))
    }
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findReviewsByAuthorThunk(uid))
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
    }, [uid])

    return(
        <>
            <h2>Following</h2>
            <div className="list-group">
                {
                    following && following.map((follow) =>
                                                   <Link to={`/profile/${follow.followed._id}`} className="list-group-item">
                                                       {follow.followed.username}
                                                   </Link>
                              )
                }
            </div>
            <h2>Followers</h2>
            <div className="list-group">
                {
                    followers && followers.map((follow) =>
                                                   <Link to={`/profile/${follow.follower._id}`} className="list-group-item">
                                                       {follow.follower.username}
                                                   </Link>
                              )
                }
            </div>
        </>
    )
}

export default Follows