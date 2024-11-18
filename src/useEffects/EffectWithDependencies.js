import React, { useState, useEffect } from 'react';

const EffectWithDependencies = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Текущее значение count: ${count}`);
        // Выполняется при изменении count

        return () => {
            console.log(`Очистка после count: ${count}`);
        };
    }, [count]); // Зависимость - count

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить Count</button>
        </div>
    );
};

export default EffectWithDependencies;
