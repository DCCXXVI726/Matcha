import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { Radio, RadioGroup, FormControlLabel, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { LOADING } from '../../../../../../__data__/constants';
import { Status } from '../../../../../../__data__/types';

import { RenderTextField } from '../../../../../../components/render-text-field';

import { FormStyled, ButtonStyled } from './index.style';
import { CircularProgressStyled } from '../../../../../login/components/form/index.style';
import { ChipsModal } from '../modal/interests';

// interface RegistrationFormComponentProps {
// }

// export const RegistrationFormComponent = ({
// }: RegistrationFormComponentProps): JSX.Element => {
export const AdditionalFormContent = (): JSX.Element => {
    const { t } = useTranslation();
    const [openInterests, setInterestsOpen] = useState<boolean>(false);
    const [openOrientation, setOrientationOpen] = useState<boolean>(false);

    const handleInterestsClose = (): void => setInterestsOpen(false);

    const handleInterestsOpen = (): void => setInterestsOpen(true);

    const handleOrientationClose = (): void => setOrientationOpen(false);

    const handleOrientationOpen = (): void => setOrientationOpen(true);


    return (
        <>
            <Typography align='center'>
                {t('reg-form-none-required')}
            </Typography>
            <Typography>
                {t('reg-form-interests')}
            </Typography>
            <Button
                variant='contained'
                color='primary'
                startIcon={<AddIcon />}
                onClick={handleInterestsOpen}
            >
                {t('reg-form-interests-add')}
            </Button>
            <ChipsModal
                open={openInterests}
                handleClose={handleInterestsClose}
            />
            <Typography>
                {t('reg-form-sexual-orientation')}
            </Typography>
            <Button
                variant='contained'
                color='primary'
                startIcon={<AddIcon />}
            >
                {t('reg-form-sexual-orientation-add')}
            </Button>

        </>
    );
};
