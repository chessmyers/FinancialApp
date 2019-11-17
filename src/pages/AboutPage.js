import React, {Component} from 'react';
import {
    MDBAnimation,
    MDBContainer,
    MDBMask,
    MDBRow,
    MDBView
} from "mdbreact";

// Just the about screen, not much to it. We should add our names and email addresses to this later (possibly
// profile pictures, as we are the founders)
class AboutPage extends Component {
    render() {
        return (
            <div id="classicformpage">
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer>
                            <MDBRow>
                                <MDBAnimation
                                    type="fadeInUpBig"
                                    delay=".3s"
                                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                                >
                                    <h1 className="h1-responsive font-weight-bold">
                                        Welcome to GreenGainz
                                    </h1>
                                    <hr className="hr-light" />
                                    <h6 className="mb-4">
                                        All your income, expenses, and purchases. In one place. Now easier than ever
                                    </h6>
                                </MDBAnimation>
                                <div className = "col-6 text animated fadeInRight delay-1s white-text text-center">
                                  <h1 className="h1-responsive font-weight-bold">
                                      TEAM
                                  </h1>
                                      <hr className="hr-light" />
                                  <div className = "container">
                                    <div className = "row d-flex text-align-center animated fadeInUp delay-2s mx-auto">
                                      <div className = "col mx-1">
                                        <p>  Christopher Myers</p>
                                      </div>
                                      <div className = "col mx-1">
                                        <p> Safi Butt</p>
                                      </div>
                                      <div className = "col mx-1">
                                        <p> Alejandro Perez</p>
                                      </div>
                                      <div className = "col mx-1">
                                        <p> Lubeed Rana</p>
                                      </div>
                                      <div className = "col mx-1">
                                        <p> Arda Temel</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>

            );
    }
}

export default AboutPage;
