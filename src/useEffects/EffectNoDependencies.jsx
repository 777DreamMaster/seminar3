import React, { useEffect } from 'react';

const EffectNoDependencies = ({ onUnmount = () => {} }) => {
    useEffect(() => {
        console.log('Компонент монтирован!');

        return () => {
            console.log('Компонент размонтирован');
            onUnmount(); // Увеличиваем счётчик при размонтировании
        };
    }, [onUnmount]);

    return <div>Базовый пример с useEffect</div>;
};

export default EffectNoDependencies;
