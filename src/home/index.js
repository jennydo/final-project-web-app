import React from "react";
import RandomRecipes from "../random-recipes";
import RandomCocktails from "../random-cocktails";

const Home = () => {
    return(
        <div>

            <div className={'container'}>
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