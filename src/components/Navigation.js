import React, {Component} from 'react';
import {
   MDBNavLink
} from "mdbreact";
import * as ROUTES from '../ROUTES';

// If adding new button to navigation bar add it here. Just copy/paste exisiting button
class Navigation extends Component {
    state = {
        collapseID: "",
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{backgroundColor: "transparent"}}
                onClick={this.toggleCollapse("navbarCollapse")}
            />
        );
        return (

            <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar px-lg-5">
                <div id="nav-name">
                    <a className="navbar-brand" href="#"><strong>FinAid</strong></a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3 px-lg-1">
                            <MDBNavLink to={ROUTES.LOGIN}>Login</MDBNavLink>
                        </li>

                                <li className="nav-item mx-3 px-lg-1">
                                    <MDBNavLink to={ROUTES.FINANCIAL}>Financial History</MDBNavLink>
                                </li>
                                <li className="nav-item mx-3 px-lg-1">
                                    <MDBNavLink to={ROUTES.WISHLIST}>Goal</MDBNavLink>
                                </li>
                                <li className="nav-item mx-3 px-lg-1">
                                    <MDBNavLink to={ROUTES.PROFILE}>Profile</MDBNavLink>
                                </li>


                        <li className="nav-item mx-3 px-lg-1">
                            <MDBNavLink to={ROUTES.ABOUT}>About</MDBNavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav nav-flex-icons justify-content-center">
                        <li id='icons' className="nav-item">
                            <a href="https://www.facebook.com/capitalone/" className="nav-link" target="_blank">
                                <i className="fab fa-facebook fa-lg"/>
                            </a>
                        </li>
                        <li id='icons' className="nav-item">
                            <a href="https://www.instagram.com/capitalone/?hl=en" className="nav-link"
                               target="_blank">
                                <i className="fab fa-instagram fa-lg"/>
                            </a>
                        </li>
                        <li id='icons' className="nav-item">
                            <a href="https://github.com/chessmyers/FinancialApp" className="nav-link" target="_blank">
                                <i className="fab fa-github fa-lg"/>
                            </a>
                        </li>
                        <li id='icons' className="nav-item">
                            <a href="https://www.linkedin.com/company/capital-one/" className="nav-link"
                               target="_blank">
                                <i className="fab fa-linkedin-in fa-lg"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>


        );
    }
}

export default Navigation;
