import React, { Component, useState } from "react";
import SalaryComponent from "./SalaryComponent";
import SalaryContext from "../contexts/SalaryContext";
import OvertimeComponent from "./OvertimeComponent";
import OvertimeContext from "../contexts/OvertimeContext";

{/*
class EmployeeComponent extends Component {

    state = {
        salary: 0,
        overtime: 0
    };

    constructor(props) {
        super(props);
    }

    getSalary = (value) => {
        this.setState({salary: value});
    } 

    getOvertime = (value) => {
        this.setState({overtime: value});
    } 

    render() {
        return (
            <div>
                <h2>Employee Profile</h2>

                <p>
                    <label>Employee Id: <b>{ this.props.Id }</b></label>
                </p>
                <p>
                    <label>Employee First Name: <b>{ this.props.firstName }</b></label>
                </p>
                <p>
                    <label>Employee Last Name: <b>{ this.props.lastName }</b></label>
                </p>
                <p>
                    <label>Employee Age: <b>{ this.props.age }</b></label>
                </p>
                <p>
                    <label>Salary is: <b>{ this.props.salary.salary }</b></label>
                </p>
                <p>
                    <label>Overtime amount is <b>{this.props.overtime.overtime}</b></label>
                </p>
                <p>
                    <label>Gross Pay is: <b>{this.props.overtime.overtime + this.props.salary.salary}</b></label>
                </p>

                <SalaryComponent onTransferSalary={this.getSalary} /> 
                <OvertimeComponent onTransferOvertime={this.getOvertime} /> 
            </div>
        );
    }

}
*/}

const EmployeeComponent = (props) => {
    const {
        Id,
        firstName,
        lastName,
        age
    } = props;
    const { salary } = props.salaryProvider;
    const { overtime } = props.overtimeProvider;

    return (
        <div>
            <h2>Employee Profile</h2>

            <p>
                <label>Employee Id: <b>{Id}</b></label>
            </p>
            <p>
                <label>Employee First Name: <b>{firstName}</b></label>
            </p>
            <p>
                <label>Employee Last Name: <b>{lastName}</b></label>
            </p>
            <p>
                <label>Employee Age: <b>{age}</b></label>
            </p>
            <p>
                <label>Salary is: <b>{salary}</b></label>
            </p>
            <p>
                <label>Overtime amount is <b>{overtime}</b></label>
            </p>
            <p>
                <label>Gross Pay is: <b>{overtime + salary}</b></label>
            </p>
        </div>
    );
}

export default EmployeeComponent;