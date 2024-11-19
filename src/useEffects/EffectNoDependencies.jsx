import React, { useEffect } from 'react';

const EffectNoDependencies = () => {
    useEffect(() => {
        console.log('Компонент монтирован!');


        return () => {
            console.log('Компонент размонтирован');
        };
    }, []);

    return <div>Базовый пример с useEffect</div>;
};

export default EffectNoDependencies;
