import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import HomePage from './Pages/HomePage/HomePage';
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Nevigatioin/Navigation";

function App() {
  return (
    <div className="App">
      {/* <h1>Bismillah </h1>*/}
      <AuthProvider>
      <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/home" component={HomePage}/>
            <Route exact  path="/login" component={Login}/>
            <Route exact  path="/register" component={Register}/>
        </Switch>
        <Footer/>
    </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
