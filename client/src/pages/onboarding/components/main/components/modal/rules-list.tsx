import React from 'react';
import { useTranslation } from 'react-i18next';
import CheckIcon from '@material-ui/icons/Check';

import { ListStyled } from './index.style';

export const RulesList = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <ListStyled>
            <li>
                <CheckIcon />
                <span>{t('reg-rules-0-title')}</span>
                <p>{t('reg-rules-0-description')}</p>
            </li>
            <li>
                <CheckIcon />
                <span>{t('reg-rules-1-title')}</span>
                <p>{t('reg-rules-1-description')}</p>
            </li>
            <li>
                <CheckIcon />
                <span>{t('reg-rules-2-title')}</span>
                <p>{t('reg-rules-2-description')}</p>
            </li>
            <li>
                <CheckIcon />
                <span>{t('reg-rules-3-title')}</span>
                <p>{t('reg-rules-3-description')}</p>
            </li>
        </ListStyled>
    );
};
