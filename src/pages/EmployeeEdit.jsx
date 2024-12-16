import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const EmployeeEdit = () => {
    
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        gender: "",
        birth_date: "",
    });
    const { id } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
        // const token = "10|gJzhHZCD6XNL59mY3FARBOAsM8gelIKvZVVCtMvD524a12b8";
        const url = `http://localhost:8000/api/employees/${id}`;
        const requestOptions = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(err => console.log(err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({...prev, [name]: value}));
    };

    const onUpdate = () => {
        const token = "10|gJzhHZCD6XNL59mY3FARBOAsM8gelIKvZVVCtMvD524a12b8";
        const url = `http://localhost:8000/api/employees/${id}`;
        const requestOptions = {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(json => navigate(`/employees/${id}`))
            .catch(err => console.log(err));
    }

    return (
        <>
            <h2>Edit Employee</h2>

            <p>
                <label>First Name: </label>
                <input type="text" name="first_name" value={data.first_name} onChange={handleChange} />
            </p>
            <p>
                <label>Last Name: </label>
                <input type="text" name="last_name" value={data.last_name} onChange={handleChange} />
            </p>
            <p>
                <label>Gender: </label>
                <input type="text" name="gender" value={data.gender} onChange={handleChange} />
            </p>
            <p>
                <label>Birth Date: </label>
                <input type="text" name="birth_date" value={data.birth_date} onChange={handleChange} />
            </p>
            <button onClick={onUpdate}>Update</button>
            <p>
                <Link to="/employees">Employee List</Link>
            </p>
        </>
    );
}

export default EmployeeEdit;