import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { Radio, RadioGroup, FormControlLabel, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { LOADING } from '../../../../../../__data__/constants';
import { Status, State, Interests, KeyValue } from '../../../../../../__data__/types';
import { actions, selectors } from '../../../../../../__data__';

import { RenderTextField } from '../../../../../../components/render-text-field';

import { FormStyled, ButtonStyled } from './index.style';
import { CircularProgressStyled } from '../../../../../login/components/form/index.style';
import { ChipsModal } from '../modal/interests';

interface AdditionalFormContentComponentProps {
    status: Status
    interests: KeyValue[]
}

// export const RegistrationFormComponent = ({
// }: RegistrationFormComponentProps): JSX.Element => {
const AdditionalFormContentComponent = ({
    status,
    interests
}: AdditionalFormContentComponentProps): JSX.Element => {
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
                status={status}
                interests={interests}
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

const mapStateToProps = (state: State): {
    status: Status
    interests: KeyValue[]
} => ({
    status: selectors.interests.status(state),
    interests: selectors.interests.data(state)
});

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
const mapDispatchToProps = (dispatch) => ({
});

export const AdditionalFormContent = connect(mapStateToProps, mapDispatchToProps)(AdditionalFormContentComponent);
