import {useParams} from "react-router-dom";

const BlogDetails = () => {
    const {bid} = useParams();
    return(
        <div>
            <h1>{bid}</h1>
        </div>
    )
}

export default BlogDetails;