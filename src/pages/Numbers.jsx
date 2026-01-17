import React, { useState } from "react";

export default function Numbers() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const multiplied = evenNumbers.map(num => num * 10);
    const total = multiplied.reduce((acc, num) => acc + num, 0)
    const [showEvens, setShowEvens] = useState(false);
    return (
        <div style={{ padding: 20 }} >
            <h2>Numbers</h2>
            <button onClick={() => setShowEvens(!showEvens)}>{showEvens ? "Hide evens" : "Show evens"} </button>
            {showEvens && (
                <>
                    {multiplied.map((num) => (
                        <p key={num}>{num}</p>
                    ))}
                    <strong>Total: {total}</strong>
                </>
            )}
        </div>
    );
}//daily practice