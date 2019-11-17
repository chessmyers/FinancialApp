import React, {Component} from 'react';
import '../index.css';
import {
    MDBContainer,
    MDBMask,
    MDBView
} from "mdbreact";

// This page can show past purchases or percentages
class FinancialPage extends Component {

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
                {
                    category: "Housing",
                    percentageOfTotal: 25
                },
                {
                    category: "Transportation",
                    percentageOfTotal: 30
                },
                {
                    category: "Food",
                    percentageOfTotal: 10
                },
                {
                    category: "Personal",
                    percentageOfTotal: 35
                }
            ]
        }
    }


    componentDidMount() {
        this.grabFinancialData();
    }

    grabFinancialData = () => {
        fetch('http://localhost:5000/finances').then(out => {
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
                <MDBView className>
                    <MDBMask className="overflow-auto align-items-center gradient">
                        <div className="content">
                        <MDBContainer className = "py-5">
                            {this.state.data.map((item, index) => {
                                return <div className="row h-25 my-5" key={index}>
                                    <div className="col">
                                    <div
                                        className="card mx-auto w-75 mean-fruit-gradient animated fadeInDown delay-1s z-depth-5">
                                        <div className="card-body d-flex align-content-center flex-wrap">
                                            <div className="progress-container mx-auto w-100">
                                                <h4  id="card-h4"> {item.category}: </h4>
                                                <div className="progress mt-3">

                                                    <div
                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                                        role="progressbar" style={{width: item.percentageOfTotal +"%"}} aria-valuenow={item.percentageOfTotal}
                                                        aria-valuemin="0" aria-valuemax="100"/>

                                                </div>
                                                <p class = "mt-3">
                                                    You are spending {item.percentageOfTotal}% of your income on {item.category}.
                                                    You are {Math.abs(item.percentageOfTotal - this.goalPercents[item.category])}% {item.percentageOfTotal - this.goalPercents[item.category] > 0 ? "over" : "under"} the
                                                    suggested amount of {this.goalPercents[item.category]}%
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
