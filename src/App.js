import "./App.css";
import { Routes, Route } from "react-router-dom";
import Room from "./component/room";
import Home from "./component/home";


function App() {
  return (
    <div className="products">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/room/:roomId" element={ <Room /> } />
      </Routes>
    </div>
  );
}

export default App;
