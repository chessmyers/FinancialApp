import React, {Component} from 'react';
import {MDBAnimation, MDBContainer, MDBMask, MDBRow, MDBView} from "mdbreact";

class LostPage extends Component {
    render() {
        return (
            <div id="classicformpage">
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer>
                            <MDBRow>
                                <div className = "col-6 text animated fadeInRight delay-1s white-text text-center">
                                    <h1 className="h1-responsive font-weight-bold">
                                        It appears that you are lost
                                    </h1>
                                    <hr className="hr-light" />
                                    <div className = "container">
                                        <div className = "row d-flex text-align-center animated fadeInUp delay-2s mx-auto">
                                            <h4>Feel free to find your way back using one of the buttons on the upper navigation bar</h4>
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

export default LostPage;
