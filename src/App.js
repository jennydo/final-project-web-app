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
import randomMealReducer from "./random-recipes/random-meal-reducer";
import mealDetailsReducer from "./meal-details/meal-details-reducer";
import usersReducer from "./users/users-reducer";
import Blog from "./blog";
import BlogDetails from "./blog/blog-details";
import BlogCreate from "./blog/blog-create";
import BlogReducer from "./blog/blog-reducer";

const store = configureStore(
    {reducer: {
            search: searchReducer,
            randomMeals: randomMealReducer,
            mealDetails: mealDetailsReducer,
            blog: BlogReducer,
            users: usersReducer,
            }})


function App() {
    return (
        <Provider store={store}>

        <BrowserRouter>
            {/*<CurrentUser>*/}
                <Navbar/>
                <Container>
                    <Routes>
                        <Route path="/*"
                               element={<Home/>}/>
                        <Route path="/search"
                               element={<Search/>}/>
                        <Route path="/meal/details/:mid"
                               element={<MealDetails/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/blog/create" element={<BlogCreate/>}/>
                        <Route path="/blog/details/:bid" element={<BlogDetails/>}/>
                        <Route path="/users" element={<Users/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/profile" element={
                            <ProtectedRoute>
                                <Profile/>
                            </ProtectedRoute>
                        }/>

                    </Routes>
                </Container>
            {/*</CurrentUser>*/}
        </BrowserRouter>
        </Provider>
    );
}

export default App;