import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Home from "./home";
import Navbar from "./navbar";
import Search from "./search";

function App() {
  return (
      <BrowserRouter>
                <Navbar/>
              <Routes>
                  <Route path="/*"
                         element={<Home/>}/>
                  <Route path="/search"
                         element={<Search/>}/>
              </Routes>
      </BrowserRouter>
  );
}

export default App;
