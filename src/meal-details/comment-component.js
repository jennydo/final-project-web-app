import React from "react";

const commentComponent = ({comment = {
    "username": "alice",
    "review": "good food",
    "time": "2h",
    "likes": "2",
    "liked": true,
    "dislikes": "4",
    "disliked": false
}}) => {
    console.log(comment.username)
    return(
        <li className={'list-group-item'}>
            <h6>{comment.username}</h6>
            <p>{comment.review}</p>
        </li>


    )
}

export default commentComponent;