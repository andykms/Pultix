import "./App.scss";
import "./index.scss";
import { Movies } from "./presenters/Movies/Movies";
import { Route, Router, useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Search } from "./presenters/Search/Search";
import { Favorites } from "./presenters/Favorites/Favorites";
import { Film } from "./presenters/Film/Film";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path={"/films"} element={<Movies></Movies>}>
        </Route>
        <Route path="/films/:id" element={<Film></Film>}></Route>
        <Route path="*" element={"NOT FOUND"}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/favorites" element={<Favorites></Favorites>}></Route>
      </Routes>
    </>
  );
}

export default App;
