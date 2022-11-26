import RandomRecipes from "./random-recipes";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Home from "./home";

function App() {
  return (
      <BrowserRouter>
              <Routes>
                  <Route path="/*"
                         element={<Home/>}/>
              </Routes>
      </BrowserRouter>
  );
}

export default App;
