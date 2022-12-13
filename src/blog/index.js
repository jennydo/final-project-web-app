import {useNavigate} from "react-router";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllBlogsThunk} from "./blog-thunks";
import {parseTime} from "./parseTime";

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
    const {currentUser} = useSelector((state) => state.users)
    const {blog, loading} = useSelector((state) => state.blog);
    useEffect(() => {
        dispatch(getAllBlogsThunk());
    }, [])

    console.log(blog, loading)
    return(
        <div>
            <h1>Blog Home</h1>

            {
                currentUser === null ?
                    <p>Please login to create a blog</p> :
                    <Button onClick={() => navigate('create')}>Create</Button>
            }


            <h3>Recent Blog</h3>


                <ul className={'list-group'}>
                    {
                        blog.map(b => <li className={'list-group-item'}
                                          onClick={() => navigate('details/' + b._id)} key={b._id}>
                            <h5>{b.title}</h5>
                            <p>{b.author.authorName}</p>
                            <p>{parseTime(b.time)}</p>
                        </li>)
                    }
                </ul>


        </div>

    )
}
export default Blog;