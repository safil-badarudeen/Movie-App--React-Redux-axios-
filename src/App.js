import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail} />
            <Route  component={PageNotFound} />
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}
export default App;
