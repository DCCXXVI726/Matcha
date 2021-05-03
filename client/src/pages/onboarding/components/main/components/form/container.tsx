import React, { useMemo } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { Radio, RadioGroup, FormControlLabel, Typography } from '@material-ui/core';

import { LOADING } from '../../../../../../__data__/constants';
import { Status } from '../../../../../../__data__/types';

import { RenderTextField } from '../../../../../../components/render-text-field';

import { FormStyled, ButtonStyled } from './index.style';
import { CircularProgressStyled } from '../../../../../login/components/form/index.style';

// import { ButtonStyled, CircularProgressStyled } from '../index.style';

interface RegistrationFormComponentProps {
    handleSubmit?: (e: React.SyntheticEvent) => void
    status: Status
    genders: string[]
}

export const RegistrationFormComponent = ({
    handleSubmit,
    status,
    genders
}: RegistrationFormComponentProps): JSX.Element => {
    const { t } = useTranslation();

    // const renderChildren = useMemo(() => {
    //     genders?.map((gender) => (
    //         <FormControlLabel value={gender} control={<Radio />} label={gender} />
    //     ));
    // }, [genders]);

    return (
        <FormStyled onSubmit={handleSubmit}>
            <div>
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
                    name={'upload-image'}
                    accept='image/gif, image/jpeg, image/png'
                    type='file'
                    defaultValue='2021-05-24'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    component={RenderTextField}
                />
            </div>
            <div>
                <RadioGroup row defaultValue='' aria-label='gender' name='customized-radios'>
                    {genders?.map((gender) => (
                        <FormControlLabel key={gender} value={gender} control={<Radio />} label={gender} />
                    ))}
                </RadioGroup>
                <Field
                    name={'bday'}
                    type='date'
                    defaultValue='2021-05-24'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    component={RenderTextField}
                />
            </div>
            <div style={{ gridColumn: '1 / span 2' }}>
                <Typography>
                    {t('reg-form-none-required')}
                </Typography>
                {status === LOADING
                    ? <CircularProgressStyled />
                    : <ButtonStyled
                        type='submit'
                        variant='contained'
                        color='primary'
                    >
                        {t('continue')}
                    </ButtonStyled>
                }
            </div>
        </FormStyled>
    );
};

export const RegistrationForm = reduxForm<null, RegistrationFormComponentProps>({
    form: 'registration',
})(RegistrationFormComponent);
