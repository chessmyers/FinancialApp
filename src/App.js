import React from "react";
import LoginPage from './pages/LoginPage';
import FinancialPage from './pages/FinancialPage';
import ManagePage from './pages/ManagePage';
import WishListPage from './pages/WishListPage';
import AboutPage from './pages/AboutPage';
import "./index.css";
import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import * as ROUTES from './ROUTES';
import ProfilePage from "./pages/ProfilePage";

// The main starting point of the application, nothing should need to be changed here. Just sets up navigation
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            income: 0
        }
    }

    updateIncome = (income) => {
        this.setState({
            income
        })
    };


    render() {
      return (
          <Router>
              <div>
                  <Navigation/>
                  <Switch>
                      <Route exact path={ROUTES.LOGIN} component={LoginPage}/>
                      <Route exact path={ROUTES.FINANCIAL} component={FinancialPage}/>
                      <Route exact path={ROUTES.MANAGE} component={ManagePage}/>
                      <Route exact path={ROUTES.WISHLIST} component={WishListPage}/>
                      <Route exact path={ROUTES.PROFILE} component={ProfilePage}/>
                      <Route exact path={ROUTES.ABOUT} component={AboutPage}/>
                  </Switch>
              </div>
          </Router>
      )
  }
}

export default App;
