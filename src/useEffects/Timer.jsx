import TimerEffect from "./TimerEffect";
import { useState } from "react";

const Timer = () => {
    const [showTimer, setShowTimer] = useState(false);
    const [lastTime, setLastTime] = useState(null);

    const handleUnmount = (time) => {
        setLastTime(time);
    };

    return (
        <div>
            <button onClick={() => setShowTimer((prev) => !prev)}>
                {showTimer ? 'Остановить таймер' : 'Запустить таймер'}
            </button>
            {showTimer && <TimerEffect onUnmount={handleUnmount} />}
            {lastTime !== null && <p>Таймер был остановлен на {lastTime} секундах.</p>}
        </div>
    );
};

export default Timer;
