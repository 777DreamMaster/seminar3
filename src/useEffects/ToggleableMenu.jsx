import React, { useState } from 'react';
import EffectNoDependencies from "./EffectNoDependencies";

const ToggleableMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [unmountCount, setUnmountCount] = useState(0);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const handleUnmount = () => {
        setUnmountCount((prev) => prev + 1);
    };

    return (
        <div>
            <button onClick={toggleMenu}>
                {isOpen ? 'Скрыть компонент' : 'Показать компонент'}
            </button>
            {isOpen && <EffectNoDependencies onUnmount={handleUnmount} />}
            <p>Компонент был размонтирован {unmountCount} раз(а).</p>
        </div>
    );
};

export default ToggleableMenu;
