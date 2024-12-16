import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const EmployeeCreate = () => {

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        gender: "",
        birth_date: "",
    });
    const navigate = useNavigate();
    const { token } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const onSubmit = () => {
        // const token = "10|gJzhHZCD6XNL59mY3FARBOAsM8gelIKvZVVCtMvD524a12b8";
        const url = "http://localhost:8000/api/employees";
        const requestOptions = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(json => navigate('/employees'))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Add New Employee</h2>

            <p>
                <label>First Name: </label>
                <input type="text" name="first_name" onChange={handleChange} />
            </p>
            <p>
                <label>Last Name: </label>
                <input type="text" name="last_name" onChange={handleChange} />
            </p>
            <p>
                <label>Gender: </label>
                <input type="text" name="gender" onChange={handleChange} />
            </p>
            <p>
                <label>Birth Date: </label>
                <input type="text" name="birth_date" onChange={handleChange} />
            </p>
            <button onClick={onSubmit}>Submit</button>
            <p>
                <Link to="/employees">Employee List</Link>
            </p>
        </div>
    );
};

export default EmployeeCreate;