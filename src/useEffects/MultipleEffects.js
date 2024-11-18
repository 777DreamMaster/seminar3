import React, { useState, useEffect } from 'react';

const MultipleEffects = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('Эффект для count: ', count);
    }, [count]); // Срабатывает только при изменении count

    useEffect(() => {
        console.log('Эффект для text: ', text);
    }, [text]); // Срабатывает только при изменении text

    useEffect(() => {
        console.log('Срабатывает и для text и для count');
    }, [count, text]); // Срабатывает только при изменении text
    // Когда в коде несколько эффектов от 1 переменной срабатывают по порядку в коде

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить Count</button>
            <br />
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите текст"
            />
        </div>
    );
};

export default MultipleEffects;
