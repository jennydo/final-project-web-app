import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getBlogDetailsThunk} from "./blog-thunks";
import {useEffect} from "react";
import ReactMarkdown from "react-markdown";
import {parseTime} from "./parseTime";

const BlogDetails = () => {
    const {bid} = useParams();
    const {blogById} = useSelector((state) => state.blog)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogDetailsThunk(bid))
    }, [])

    console.log(blogById)
    const aDay = new Date(blogById.time).getTime();
    console.log(parseTime(aDay));
    return(
        <div >
            <h1>{blogById.title}</h1>
            {/*<h4><Link to={`/user/${blogById.author._id}`}>{blogById.author.username}</Link></h4>*/}
            <ReactMarkdown children={blogById.blog}/>
        </div>
    )
}


export default BlogDetails;