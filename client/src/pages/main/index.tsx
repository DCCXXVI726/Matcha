import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export const Main = (): JSX.Element => {
    const { t } = useTranslation();
    const [data, setData] = useState<string>('');

    useEffect(() => {
        axios.get('api/ping')
            .then((response) => {
                console.log(response)
                setData(response.data.message)
            })
            .catch(function (error) {
                console.log('lox', error);
            });
    }, [data])

    return (
        <div>
            <p>{t('hello')}</p>
            <p>{data}</p>
        </div>
    );
};
