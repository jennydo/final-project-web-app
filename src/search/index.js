import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findFoodBySearchTermThunk} from "./search-thunks";
import MealCard from "../meal-card/mealCard";
import Row from "react-bootstrap/Row";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";


const Search = () => {
    const {searchName} = useParams();
    const navigate = useNavigate();
    console.log(searchName)
    const [searchTerm, setSearchTerm] = useState(searchName)
    const {recipes, loading} = useSelector((state) => state.search)
    const dispatch = useDispatch()
    useEffect(() => {
        if (searchTerm === undefined) {
            dispatch(findFoodBySearchTermThunk(''))
        } else {
            dispatch(findFoodBySearchTermThunk(searchTerm))
        }

    }, [])

    const searchHandle = () => {
        navigate('/search/' + searchTerm)
        dispatch(findFoodBySearchTermThunk(searchTerm))
    }
    return (
        <>
            <h2>Search</h2>
            <div>
                <button
                    className="btn btn-primary float-end"
                    onClick={() =>searchHandle()}>Search
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
                            recipes && recipes.map(m => <MealCard meal={m} key={m.idMeal}/>)
                        }
                    </Row>


        </>
    )
}

export default Search;


