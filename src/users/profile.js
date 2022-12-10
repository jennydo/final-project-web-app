import {useDispatch, useSelector} from "react-redux";
import {logoutThunk, updateUserThunk} from "./users-thunk";
import {useNavigate} from "react-router";

const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)

    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }


    return (
        <>
            <h1>Profile</h1>
            {
                currentUser &&
                <>
                    <h2>Welcome user: {currentUser.username}</h2>
                    <h2>Email: {currentUser.email}</h2>
                    <h2>Phone Number: {currentUser.phoneNumber}</h2>
                </>

            }


            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>
        </>
    )
}
export default Profile