import React from "react";
import RandomRecipes from "../random-recipes";
import RandomCocktails from "../random-cocktails";

import meal from '../data/meal.json'

const Home = () => {
    const summary = "Add'l ingredients: mayonnaise, siracha\r\n\r\n1\r\n\r\nPlace rice in a fine-mesh sieve and rinse until water runs clear. Add to a small pot with 1 cup water (2 cups for 4 servings) and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15 minutes. Keep covered off heat for at least 10 minutes or until ready to serve.\r\n\r\n2\r\n\r\nMeanwhile, wash and dry all produce. Peel and finely chop garlic. Zest and quarter lime (for 4 servings, zest 1 lime and quarter both). Trim and halve cucumber lengthwise; thinly slice crosswise into half-moons. Halve, peel, and medium dice onion. Trim, peel, and grate carrot.\r\n\r\n3\r\n\r\nIn a medium bowl, combine cucumber, juice from half the lime, ¼ tsp sugar (½ tsp for 4 servings), and a pinch of salt. In a small bowl, combine mayonnaise, a pinch of garlic, a squeeze of lime juice, and as much sriracha as you’d like. Season with salt and pepper.\r\n\r\n4\r\n\r\nHeat a drizzle of oil in a large pan over medium-high heat. Add onion and cook, stirring, until softened, 4-5 minutes. Add beef, remaining garlic, and 2 tsp sugar (4 tsp for 4 servings). Cook, breaking up meat into pieces, until beef is browned and cooked through, 4-5 minutes. Stir in soy sauce. Turn off heat; taste and season with salt and pepper.\r\n\r\n5\r\n\r\nFluff rice with a fork; stir in lime zest and 1 TBSP butter. Divide rice between bowls. Arrange beef, grated carrot, and pickled cucumber on top. Top with a squeeze of lime juice. Drizzle with sriracha mayo."
    console.log(summary.split("\r\n"))
    return(
        <div>

            <div className="w-100">
                <img alt="Homepage Banner" className={'w-100'} src={'https://media.istockphoto.com/id/1398788867/photo/decorative-abstract-fragility-blue-shade-wavy-background.jpg?b=1&s=170667a&w=0&k=20&c=M_8ioW-qyip4-DwB041vBB8KOsKFhMTudJjcEDfjmhc='}/>
            </div>

            <div className={'container'}>
                <h3>Recommended Recipes</h3>
                <RandomRecipes/>
                <h3>Recommended Cocktails</h3>
                <RandomCocktails/>
            </div>

            <p>
                {}

            </p>

        </div>
    )
}

export default Home;