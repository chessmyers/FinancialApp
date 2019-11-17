import React, {Component} from 'react';
import {MDBAnimation, MDBContainer, MDBMask, MDBRow, MDBView} from "mdbreact";

class WishListPage extends Component {
    static defaultProps = {
        income: 0,
        username: ''
    }
    constructor(props) {
        super(props);
        this.state = {
            product: "",
            price: 0,
            message: "Please enter your desired item and its price",
            totalSpending: 0
        }
    }



    updateMessage =() => {
        console.log(this.state.totalSpending);
        const name = document.getElementById("prodName").value;
        const price = document.getElementById("prodPrice").value;
        const moneyLeft = this.props.income - this.state.totalSpending;
        this.setState({
            message: "Your total income is $" + this.props.income + " and you have spent $" + this.state.totalSpending +
                " so you have $" + moneyLeft + " left. This would cost " + ((price / moneyLeft) * 100).toFixed(3) + "% of your remaining income. " +
                (moneyLeft > price ? "You can afford it." : "You need to make $" + (price -
                    moneyLeft) + " to afford it."),
            product: name,
            price: price,
        })
    };

    componentDidMount() {
        fetch('http://api.reimaginebanking.com/accounts/' + this.props.username + '/purchases?key=08bd3c4c730de658bc7e03b180c35ba3').then(out => {
            out.json().then(out => {
                console.log(out);
                let totalSpend = 0;
                for (let i = 0; i < out.length; i++) {
                    totalSpend += out[i].amount;
                }
                // }
                // let vals = this.fHistory(out);
                // let total = 0;
                // let newArr = vals[0]
                // for (let i = 0; i < newArr.length; i++) {
                //     total += newArr[i];
                // }
                this.setState({
                    totalSpending: totalSpend
                })
            }).catch(err => {
                console.log(err)
            })
        })
    }

    // fHistory(out) {
    //     let alltran=[];
    //     let trans=[];
    //     let trans_desc=[];
    //     let c;
    //     for (var i = 0; i < out.length; i++) {
    //         alltran[i] = out[i];
    //         trans[i] = alltran[i].amount;
    //         trans_desc[i]=alltran[i].description;
    //         c = [trans, trans_desc];
    //     }
    //     console.log(c);
    //
    //     return c;
    // }


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
