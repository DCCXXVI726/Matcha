import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { FormControlLabel, Radio } from '@material-ui/core';

import { Status } from '../../../../../../__data__/types';

import { RenderTextField } from '../../../../../../components/render-text-field';
import { RenderRadioGroup } from '../../../../../../components/render-radio-group';

import { AdditionalFormContent } from './additional-form-content';
import { FormStyled, ButtonStyled, FormDividerStyled } from './index.style';
import { requestStatus } from '../../../../../../components/request-status';

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

    const submitButton = (
        <ButtonStyled
            type='submit'
            variant='contained'
            color='primary'
        >
            {t('auth-button')}
        </ButtonStyled>
    );

    return (
        <FormStyled onSubmit={handleSubmit}>
            <div>
                <Field
                    name={'username'}
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
                    InputLabelProps={{
                        shrink: true,
                    }}
                    component={RenderTextField}
                />
            </div>
            <div>
                <Field
                    row
                    defaultValue=''
                    aria-label='gender'
                    name='gender'
                    component={RenderRadioGroup}
                >
                    {genders?.map((gender) => {
                        const values = Object.keys(gender)[0];
                        return (
                            <FormControlLabel
                                key={gender}
                                value={values}
                                control={<Radio />}
                                /* eslint-disable-next-line */
                                /* @ts-ignore */
                                label={gender[values]}
                            />
                        );
                    })}
                </Field>
                <Field
                    name={'bday'}
                    type='date'
                    defaultValue='2021-05-24'
                    max='2022-12-31'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    component={RenderTextField}
                />
            </div>
            <FormDividerStyled>
                <AdditionalFormContent />
                {requestStatus(submitButton)[status]}
            </FormDividerStyled>
        </FormStyled>
    );
};

export const RegistrationForm = reduxForm<null, RegistrationFormComponentProps>({
    form: 'registration',
})(RegistrationFormComponent);
