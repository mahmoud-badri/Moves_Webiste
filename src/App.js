  import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import LoginPage from "./pages/LoginPage";
import Register from './pages/Register';
import Navbar from "./Component/Navbar";
import Moves from "./pages/Moves/Moves";
import FavMove from "./pages/Moves/FavMove";
import MovesDetelis from "./pages/Moves/MovesDetelis";
import Footer from "./Component/Footer";
import Search from "./Component/Saerch";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Switch>

          <Route exact path={"/LoginPage"} component={LoginPage} />
          <Route exact path={"/Register"} component={Register} />
          <Route exact path={"/FavMove"} component={FavMove} />
          <Route exact path={"/Moves"} component={Moves} />
          <Route exact path={"/MovesDetelis/:id"} component={MovesDetelis} />
          <Route exact path={"/Saerch"} component={Search} />
          <Route exact path={"/Footer"} component={Footer} />


          



          
        </Switch>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
