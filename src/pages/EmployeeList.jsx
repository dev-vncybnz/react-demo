import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const { token } = useAuth();

    useEffect(() => {
        const controller = new AbortController();
        
        const url = "http://localhost:8000/api/employees?page=1&per_page=5";
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

        setLoading(true);
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(json => {
                setEmployees(json.data);
                setLoading(false);

            })
            .catch(err => console.log(err));

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <>
            <Link to="/employees/create">Add New Employee</Link>
            <h2>Employee List</h2>

            {
                loading ? (<h3>Loading...</h3>) : (
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>Birth Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (
                                <tr key={employee.id}>
                                    <td>{employee.first_name}</td>
                                    <td>{employee.last_name}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.birth_date}</td>
                                    <td>
                                        <Link to={`/employees/${employee.id}`}>View</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Link to={`/employees/${employee.id}/edit`}>Edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </>
    );

}

export default EmployeeList;