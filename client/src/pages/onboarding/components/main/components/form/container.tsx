import React, { useRef } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { FormControlLabel, Radio } from '@material-ui/core';

import { LOADING } from '../../../../../../__data__/constants';
import { Status } from '../../../../../../__data__/types';

import { RenderTextField } from '../../../../../../components/render-text-field';
import { RenderRadioGroup } from '../../../../../../components/render-radio-group';

import { AdditionalFormContent } from './additional-form-content';
import { FormStyled, ButtonStyled, FormDividerStyled } from './index.style';
import { CircularProgressStyled } from '../../../../../../components/circular-progress/index.style';

const InputAndRenderUserImg = (): JSX.Element => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    const previewFile = (): void => {
        /* eslint-disable-next-line */
        /* @ts-ignore */
        const file = inputRef?.current?.files[0];
        const reader = new FileReader();

        reader.onloadend = (): void => {
            if (imgRef && imgRef.current) {
                /* eslint-disable-next-line */
                /* @ts-ignore */
                imgRef.current.src = reader.result;
            }
        };

        if (file) {
            reader.readAsDataURL(file);
        } else if (imgRef && imgRef.current) {
            imgRef.current.src = '';
        }
    };

    return (
        <>
            <input type='file' ref={inputRef} onChange={previewFile} accept='image/*' />
            <img id='lolKekId' ref={imgRef} src={''} height='200' alt='Image preview...' />
        </>
    );
};

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
                {/* <Field
                    name={'upload-image'}
                    accept='image/gif, image/jpeg, image/png'
                    type='file'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    component={RenderTextField}
                /> */}
                <InputAndRenderUserImg />
                {/* <input type='file' onChange={previewFile} /> */}
                {/* <img id='lolKekId' src='' height='200' alt='Image preview...' /> */}
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
                {/* eslint-disable-next-line */}
                {/* @ts-ignore */}
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
