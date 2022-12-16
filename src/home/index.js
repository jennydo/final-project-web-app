import React from "react";
import RandomRecipes from "../random-recipes";
import {useSelector} from "react-redux";

const Home = () => {
    const {currentUser} = useSelector((state) => state.users)

    return(
        <div>


            <div className={'container'}>

                {
                    currentUser &&
                    <h1>Welcome new user: {currentUser.username}</h1>
                }

                <h3>Recommended Recipes</h3>
                <RandomRecipes/>
                {/*<h3>Recommended Cocktails</h3>*/}
                {/*<RandomCocktails/>*/}
            </div>

            <p>
                {}
            </p>



        </div>
    )
}

export default Home;