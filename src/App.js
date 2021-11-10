import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Nevigatioin/Navigation";

function App() {
  return (
    <div>
      {/* <h1>Bismillah </h1>*/}
      <HomePage></HomePage> 
      <Router>
      <Navigation/>
        <Switch>
          <Route path="/" component={HomePage}/>
          <Route path="/home" component={HomePage}/>
        </Switch>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
