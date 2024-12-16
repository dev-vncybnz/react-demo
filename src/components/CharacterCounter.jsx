import { Component } from "react";

export const doSomething = () => {
    console.log("Do something");
    
}

class CharacterCounter extends Component {

    state = { characterCount: 0 };

    constructor(props) {
        super(props);
    }

    onInputChange = (e) => {
        const value = e.target.value;

        this.setState({ characterCount: value.length });
    }

    render() {
        return (
            <div>
                <h2>Character Counter</h2>

                <p>
                    <label>Enter text: </label>
                    <input type="text" name="textInput" onChange={this.onInputChange} />
                </p>

                <p>The text has {this.state.characterCount} number of characters </p>
            </div>
        );
    }

}

export default CharacterCounter;