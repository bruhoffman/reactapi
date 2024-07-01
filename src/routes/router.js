import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";
import FeedPage from "../pages/feed/FeedPage";
import NewRecipe from "../pages/newRecipe/NewRecipe";
import FavoritesPage from "../pages/favorites/FavoritesPage";
import RecipePage from "../pages/recipe/RecipePage";
import ErrorPage from "../pages/error/ErrorPage";
import { Header } from "../components/header/Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"/signup"} element={<SignupPage />} />
        <Route path={"/feed"} element={<FeedPage />} />
        <Route path={"/newRecipe"} element={<NewRecipe />} />
        <Route path={"/favorites"} element={<FavoritesPage />} />
        <Route path={"/recipe/:id"} element={<RecipePage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
