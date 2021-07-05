import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <main className="app">
      <nav>
        <ul className="nav-container">
          {[
            { path: "/?title=Home&path=/", title: "Home" },
            { path: "/about?title=About&path=/about", title: "About" },
          ].map(({ path, title }) => (
            <li key={title} className="nav-item">
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
