import {useState} from "react";
import ReactMarkdown from "react-markdown";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import {createBlogThunk} from "./blog-thunks";
import {useNavigate} from "react-router";

const BlogCreate = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const createBlog = () => {
        if (summary === '') {

        } else {
            dispatch(createBlogThunk({
                "title": title,
                "blog" : summary,
            }))
            navigate('/blog')
        }

    }
    return(
        <div>
            <form>

                <input value={title} placeholder={'Blog title'} onChange={(event) => setTitle(event.target.value)}/>

                <textarea value={summary} placeholder={'Blog body'} onChange={(event) => setSummary(event.target.value)}/>
            </form>


            <ReactMarkdown children={summary}/>


            <Button onClick={createBlog}>Create Blog</Button>


        </div>)
}

export default  BlogCreate;