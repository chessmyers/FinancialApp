import React, {Component} from 'react';
import '../index.css';
import {
    MDBCard, MDBCardBody, MDBCardTitle,
    MDBContainer,
    MDBMask,
    MDBView,
} from "mdbreact";

// This page can show past purchases or percentages
class FinancialPage extends Component {
    static defaultProps = {
        purchases: [],
        income: 0,
        username: '5dd149863c8c2216c9fccb2e'
    };

    goalPercents = {
        Housing: 35,
        Transportation: 20,
        Food: 15,
        Debt: 10,
        Savings: 7,
        Utilities: 5,
        Clothing: 5,
        Medical: 3,
        Personal: 5
    };

    constructor(props) {
        super(props);


        // this is just dummy data. We should actually load this data in and change the state to have it
        this.state = {
            data: [
                [],
                []
            ]
        }
    }


    componentDidMount() {
        this.grabFinancialData();
    }

    grabFinancialData = () => {
        console.log("username: " + this.props.username)
        fetch('http://api.reimaginebanking.com/accounts/' + this.props.username + '/purchases?key=08bd3c4c730de658bc7e03b180c35ba3').then(out => {
            out.json().then(out => {
                console.log(out);
                let vals = this.fHistory(out);
                this.setState({
                    data: vals
                })
            })
        }).catch(err => {
            console.log(err)
        })
    };


    fHistory(out) {
        let alltran=[];
        let trans=[];
        let trans_desc=[];
        let c;
        for (var i = 0; i < out.length; i++) {
            alltran[i] = out[i];
            trans[i] = alltran[i].amount;
            trans_desc[i]=alltran[i].description;
            c = [trans, trans_desc];
        }
        console.log(c);

        return c;
    }

    render() {
        const {purchases, income} = this.props;
        const message = <div className="row h-25 my-5">
            <div className="col">
                <div
                    className="card mx-auto w-75 mean-fruit-gradient animated fadeInDown delay-1s z-depth-5">
                    <div className="card-body d-flex align-content-center flex-wrap">
                        Please update your income on the Profile page
                    </div>
                </div>
            </div>
        </div>
        return (
            <div id="classicformpage">
                <MDBView className>
                    <MDBMask className="overflow-auto align-items-center gradient">
                        <div className="content">
                        <MDBContainer className = "py-5">
                            {income === 0 ? message :
                            this.state.data[0].map((item, index) => {
                                return <div className="row h-25 my-5" key={index}>
                                    <div className="col">
                                    <div
                                        className="card mx-auto w-75 mean-fruit-gradient animated fadeInDown delay-1s z-depth-5">
                                        <div className="card-body d-flex align-content-center flex-wrap">
                                            <div className="progress-container mx-auto w-100">
                                                <h4  id="card-h4"> {this.state.data[1][index]}: </h4>
                                                <div className="progress mt-3">

                                                    <div
                                                        className={"progress-bar progress-bar-striped progress-bar-animated " + ((item / income) * 100 > this.goalPercents[this.state.data[1][index]] ? "bg-danger" : "bg-success")}
                                                        role="progressbar" style={{width: (item / income) * 100 +"%"}} aria-valuenow={item.amount}
                                                        aria-valuemin="0" aria-valuemax="100"/>
                                                </div>
                                                <p class = "mt-3">
                                                    You are spending {(item / income) * 100}% of your income on {this.state.data[1][index]}.
                                                    You are {Math.abs((item / income) * 100 - this.goalPercents[this.state.data[1][index]])}% {(item / income) * 100 - this.goalPercents[this.state.data[1][index]] > 0 ? "over" : "under"} the
                                                    suggested amount of {this.goalPercents[this.state.data[1][index]]}%
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            })}

                        </MDBContainer>
                        </div>
                    </MDBMask>
                </MDBView>
            </div>

        );
    }
}

export default FinancialPage;
