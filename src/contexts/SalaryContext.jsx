import { Component, createContext, useState } from "react";

/*
const SalaryContext = createContext();

export class SalaryContextProvider extends Component {

    state = {
        salary: 0
    };

    setSalary = (value) => {
        this.setState({ salary: value });
    }

    render() {
        // Destructuring - extract properties from an object or array
        const { salary } = this.state;
        const { setSalary } = this;

        const data = {
            salary,
            setSalary
        };

        return (
            <SalaryContext.Provider value={data}>
                {this.props.children}
            </SalaryContext.Provider>
        );
    }

}*/

const SalaryContext = createContext();

export const SalaryContextProvider = ({ children }) => {
    const [salary, setSalary] = useState(0);

    return (
        <SalaryContext.Provider value={{ salary, setSalary }}>
            {children}
        </SalaryContext.Provider>
    );
}

export default SalaryContext;