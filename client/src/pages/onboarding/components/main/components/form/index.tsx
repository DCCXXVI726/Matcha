import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { Radio, RadioGroup, FormControlLabel, Button } from '@material-ui/core';

import { LOADING } from '../../../../../../__data__/constants';
import { Status } from '../../../../../../__data__/types';

import { RenderTextField } from '../../../../../../components/render-text-field';

import { FormStyled } from '../../../../../login/index.style';
import { ButtonStyled, CircularProgressStyled } from '../../../../../login/components/form/index.style';
import { CloudUpload } from '@material-ui/icons';

// import { ButtonStyled, CircularProgressStyled } from '../index.style';

interface RegistrationFormComponentProps {
    handleSubmit?: (e: React.SyntheticEvent) => void,
}

export const RegistrationFormComponent = ({
    handleSubmit
}: RegistrationFormComponentProps): JSX.Element => {
    const { t } = useTranslation();

    return (
        <FormStyled onSubmit={handleSubmit}>
            <Field
                name={'text'}
                type={'text'}
                isRequired={true}
                minlength={0}
                maxLength={100}
                placeholder={t('reg-form-name')}
                component={RenderTextField}
            />
            <Field
                name={'email'}
                type={'email'}
                isRequired={true}
                minlength={0}
                maxLength={100}
                placeholder={t('reg-form-email')}
                component={RenderTextField}
            />
            <Field
                name={'bday'}
                type='date'
                defaultValue='2021-05-24'
                InputLabelProps={{
                    shrink: true,
                }}
                component={RenderTextField}
            />
            <RadioGroup defaultValue='' aria-label='gender' name='customized-radios'>
                <FormControlLabel value='female' control={<Radio />} label='Female' />
                <FormControlLabel value='male' control={<Radio />} label='Male' />
            </RadioGroup>
            <Button
                variant='contained'
                color='default'
                startIcon={<CloudUpload />}
            >
                Upload
            </Button>
        </FormStyled>
    );
};


export const RegistrationForm = reduxForm<null, RegistrationFormComponentProps>({
    form: 'registration',
})(RegistrationFormComponent);
