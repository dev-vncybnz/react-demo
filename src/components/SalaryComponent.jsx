import { Component, useContext, useState } from "react";
import SalaryContext from "../contexts/SalaryContext";

/* class SalaryComponent extends Component {

    static contextType = SalaryContext;

    state = {
        dailyRate: 0,
        noOfDays: 30
    };

    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        let value = e.target.value;

        this.setState({[e.target.name]: value });
    }

    updateSalary = () => {
        let salary = parseFloat(this.state.dailyRate * this.state.noOfDays);
        // this.props.onTransferSalary(salary);
        console.log(salary);
        this.context.setSalary(salary);
    }

    render() {
        return (
            <>
                <h2>Salary Details</h2>
                <p>
                    <label>Daily Rate</label>
                    <input type="number" name="dailyRate" onChange={this.handleChange} value={this.state.dailyRate} />
                </p>
                <p>
                    <label>No. of Days</label>
                    <input type="number" name="noOfDays" onChange={this.handleChange} value={this.state.noOfDays} />
                </p>
                <button onClick={this.updateSalary}>Calculate</button>
            </>
        );
    }

} */

    const SalaryComponent = () => {
        const salaryContext = useContext(SalaryContext);

        const [data, setData] = useState({
            dailyRate: 0,
            noOfDays: 0,
            salary: 0
        });

        const handleChange = (e) => {
            const {name, value} = e.target;
    
            setData(prev => ({...prev, [name]: value }));
        }

        const updateSalary = () => {
            let salary = parseFloat(data.dailyRate * data.noOfDays);
            salaryContext.setSalary(salary);
        }
        
        return (
            <>
                <h2>Salary Details</h2>
                <p>
                    <label>Daily Rate</label>
                    <input type="number" name="dailyRate" onChange={handleChange} value={data.dailyRate} />
                </p>
                <p>
                    <label>No. of Days</label>
                    <input type="number" name="noOfDays" onChange={handleChange} value={data.noOfDays} />
                </p>
                <button onClick={updateSalary}>Calculate</button>
            </>
        );
    };

export default SalaryComponent;