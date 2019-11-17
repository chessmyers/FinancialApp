import React, {Component} from 'react';
import {MDBAnimation, MDBContainer, MDBMask, MDBRow, MDBView} from "mdbreact";

class WishListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 1000,
            product: "",
            price: 0,
            message: "Please enter your desired item and its price",
        }
    }

    updateMessage =() => {
        const name = document.getElementById("prodName").value;
        const price = document.getElementById("prodPrice").value;
        this.setState({
            message: "This would cost " + (price / this.state.balance) * 100 + "% of your savings. " +
                (this.state.balance > price ? "You can afford it." : "You need to make $" + (price -
                    this.state.balance) + " to afford it."),
            product: name,
            price: price,
        })
    };

    componentDidMount() {
        fetch('http://localhost:5000/getSavings').then(out => {
            out.json().then(out => {
                console.log(out);
            })
        }).catch(err => {
            console.log(err)
        })
    }


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
                                    className="white-text text-center col-md-12 mt-xl-5 mb-5">
                                                <div className="row h-50 my-5">
                                                    <div className="col-6 h-75 d-flex align-content-center flex-wrap">
                                                        <div
                                                            className="card mx-auto w-75 peach-gradient h-100 animated zoomIn z-depth-5">
                                                            <div
                                                                className="card-body d-flex align-content-center flex-wrap">
                                                                <div className="md-form mx-auto text-left">
                                                                    <i className="fas fa-pencil-alt prefix " />
                                                                    <input type="text" className="form-control"
                                                                           aria-label="Sizing example input"
                                                                           aria-describedby="inputGroupMaterial-sizing-lg"
                                                                            id="prodName"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 h-75 d-flex align-content-center flex-wrap">
                                                        <div
                                                            className="card mx-auto w-75 h-100 peach-gradient animated zoomIn z-depth-5">
                                                            <div
                                                                className="card-body d-flex align-content-center flex-wrap">
                                                                <div className="md-form mx-auto text-left">
                                                                    <i className="fas fa-dollar-sign prefix" />
                                                                    <input type="text" className="form-control"
                                                                           aria-label="Sizing example input"
                                                                           aria-describedby="inputGroupMaterial-sizing-lg"
                                                                           id="prodPrice"
                                                                            onChange={this.updateMessage}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row h-25 mx-auto animated zoomIn delay-1s w-75">
                                                    <div className="col">
                                                        <div className="container">
                                                            <h1 className="text-white">{this.state.message}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                </MDBAnimation>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}

export default WishListPage;
