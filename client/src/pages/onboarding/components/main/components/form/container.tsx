import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { FormControlLabel, Radio } from '@material-ui/core';

import { State, Status } from '../../../../../../__data__/types';
import { RenderTextField } from '../../../../../../components/redux-form-components/text-field';
import { RenderRadioGroup } from '../../../../../../components/redux-form-components/radio-group';
import { RenderFileInput } from '../../../../../../components/redux-form-components/file-input';
import { requestStatus } from '../../../../../../components/request-status';

import { AdditionalFormContent } from './additional-form-content';
import {
    FormStyled,
    ButtonStyled,
    FormDividerStyled,
    ImageStyled,
    FormDividerWrapperStyled
} from './index.style';

const IMAGE_HEIGHT = 200;

interface RegistrationFormComponentProps {
    handleSubmit?: (e: React.SyntheticEvent) => void
    formUserAvatar: string
    status: Status
    genders: string[]
}

export const RegistrationFormComponent = ({
    handleSubmit,
    formUserAvatar,
    status,
    genders
}: RegistrationFormComponentProps): JSX.Element => {
    const { t } = useTranslation();
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        imgRef.current.src = formUserAvatar || '';
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        imgRef.current.height = formUserAvatar ? IMAGE_HEIGHT : 0;
    }, [formUserAvatar]);

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
                    name='username'
                    type='text'
                    isRequired
                    minlength={0}
                    maxLength={100}
                    placeholder={t('reg-form-name')}
                    component={RenderTextField}
                />
                <Field
                    name='email'
                    type='email'
                    isRequired
                    minlength={0}
                    maxLength={100}
                    placeholder={t('reg-form-email')}
                    component={RenderTextField}
                />
                <Field
                    name='user-avatar'
                    type='file'
                    isRequired
                    component={RenderFileInput}
                />
                <ImageStyled ref={imgRef} src='' alt='' />
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
                                label={gender[values]}
                            />
                        );
                    })}
                </Field>
                <Field
                    name='bday'
                    type='date'
                    defaultValue='2021-05-24'
                    max='2022-12-31'
                    InputLabelProps={{
                        shrink: true
                    }}
                    component={RenderTextField}
                />
            </div>
            <FormDividerStyled>
                <AdditionalFormContent />
                <FormDividerWrapperStyled>
                    {requestStatus(submitButton)[status]}
                </FormDividerWrapperStyled>
            </FormDividerStyled>
        </FormStyled>
    );
};

const mapStateToProps = (state: State): { formUserAvatar: string } => ({
    formUserAvatar: formValueSelector('registration')(state, 'user-avatar')
});

const RegistrationFormContainer = reduxForm<null, RegistrationFormComponentProps>({
    form: 'registration'
})(RegistrationFormComponent);

export const RegistrationForm = connect(mapStateToProps, null)(RegistrationFormContainer);
