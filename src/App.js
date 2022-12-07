import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Add from "./components/Add";
import Home from "./components/Home";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Add/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
