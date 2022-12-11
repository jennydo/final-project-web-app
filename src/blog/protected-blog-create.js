import {Navigate, useNavigate} from "react-router";
import {useSelector} from "react-redux";

const ProtectedBlogCreate = ({children}) => {
    const {currentUser} = useSelector((state) => state.users)
    if (currentUser) {
        return (children)
    } else {
        return (<Navigate to={'/blog'}/>)
    }
}
export default ProtectedBlogCreate;