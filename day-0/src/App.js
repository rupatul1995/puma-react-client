import {Routes,Route} from "react-router-dom";
import './App.css';
import PumaHome from "./PumaHome";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<PumaHome/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
