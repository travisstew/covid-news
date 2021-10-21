
import CovidNews from "./components/CovidNews";
import Header from "./components/Header";
import Home from "./components/Home";
import '../src/index.css'
import Navbars from "./components/Navbars";


function App() {
  return (
    <>
      <Navbars />
      <div>
        <Home />
        <Header />
       
      <CovidNews />
      </div>

      
    </>
  );
}

export default App;
