import React, { useState, useEffect } from 'react';

const AsyncRequestEffect = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Пустой массив зависимостей: эффект выполнится один раз

    if (loading) return <div>Загрузка...</div>;

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    );
};

export default AsyncRequestEffect;
