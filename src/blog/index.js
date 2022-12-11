import {useNavigate} from "react-router";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllBlogsThunk} from "./blog-thunks";

const blogs = [
    {
        _id: "123",
        title: "title1",
        username: "bob",
        summary: "this a simple food blog by bob",
        date: "3h"
    },
    {
        _id: "234",
        title: "title2",
        username: "alice",
        summary: "this a simple food blog by alice",
        date: "4h"
    }
]

const Blog = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {blog, loading} = useSelector((state) => state.blog);
    useEffect(() => {
        dispatch(getAllBlogsThunk());
    }, [])

    console.log(blog, loading)
    return(
        <div>
            <h1>Blog Home</h1>

            <h3>Create a blog</h3>
            <Button onClick={() => navigate('create')}>Create</Button>

            <h3>Recent Blog</h3>


                <ul className={'list-group'}>
                    {
                        blog.map(b => <li className={'list-group-item'}
                                          onClick={() => navigate('details/' + b._id)} key={b._id}>
                            <h5>{b.title}</h5>
                            <p>{b.username}</p>
                        </li>)
                    }
                </ul>


        </div>

    )
}
export default Blog;