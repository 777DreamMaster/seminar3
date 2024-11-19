import React, { useState, useEffect } from 'react';

const EffectNoDepArray = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('Произошел ререндер компонента!');
    }); // Без массива зависимостей

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите текст"
            />
        </div>
    );
};

export default EffectNoDepArray;
