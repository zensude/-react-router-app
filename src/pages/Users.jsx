import React, { useEffect, useState } from "react";
export default function Users() {
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState("loading");
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setUsers(data);
                setStatus("success");
            } catch (err) {
                setError("Something went wrong");
                setStatus("error");
            }
        }
        fetchUsers()
    }, []);

    return (
        <div style={{ padding: 20 }} >
            <h2>Users</h2>
            {status === "loading" && <p>Loading...</p>}
            {status === "error" && <p>{error}</p>}
            {status === "success" && (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name} </li>
                    ))}
                </ul>
            )}
        </div>
    );
}