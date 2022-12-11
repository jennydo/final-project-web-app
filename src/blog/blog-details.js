import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getBlogDetailsThunk} from "./blog-thunks";
import {useEffect} from "react";
import ReactMarkdown from "react-markdown";

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
            <h4><Link to={`/user/${blogById.author._id}`}>{blogById.author.username}</Link></h4>
            <ReactMarkdown children={blogById.blog}/>
        </div>
    )
}

function parseTime(date) {

    let seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}


export default BlogDetails;