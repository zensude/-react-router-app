import React, { useEffect, useState } from "react";
export default function Users() {
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState("loading");
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

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
    const normalize = (text) => text.trim().toLowerCase();
    const sortByName = (list, order) => {
        return [...list].sort((a, b) => {
            if (order === "asc") return a.name.localeCompare(b.name);
            return b.name.localeCompare(a.name);
        });
    };
    const normalizedSearch = normalize(searchTerm);
    const filteredUsers = users.filter((user) =>
        user.name.includes(normalizedSearch)
    );
    const sortedUsers = sortByName(filteredUsers, sortOrder);


    return (
        <div style={{ padding: 20 }} >
            <h2>Users</h2>
            <p style={{ marginBottom: 8 }}>Search by name</p>
            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                style={{ marginLeft: 10 }}
            >
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
            {status === "loading" && <p>Loading...</p>}
            {status === "error" && <p>{error}</p>}
            {status === "success" && (
                sortedUsers.length === 0 ? (
                    <p style={{ marginTop: 12 }}>No users found.</p>
                ) : (
                    <ul>
                        {sortedUsers.map((user) => (
                            <li key={user.id}><strong>{user.name} </strong> - {user.email} </li>
                        ))}
                    </ul>)
            )}
        </div>
    );
}