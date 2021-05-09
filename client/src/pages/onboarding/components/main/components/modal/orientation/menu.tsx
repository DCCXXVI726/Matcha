import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { formValueSelector, Field, FieldArray, reduxForm, FieldArrayFieldsProps } from 'redux-form';

import { KeyValue } from '../../../../../../../__data__/types';
import { FormInterests } from '../../form/additional-form-content';
import { ButtonContinueStyled } from '../interests/index.style';
import { MenuListStyled } from './index.style';

import { MenuItem } from './menu-item';

const MAX_COUNT = 3;

interface ListComponentProps {
    count: number
    orientations: KeyValue[]
    handleClose: () => void
}

export const ListComponent = ({
    count,
    orientations,
    handleClose
}: ListComponentProps): JSX.Element => {
    const { t } = useTranslation();

    const isDisable = count === MAX_COUNT ? false : true;

    const MenuArray = ({ fields }: { fields: FieldArrayFieldsProps<FormInterests> }): JSX.Element => {
        fields.length === 0 && orientations.forEach(item => {
            fields.push(item);
        });
        return (
            <>
                {fields.map((field, index: number) => {
                    const key = fields.get(index);
                    const values = Object.keys(key)[0];
                    return (
                        <Field
                            name={`${field}.is${values}`}
                            component={MenuItem}
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
            <MenuListStyled>
                <FieldArray
                    name='orientations'
                    component={MenuArray}
                    props={{ data: orientations }}
                />
            </MenuListStyled>
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

const ListContainer = reduxForm<null, ListComponentProps>({
    form: 'registration',
    destroyOnUnmount: false
})(ListComponent);

export const List = connect(state => {
    const formInterests = formValueSelector('registration')(state, 'orientations');
    return {
        formInterests
    };
})(ListContainer);
