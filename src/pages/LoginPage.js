import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBFormInline,
    MDBAnimation
} from "mdbreact";
import "../index.css";
import * as ROUTES from '../ROUTES';
import request from 'request';

class LoginPage extends React.Component {
    static defaultProps = {
        logUser() {}
    };

    constructor(props) {
        super(props);
        this.state = {
            collapseID: "",
            isLogin: false,
            error: null
        }
    }



    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    toggleLogin = () => {
        this.setState((prevState, props) => {
            return {isLogin: !prevState.isLogin}
        })
    }

    componentDidMount() {
        // fetch('http://localhost:5000/getcustomer').then(out => {
        //     out.json().then(out => {
        //         console.log(out);
        //     })
        // }).catch(err => {
        //     console.log(err)
        // })
        // fetch('http://api.reimaginebanking.com/customers?key=08bd3c4c730de658bc7e03b180c35ba3').then((out) => {
        //    out.json().then(out => {
        //        console.log(out);
        //        this.processData(out);
        //    })
        // });
    }


    // callBackend = async() => {
    //     const response = await fetch('http://api.reimaginebanking.com/customers?key=08bd3c4c730de658bc7e03b180c35ba3');
    //     const body = await response.json();
    //
    //     return body;
    // }

    getUserId = async () => {

}

    doLogin = () => {


        const username = document.getElementById("usernameInput").value;
        const password = document.getElementById("passwordInput").value;


        fetch('http://api.reimaginebanking.com/accounts/' + username + '/purchases?key=08bd3c4c730de658bc7e03b180c35ba3').then(out => {
            out.json().then(out => {
                if (!out.code && out.code != 404) {
                    // user has been authenticated
                    this.props.logUser(out, username);
                    setTimeout( () => {
                        this.props.history.push(ROUTES.FINANCIAL)
                    }, 500)
                } else {
                    // invalid credentials
                    this.setState({
                        error: "Invalid credentials. Please try again"
                    })
                }

                console.log(out);
            })
        }).catch(err => {
            console.log(err)
            this.setState({
                error: "Invalid credentials. Please try again"
            })
        })


        // request('http://http://api.reimaginebanking.com/accounts?key=08bd3c4c730de658bc7e03b180c35ba3', { json: true }, (response) => {
        //     console.log({response});
        //     // if (c.err) { return console.log(c.err); }
        //     // console.log(c.url);
        //     // console.log(c.explanation);
        // });
    }

    doSignUp = () => {
        const name = document.getElementById("nameInput").value;
        const username = document.getElementById("usernameInput").value;
        const password = document.getElementById("passwordInput").value;
    }

    render() {
        const {isLogin} = this.state;
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.toggleCollapse("navbarCollapse")}
            />
        );

        const error = this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : <span />;
        return (
            <div id="classicformpage">
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer>
                            <MDBRow>
                                <MDBAnimation
                                    type="fadeInLeft"
                                    delay=".3s"
                                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                                >
                                    <h1 className="h1-responsive font-weight-bold">
                                        Sign up right now!
                                    </h1>
                                    <hr className="hr-light" />
                                    <h6 className="mb-4">
                                        All your income, expenses, and purchases. In one place. Now easier than ever
                                    </h6>
                                    <Link to={ROUTES.ABOUT}>
                                        <MDBBtn outline gradient="purple">
                                            Learn More
                                        </MDBBtn>
                                    </Link>

                                </MDBAnimation>

                                <MDBCol md="6" xl="5" className="mb-4">
                                    <MDBAnimation type="fadeInRight" delay=".3s">
                                        <MDBCard id="classic-card">
                                            <MDBCardBody className="white-text">
                                                <h3 className="text-center">
                                                    {
                                                        isLogin ? <div><MDBIcon icon="user" /> Register:</div> :
                                                        <div><MDBIcon icon="plus-circle" /> Login:</div>
                                                    }

                                                </h3>
                                                <hr className="hr-light" />
                                                {isLogin && <div>
                                                    <MDBInput
                                                        id="nameInput"
                                                        className="white-text"
                                                        iconClass="white-text"
                                                        label="Your name"
                                                        icon="user"
                                                    />
                                                </div>}

                                                <MDBInput
                                                    id="usernameInput"
                                                    className="white-text"
                                                    iconClass="white-text"
                                                    label="Username"
                                                    icon="user"
                                                />
                                                <MDBInput
                                                    id="passwordInput"
                                                    className="white-text"
                                                    iconClass="white-text"
                                                    label="Your password"
                                                    icon="lock"
                                                    type="password"
                                                />
                                                <div className="text-center mt-4 black-text">
                                                    {error}
                                                    {isLogin ? <div>
                                                        <MDBBtn rounded gradient="peach" onClick={this.doSignUp}>Sign Up</MDBBtn>
                                                        <hr/>
                                                        <MDBBtn rounded gradient="blue" size="sm" onClick={this.toggleLogin}>Sign In</MDBBtn>
                                                    </div>
                                                    :
                                                        <div>
                                                            <MDBBtn rounded gradient="blue" onClick={this.doLogin}>Sign In</MDBBtn>
                                                            <hr/>
                                                            <MDBBtn rounded gradient="peach" size="sm" onClick={this.toggleLogin}>Sign Up</MDBBtn>
                                                        </div>
                                                    }
                                                    <hr className="hr-light" />
                                                    <div className="text-center d-flex justify-content-center white-label">
                                                        <a href="#!" className="p-2 m-2">
                                                            <MDBIcon
                                                                fab
                                                                icon="twitter"
                                                                className="white-text"
                                                            />
                                                        </a>
                                                        <a href="#!" className="p-2 m-2">
                                                            <MDBIcon
                                                                fab
                                                                icon="linkedin"
                                                                className="white-text"
                                                            />
                                                        </a>
                                                        <a href="#!" className="p-2 m-2">
                                                            <MDBIcon
                                                                fab
                                                                icon="instagram"
                                                                className="white-text"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBAnimation>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}

export default withRouter(LoginPage);
