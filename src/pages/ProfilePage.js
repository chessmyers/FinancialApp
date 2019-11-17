import React, {Component} from 'react';
import {MDBAnimation, MDBBtn, MDBContainer, MDBInput, MDBMask, MDBRow, MDBView} from "mdbreact";

class ProfilePage extends Component {
    static defaultProps = {
        updateIncome() {},
        income: 0,
        name: ""
    };

    updateInfo = () => {
        const name = document.getElementById("nameInput").value;
        const income = document.getElementById("incomeInput").value;
        this.props.updateInfo(name, income);
    };

    render() {
        const {name, income} = this.props;
        return (
            <div id="classicformpage">
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer>
                            <MDBRow>
                                <div className = "col-6 text animated fadeInRight delay-1s white-text text-center">
                                    <h1 className="h1-responsive font-weight-bold">
                                        PROFILE
                                    </h1>
                                    <hr className="hr-light" />
                                    <h3>{name}</h3>
                                    <h3>Monthly income: {income}</h3>
                                    <div className = "container">
                                        <div className = "row d-flex text-align-center animated fadeInUp delay-2s mx-auto">
                                            <MDBInput
                                                id="nameInput"
                                                className="white-text"
                                                iconClass="white-text"
                                                label="Name"
                                            />
                                            <MDBInput
                                                id="incomeInput"
                                                className="white-text"
                                                iconClass="white-text"
                                                label="Monthly income"
                                                icon="money"
                                            />
                                            <MDBBtn rounded gradient="peach" onClick={this.updateInfo}>Update</MDBBtn>
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

export default ProfilePage;
