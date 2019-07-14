import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { About } from "./pages/about";
import { Index } from "./pages/index";
import { UserContext } from "./useContext";

const App = () => {
  const [user, setUser] = useState(null);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <UserContext.Provider value={providerValue}>
          <Route path="/" exact component={Index} />
          <Route path="/about" exact component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default App;
