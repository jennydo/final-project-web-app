import {useState} from "react";
import ReactMarkdown from "react-markdown";
import {useDispatch} from "react-redux";
import {Button} from "react-bootstrap";
import {createBlogThunk} from "./blog-thunks";
import {useNavigate} from "react-router";

const BlogCreate = () => {
    const [summary, setSummary] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const createBlog = () => {
        dispatch(createBlogThunk({
            "title": "title2",
            "author": "alice",
            "summary" : summary
        }))
       // navigate('/blog')
    }
    return(
        <div>
            <form>
                <textarea value={summary} onChange={(event) => setSummary(event.target.value)}></textarea>
            </form>


            <ReactMarkdown children={summary}/>


            <Button onClick={createBlog}>Create Blog</Button>
        </div>)
}

export default  BlogCreate;