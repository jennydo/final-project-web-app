import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findFoodBySearchTermThunk} from "./search-thunks";
import MealCard from "../meal-card/mealCard";
import Row from "react-bootstrap/Row";


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
            <div>
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
            </div>
                    <Row>
                        {
                            recipes && recipes.map(m => <MealCard meal={m}/>)
                        }
                    </Row>


        </>
    )
}

export default Search;


