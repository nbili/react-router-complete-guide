import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function ReactTopic() {
  return <>ReactTopic</>;
}

function ReactDomTopic() {
  return <>ReactDomTopic</>;
}

function ReactRouterDomTopic() {
  return <>ReactRouterDomTopic</>;
}

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={`/react`}>React</Link>
          </li>
          <li>
            <Link to={`/react-dom`}>React Dom</Link>
          </li>
          <li>
            <Link to={`/react-router-dom`}>React Router Dom</Link>
          </li>
        </ul>

        <Routes>
          <Route path={`/`} element={<Navigate to={`/react`} />}></Route>
          <Route path={`/react`} element={<ReactTopic />}></Route>
          <Route path={`/react-dom`} element={<ReactDomTopic />}></Route>
          <Route
            path={`/react-router-dom`}
            element={<ReactRouterDomTopic />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
