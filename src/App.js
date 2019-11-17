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
import LostPage from "./pages/LostPage";

// The main starting point of the application, nothing should need to be changed here. Just sets up navigation
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            income: 0,
            name: "",
            purchases: [],
            username: '',
            loggedIn: false,
        }
    }

    updateInfo = (name, income) => {
        this.setState({
            name,
            income
        })
    };

    loginUser = (purchases, username) => {
        console.log("WWWWWWWW");
        this.setState({
            purchases: purchases,
            username,
            loggedIn: true
        })
        console.log("uname: " + username)
    }


    render() {
      return (
          <Router>
              <div>
                  <Navigation loggedIn={this.state.loggedIn}/>
                  <Switch>
                      <Route exact path={ROUTES.LOGIN} render={() => {
                          return <LoginPage logUser={this.loginUser}  />
                      }}/>
                      <Route exact path={ROUTES.FINANCIAL} render={() => {
                          return <FinancialPage purchases={this.state.purchases} income={this.state.income} username={this.state.username}/>
                      }}/>
                      <Route exact path={ROUTES.MANAGE} component={ManagePage}/>
                      <Route exact path={ROUTES.WISHLIST} render={() => {
                          return <WishListPage userID={this.state.userID} income={this.state.income} username={this.state.username}/>
                      }}/>
                      <Route exact path={ROUTES.PROFILE} render={() => {
                          return <ProfilePage updateInfo={this.updateInfo} income={this.state.income} name={this.state.name} />
                      }}/>
                      <Route exact path={ROUTES.ABOUT} component={AboutPage}/>
                      <Route component={LostPage} />
                  </Switch>
              </div>
          </Router>
      )
  }
}

export default App;
