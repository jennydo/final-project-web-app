import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Home from "./home";
import Navbar from "./navbar";
import Search from "./search";
import MealDetails from "./meal-details";
import Container from "react-bootstrap/Container";

function App() {
  return (
      <BrowserRouter>
                <Navbar/>
          <Container>
              <Routes>
                  <Route path="/*"
                         element={<Home/>}/>
                  <Route path="/search"
                         element={<Search/>}/>
                  <Route path="/meal/details/:fid"
                         element={<MealDetails/>}/>
              </Routes>
          </Container>
      </BrowserRouter>
  );
}

export default App;
