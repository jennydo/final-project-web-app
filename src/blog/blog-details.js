import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getBlogDetailsThunk} from "./blog-thunks";
import {useEffect} from "react";
import ReactMarkdown from "react-markdown";
import {parseTime} from "./parseTime";
import Container from "react-bootstrap/Container";

const BlogDetails = () => {
    const {bid} = useParams();
    const {blogById, loading} = useSelector((state) => state.blog)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogDetailsThunk(bid))
    }, [])

    console.log(blogById)
    const aDay = new Date(blogById.time).getTime();
    console.log(parseTime(aDay));
    return(
        <div>
            <Link to={-1} className={'text-decoration-none text-secondary'}>
                <i className="bi bi-arrow-left me-1"></i>Back
            </Link>
            {
                !loading &&  <Container>
                    <h1>{blogById.title}</h1>
                    <div className={'text-secondary'}>
                    <span>By: <Link to={'/profile'} className={' text-secondary'}>
                            { blogById.author !== undefined &&  blogById.author.authorName}
                        </Link></span>
                        <i className="bi bi-dot"></i>
                        <span>{parseTime(blogById.time)}</span>
                    </div>

                <hr/>

                    <ReactMarkdown children={blogById.blog}/>
                </Container>
            }


        </div>
    )
}


export default BlogDetails;