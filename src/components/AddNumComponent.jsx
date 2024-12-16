/*import { Component } from "react";

class AddNumComponent extends Component {

    state = {
        first_number: 0,
        second_number: 0,
        sum: 0
    };

    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    calculateSum = () => {
        let sum = parseFloat(this.state.first_number) + parseFloat(this.state.second_number);

        this.setState({sum: sum});
    }

    render() {
        return (
            <div>
                <h2>Add Numbers</h2>

                <p>
                    <label>First Number: </label>
                    <input type="number" name="first_number" value={this.state.first_number} onChange={this.handleChange} />
                </p>

                <p>
                    <label>Second Number: </label>
                    <input type="number" name="second_number" value={this.state.second_number} onChange={this.handleChange} />
                </p>

                <p>
                    <label>Sum: {this.state.sum}</label>
                </p>

                <p>
                    <button onClick={this.calculateSum}>Calculate</button>
                </p>
            </div>
        );
    }

}

export default AddNumComponent;*/

import { useState } from "react";

const AddNumComponent = () => {

    const [first_number, setFirstNumber] = useState(0);
    const [second_number, setSecondNumber] = useState(0);
    const [sum, setSum] = useState(0);

    const [data, setData] = useState({
        first_number: 0,
        second_number: 0,
        sum: 0
    });

    const calculateSum = () => {
        let sum = parseFloat(data.first_number) + parseFloat(data.second_number);

        setData((prev) => ({...prev, sum: sum}));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev, [name]: value
        }));

        console.log(data);
    }

    return (
        <div>
            <h2>Add Numbers</h2>

            <p>
                <label>First Number: </label>
                <input type="number" name="first_number" value={data.first_number} onChange={handleChange} />
            </p>

            <p>
                <label>Second Number: </label>
                <input type="number" name="second_number" value={data.second_number} onChange={handleChange} />
            </p>

            <p>
                <label>Sum: {data.sum}</label>
            </p>

            <p>
                <button onClick={calculateSum}>Calculate</button>
            </p>
        </div>
    );
};

export default AddNumComponent;
