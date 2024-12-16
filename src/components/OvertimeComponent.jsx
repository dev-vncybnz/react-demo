import { useContext, useState } from "react";
import OvertimeContext from "../contexts/OvertimeContext";

const OvertimeComponent = () => {

    const overtimeContext = useContext(OvertimeContext);

    const [data, setData] = useState({
        hourlyRate: 0,
        numOfHours: 0,
        overtime: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({ ...prev, [name]: value }));
    }

    const calculateOT = () => {
        let overtimeSalary = parseFloat(data.hourlyRate) * parseFloat(data.numOfHours);
        setData(prev => ({ ...prev, overtime: overtimeSalary }));

        overtimeContext.setOvertime(data.overtime);
    }

    return (
        <>
            <h2>Overtime Detail</h2>
            <p>
                <label>Hourly Rate: </label>
                <input type="number" name="hourlyRate" value={data.hourlyRate} onChange={handleChange} />
            </p>
            <p>
                <label>Number of Hours: </label>
                <input type="number" name="numOfHours" value={data.numOfHours} onChange={handleChange} />
            </p>
            <button onClick={calculateOT}>Calculate</button>
        </>
    );

}

export default OvertimeComponent;