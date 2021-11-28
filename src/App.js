import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import AddAProduct from "./Pages/Dashboard/AddAProduct/AddAProduct";
import AdminPanel from "./Pages/Dashboard/AdminPanel/AdminPanel";
import Orders from "./Pages/Dashboard/Drawers/Orders/Orders";
import Payment from "./Pages/Dashboard/Drawers/Payment/Payment";
import Review from "./Pages/Dashboard/Drawers/Review/Review";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import DeleteProduct from "./Pages/Dashboard/ManageAll/DeleteProduct/DeleteProduct";
import ManageAll from "./Pages/Dashboard/ManageAll/ManageAll";
import HomePage from './Pages/HomePage/HomePage';
import NotFound from "./Pages/HomePage/Notfound/Notfound";
import PrivateRoute from "./Pages/HomePage/PrivateRoute/PrivateRoute";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import MovieDetails from "./Pages/Movies/MovieDetails/MovieDetails";
import Movies from "./Pages/Movies/Movies";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Nevigatioin/Navigation";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/movies" component={Movies} />

            <PrivateRoute exact path="/dashboard">
              <AdminPanel></AdminPanel>
            </PrivateRoute>

            <PrivateRoute exact path="/orders">
              <Orders></Orders>
            </PrivateRoute>

            <PrivateRoute exact path="/reviews">
              <Review></Review>
            </PrivateRoute>

            <PrivateRoute exact path="/payment">
              <Payment></Payment>
            </PrivateRoute>

            <PrivateRoute exact path="/film/:filmId">
              <MovieDetails></MovieDetails>
            </PrivateRoute>

            <AdminRoute exact path="/makAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>

            <AdminRoute exact path="/addProduct">
              <AddAProduct></AddAProduct>
            </AdminRoute>

            <AdminRoute exact path="/allOrders">
              <ManageAll></ManageAll>
            </AdminRoute>

            <AdminRoute exact path="/manageProduct">
              <DeleteProduct></DeleteProduct>
            </AdminRoute>

            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
