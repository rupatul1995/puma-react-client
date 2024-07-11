import {Routes,Route} from "react-router-dom";
import './App.css';
import PumaHome from "./PumaHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/Home" element={<PumaHome/>}/>
      </Routes>
    </div>
  );
}

export default App;
