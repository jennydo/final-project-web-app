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
            <h4>Following</h4>
            <ul className="list-group mb-3">
                {
                    following &&
                        following.length === 0 ?

                        <p>This user is not following anyone yet.</p> :

                    following.map((follow) =>
                        <li className={'list-group-item'}>
                                                   <Link to={`/profile/${follow.followed._id}`} className="list-group-item">
                                                       {follow.followed.username}
                                                   </Link>
                        </li>
                              )
                }
            </ul>
            <h4>Followers</h4>
            <ul className="list-group mb-3">
                {
                    followers && followers.length === 0 ?
                        <p>This user is not following anyone yet.</p> :
                        followers.map((follow) =>
                                                   <Link to={`/profile/${follow.follower._id}`} className="list-group-item">
                                                       {follow.follower.username}
                                                   </Link>
                              )
                }
            </ul>
        </>
    )
}

export default Follows