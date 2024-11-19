import React, { useState, useEffect } from 'react';

const TimerEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        console.log('Таймер запущен');

        return () => {
            clearInterval(timer);
            console.log('Таймер очищен');
        };
    }, []); // Эффект запускается один раз

    return <div>Секунд прошло: {count}</div>;
};

export default TimerEffect;
