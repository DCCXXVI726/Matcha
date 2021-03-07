import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export const Main = (): JSX.Element => {
    const { t } = useTranslation();
    const [data, setData] = useState<string>('');

    useEffect(() => {
        axios.get('api/ping')
            .then((response) => setData(response.data.message))
            .catch((e) => console.log(error));
    }, [data])

    return (
        <div>
            <p>{t('hello')}</p>
            <p>{data}</p>
        </div>
    );
};
