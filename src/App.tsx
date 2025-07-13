import "./App.scss";
import "./index.scss";
import { Movies } from "./presenters/Movies/Movies";
import { Route, Router, useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Search } from "./presenters/Search/Search";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path={"/films"} element={<Movies></Movies>}></Route>
        <Route path="*" element={"NOT FOUND"}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
      </Routes>
    </>
  );
}

export default App;
