import React, { useState, useEffect, useRef } from 'react';

const TimerEffect = ({ onUnmount = (sec) => {} }) => {
    const [seconds, setSeconds] = useState(0);

    const secondsRef = useRef(seconds); // Реф для хранения актуального значения секунд

    useEffect(() => {
        secondsRef.current = seconds; // Обновляем реф при изменении seconds
    }, [seconds]);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevCount) => prevCount + 1);
        }, 1000);

        console.log('Таймер запущен');

        return () => {
            console.log('Таймер очищен');
            clearInterval(timer);
            onUnmount(secondsRef.current); // Передаём текущее время родителю
        };
    }, [onUnmount]);

    return <div>Секунд прошло: {seconds}</div>;
};

export default TimerEffect;
