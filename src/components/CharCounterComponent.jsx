import { useState } from "react";

const CharCounterComponent = () => {

    const [data, setData] = useState({
        text: "",
        count: 0
    });

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const onCount = () => {
        setData(prev => ({ ...prev, count: data.text.length }));
    }

    return (
        <div>
            <h2>Character Counter</h2>

            <p>
                <label>Text: </label>
                <input type="text" name="text" value={data.text} onChange={handleChange} />
            </p>

            <p>
                <label>Number of Characters: {data.count}</label>
            </p>

            <button onClick={onCount}>Count</button>
        </div>
    );

};

export default CharCounterComponent;