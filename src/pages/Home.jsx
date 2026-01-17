import React, { useState } from "react";
export default function Home() {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);
    return (
        <div style={{ padding: 20 }}>
            <h2>Home Page</h2>
            <p>Count: {count}</p>
            <button onClick={decrease} >-</button>
            <button onClick={reset} style={{ margin: "0 10px" }} >Reset</button>
            <button onClick={increase} >+</button>
            {count >= 5 ? (
                <p style={{ marginTop: 20 }} >🔥 Nice! You reached 5+</p>) : (
                <p style={{ marginTop: 20 }}>Keep going…</p>
            )}
        </div>
    );
}