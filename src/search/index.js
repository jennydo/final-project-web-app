import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findFoodBySearchTermThunk} from "./search-thunks";


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
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


