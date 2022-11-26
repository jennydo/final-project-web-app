import React from "react";
import RandomRecipes from "../random-recipes";
import Navbar from "../navbar";
import RandomCocktails from "../random-cocktails";

const Home = () => {
    return(

        <div>

            <Navbar/>

            <div className="w-100">
                <img alt="Homepage Banner" className={'w-100'} src={'https://media.istockphoto.com/id/1398788867/photo/decorative-abstract-fragility-blue-shade-wavy-background.jpg?b=1&s=170667a&w=0&k=20&c=M_8ioW-qyip4-DwB041vBB8KOsKFhMTudJjcEDfjmhc='}/>
            </div>

            <div className={'container'}>
                <h3>Recommended Recipes</h3>
                <RandomRecipes/>
                <h3>Recommended Cocktails</h3>
                <RandomCocktails/>
            </div>

        </div>
    )
}

export default Home;