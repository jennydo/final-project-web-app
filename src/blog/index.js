import {useNavigate} from "react-router";
import {Button} from "react-bootstrap";

const blogs = [
    {
        _id: "123",
        title: "title1",
        author: "bob",
        summary: "this a simple food blog by bob",
        date: "3h"
    },
    {
        _id: "234",
        title: "title2",
        author: "alice",
        summary: "this a simple food blog by alice",
        date: "4h"
    }
]

const Blog = () => {
    const navigate = useNavigate();
    return(
        <div>
            <h1>Blog Home</h1>

            <h3>Create a blog</h3>
            <Button onClick={() => navigate('create')}>Create</Button>

            <h3>Recent Blog</h3>

            <ul className={'list-group'}>
                {
                    blogs.map(b => <li className={'list-group-item'}
                                       onClick={() => navigate('details/' + b._id)} key={b._id}>
                        <h5>{b.title}</h5>
                        <p>{b.author}</p>
                        <p>{b.summary}</p>
                    </li>)
                }
            </ul>


        </div>

    )
}
export default Blog;