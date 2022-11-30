// import React from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
//
// const Search = () => {
//
//     return(
//         <div>
//             <h1>Search </h1>
//
//             <DropdownButton id="dropdown-basic-button" title="Dropdown button">
//                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </DropdownButton>
//
//         </div>
//
//
//
//     )
// }
//
// export default Search;


import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findFoodBySearchTermThunk} from "./search-thunks";
import {findFoodBySearchTerm} from "./search-service";
// import {userLikesMovieThunk} from "../likes/likes-thunks";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('Indian')
    const {recipes, loading} = useSelector((state) => state.search)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findFoodBySearchTermThunk(searchTerm))
    }, [])
    return (
        <>
            <h1>Search</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(findFoodBySearchTermThunk(searchTerm))
                        }}>Search
                    </button>
                    <input
                        className="form-control w-75"
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                        value={searchTerm}/>
                </li>
                {
                    recipes && recipes.map((recipe) =>
                                             <li key={recipe.idMeal} className="list-group-item">
                                                 {recipe.strMeal}
                                             </li>
                           )
                }
            </ul>
        </>
    )
}

export default Search;


