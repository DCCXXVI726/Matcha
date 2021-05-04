import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { Radio, RadioGroup, FormControlLabel, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { LOADING } from '../../../../../../__data__/constants';
import { Status } from '../../../../../../__data__/types';

import { RenderTextField } from '../../../../../../components/render-text-field';

import { AdditionalFormContent } from './additional-form-content';
import { FormStyled, ButtonStyled, FormDividerStyled } from './index.style';
import { CircularProgressStyled } from '../../../../../login/components/form/index.style';

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
                <RadioGroup //TODO: add to redux form
                    row
                    defaultValue=''
                    aria-label='gender'
                    name='customized-radios'
                >
                    {genders?.map((gender) => {
                        const values = Object.keys(gender)[0];
                        return (
                            <FormControlLabel
                                key={gender}
                                value={values}
                                control={<Radio />}
                                // eslint-disable-next-line
                                // @ts-ignore
                                label={gender[values]}
                            />
                        );
                    }

                    )}
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
            <FormDividerStyled>
                <AdditionalFormContent />

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
            </FormDividerStyled>
        </FormStyled>
    );
};

export const RegistrationForm = reduxForm<null, RegistrationFormComponentProps>({
    form: 'registration',
})(RegistrationFormComponent);
