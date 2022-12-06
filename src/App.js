import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Home from "./home";
import Navbar from "./navbar";
import Search from "./search";
import MealDetails from "./meal-details";
import Container from "react-bootstrap/Container";
import Users from "./users";
import Login from "./users/login";
import Register from "./users/register";
import ProtectedRoute from "./users/protected-route";
import Profile from "./users/profile";
import CurrentUser from "./users/current-user";
import {configureStore} from "@reduxjs/toolkit";
import searchReducer from "./search/search-reducer";
import {Provider} from "react-redux";
import PublicProfile from "./users/public-profile";
import usersReducer from "./users/users-reducer";

const store = configureStore(
    {reducer:
            {search: searchReducer,
                users: usersReducer}})


function App() {
    return (
        <Provider store={store}>

        <BrowserRouter>
            <CurrentUser>
                <Navbar/>
                <Container>
                    <Routes>
                        <Route path="/*"
                               element={<Home/>}/>
                        <Route path="/search"
                               element={<Search/>}/>
                        <Route path="/meal/details/:fid"
                               element={<MealDetails/>}/>
                        <Route path="/users" element={<Users/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/profile" element={
                            <ProtectedRoute>
                                <Profile/>
                            </ProtectedRoute>
                        }/>
                        {/*<Route path="/profile/:uid" element={<PublicProfile/>}/>*/}

                    </Routes>
                </Container>
            </CurrentUser>
        </BrowserRouter>
        </Provider>
    );
}

export default App;
