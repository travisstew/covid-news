import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";


function App() {
  return (
      <>
   <Router basename="/" >

      <Routes>
        <Route exact path="/" element={<HomePage />}/> 

      </Routes>

  </Router>
      </>
  );
}

export default App;
