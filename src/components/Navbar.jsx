// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//     return (
//         <nav style={{ display: "flex", gap: "12px", padding: "10px" }}>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/contact">Contact</Link>
//             <Link to="/numbers">Numbers</Link>
//             <Link to="/users">Users</Link>
//         </nav>
//     );
// }
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkStyle = ({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "white" : "black",
        backgroundColor: isActive ? "black" : "transparent",
        padding: "6px 10px",
        borderRadius: "6px",
    });

    return (
        <nav style={{ display: "flex", gap: "12px", padding: "10px" }}>
            <NavLink to="/" style={linkStyle}>Home</NavLink>
            <NavLink to="/about" style={linkStyle}>About</NavLink>
            <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
            <NavLink to="/numbers" style={linkStyle}>Numbers</NavLink>
            <NavLink to="/users" style={linkStyle}>Users</NavLink>
        </nav>
    );
}