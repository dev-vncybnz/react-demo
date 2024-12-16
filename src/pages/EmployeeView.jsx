import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const EmployeeView = () => {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
        const controller = new AbortController();
        const url = `http://localhost:8000/api/employees/${id}`;
        // const token = "10|gJzhHZCD6XNL59mY3FARBOAsM8gelIKvZVVCtMvD524a12b8";
        const requestOptions = {
            signal: controller.signal,
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(json => setEmployee(json))
            .catch(err => console.log(err));

        return () => {
            controller.abort();
        }
    }, []);

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this employee?")) {
            const controller = new AbortController();
            const url = `http://localhost:8000/api/employees/${id}`;
            const token = "10|gJzhHZCD6XNL59mY3FARBOAsM8gelIKvZVVCtMvD524a12b8";
            const requestOptions = {
                signal: controller.signal,
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            };

            fetch(url, requestOptions)
                .then(response => response.json())
                .then(json => navigate("/employees"))
                .catch(err => console.log(err))
                .finally(() => {
                    controller.abort();
                });
        }
    }

    return (
        <>
            <h2>Employee Detail</h2>
            <p>
                <label>First Name: <b>{employee.first_name}</b></label>
            </p>
            <p>
                <label>Last Name: <b>{employee.last_name}</b></label>
            </p>
            <p>
                <label>Gender: <b>{employee.gender}</b></label>
            </p>
            <p>
                <label>Birth Date: <b>{employee.birth_date}</b></label>
            </p>
            <p>
                <Link to="/employees">Employee List</Link>
            </p>
            <p>
                <Link to={`/employees/${id}/edit`}>Edit Employee</Link>
            </p>
            <p>
                <button onClick={handleDelete}>Delete Employee</button>
            </p>
        </>
    );
}

export default EmployeeView;