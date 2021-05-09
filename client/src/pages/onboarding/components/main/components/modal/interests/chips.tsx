import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector, Field, FieldArray, reduxForm, FieldArrayFieldsProps } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { ChipComponent } from './chip';
import { KeyValue } from '../../../../../../../__data__/types';

import { ChipsWrapperStyled, ButtonContinueStyled } from './index.style';
import { FormInterests } from '../../form/additional-form-content';

const MAX_COUNT = 5;

interface ChipsProps {
    count: number
    interests: KeyValue[]
    handleClose: () => void
}

export const ChipsComponent = ({
    count,
    interests,
    handleClose
}: ChipsProps): JSX.Element => {
    const { t } = useTranslation();

    const isDisable = count === MAX_COUNT ? false : true;

    const ChipsArray = ({ fields }: { fields: FieldArrayFieldsProps<FormInterests> }): JSX.Element => {
        fields.length === 0 && interests.forEach(interest => {
            fields.push(interest);
        });
        return (
            <>
                {fields.map((field, index: number) => {
                    const key = fields.get(index);
                    const values = Object.keys(key)[0];
                    return (
                        <Field
                            name={`${field}.is${values}`}
                            component={ChipComponent}
                            key={values}
                            value={values}
                            label={key[values]}
                        />
                    );
                })}
            </>
        );
    };

    return (
        <>
            <ChipsWrapperStyled>
                <FieldArray
                    name='interests'
                    component={ChipsArray}
                    props={{ data: interests }}
                />

            </ChipsWrapperStyled>
            <ButtonContinueStyled
                isDisable={isDisable}
                variant='contained'
                color='secondary'
                onClick={(): boolean | void => !isDisable && handleClose()}
                disableElevation={isDisable}
                disableFocusRipple={isDisable}
                disableRipple={isDisable}
            >
                {`${t('continue')} ${count}/${MAX_COUNT}`}
            </ButtonContinueStyled>
        </>
    );
};

const ChipsContainer = reduxForm<null, ChipsProps>({
    form: 'registration',
    destroyOnUnmount: false
})(ChipsComponent);

export const Chips = connect(state => {
    const formInterests = formValueSelector('registration')(state, 'interests');
    return {
        formInterests
    };
})(ChipsContainer);
