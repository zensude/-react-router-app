// import React, { useState } from "react";

// export default function Numbers() {
//     const numbers = [1, 2, 3, 4, 5, 6];
//     const evenNumbers = numbers.filter(num => num % 2 === 0);
//     const multiplied = evenNumbers.map(num => num * 10);
//     const total = multiplied.reduce((acc, num) => acc + num, 0)
//     const [showEvens, setShowEvens] = useState(false);
//     return (
//         <div style={{ padding: 20 }} >
//             <h2>Numbers</h2>
//             <button onClick={() => setShowEvens(!showEvens)}>{showEvens ? "Hide evens" : "Show evens"} </button>
//             {showEvens && (
//                 <>
//                     {multiplied.map((num) => (
//                         <p key={num}>{num}</p>
//                     ))}
//                     <strong>Total: {total}</strong>
//                 </>
//             )}
//         </div>
//     );
// }//daily practice
import React, { useMemo, useState } from "react";

export default function Numbers() {
    const numbers = [1, 2, 3, 4, 5, 6];

    const [onlyEvens, setOnlyEvens] = useState(true);

    // numbers değişmedikçe yeniden hesaplamasın diye useMemo
    const visibleNumbers = useMemo(() => {
        return onlyEvens ? numbers.filter((n) => n % 2 === 0) : numbers;
    }, [onlyEvens]);

    const multiplied = useMemo(() => {
        return visibleNumbers.map((n) => n * 10);
    }, [visibleNumbers]);

    const total = useMemo(() => {
        return multiplied.reduce((acc, n) => acc + n, 0);
    }, [multiplied]);

    return (
        <div style={{ padding: 20 }}>
            <h2>Numbers</h2>

            <label style={{ display: "block", marginBottom: 10 }}>
                <input
                    type="checkbox"
                    checked={onlyEvens}
                    onChange={() => setOnlyEvens(!onlyEvens)}
                />{" "}
                Only evens
            </label>

            <div>
                <strong>Shown:</strong> {JSON.stringify(visibleNumbers)}
            </div>
            <div>
                <strong>*10:</strong> {JSON.stringify(multiplied)}
            </div>
            <div style={{ marginTop: 10 }}>
                <strong>Total:</strong> {total}
            </div>
        </div>
    );
}