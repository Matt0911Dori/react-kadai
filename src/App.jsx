// App.jsx

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Janken } from "./pages/Janken";
import { Jankenv3 } from "./pages/Jankenv3";
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Play Field</h1>
      <ul>
      <li>
          <Link to="/janken">普通のじゃんけんを始める</Link>
        </li>
        <li>
          <Link to="/jankenv3">未だかつてないじゃんけんを始める</Link>
        </li>
 
      </ul>
      <hr />
      <Routes>
      <Route path="/janken" element={<Janken />} />
        <Route path="/jankenv3" element={<Jankenv3 />} />

      </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;