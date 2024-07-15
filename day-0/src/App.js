import {Routes,Route} from "react-router-dom";
import './App.css';
import PumaHome from "./PumaHome";
import Login from "./Login";
import Register from "./Register";
import MensTshirt from "./MensTshirt";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<PumaHome/>}/>
        <Route path="/page-login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/menstshirt" element={<MensTshirt/>}/>
      </Routes>
    </div>
  );
}

export default App;
