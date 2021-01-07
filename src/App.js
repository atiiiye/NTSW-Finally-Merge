

//import Routes
import PrivateRoute from "./Routes/PrivateRoute ";
import PublicRoute from "./Routes/PublicRoute";
import "./css/login.css";
import "../src/css/default.css";
import { Redirect, Route, Switch } from "react-router-dom";

// import packages
import "font-awesome/css/font-awesome.min.css";
import "./../node_modules/fontawesome-4.7/css/font-awesome.min.css";

//components
import SelectRole from './Components/SelectRole/SelectRole';
import DefultPage from './Components/Users/DefaultPage';
import AdminContextes from "./Contextes/AdminContextes";


//ahmadi
import HomePageLogin from './Components/HomePageLogin';
import OrderPage from './Components/OrderPage';
import DetailsPage from './Components/DetailsPage';

//seyfi
import Home from './Components/Cmp-Header/Home'

function App() {
  return (
    <Switch>
      <Route path="/HomePageLogin" component={HomePageLogin} />
      <Route path="/OrderPage" component={OrderPage} />
      <Route exact path="/DetailsPage" component={DetailsPage} />

      <Route path="/" exact component={Home} />
      <AdminContextes>
      <Route exact path="/select-role" component={SelectRole} />
      <Route exact path="/DefultPage" component={DefultPage} />
      </AdminContextes>
      
    </Switch>
  );
}

export default App;
