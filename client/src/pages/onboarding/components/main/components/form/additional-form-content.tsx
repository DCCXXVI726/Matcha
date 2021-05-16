import React, { Suspense, useState } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import {
    Status,
    State,
    KeyValue
} from '../../../../../../__data__/types';
import { selectors } from '../../../../../../__data__';

const ChipsModal = React.lazy(() => import(/* webpackChunkName: "chips-modal" */ '../modal/interests').then(module => ({ default: module.ChipsModal })));
const OrientationModal = React.lazy(() => import(/* webpackChunkName: "orientation-modal" */ '../modal/orientation').then(module => ({ default: module.OrientationModal })));

import { SplitterStyled } from './index.style';
import { RenderChips } from '../utils/render-chips';

export interface FormInterests {
    [key: string]: string | boolean
}

const selectedItems = (items: FormInterests[]): FormInterests[] => items?.filter((item) => {
    const keys = Object.keys(item);
    return keys.length > 1 && item[keys[1]] === true;
});

interface AdditionalFormContentComponentProps {
    statusInterests: Status
    interests: KeyValue[]
    statusOrientations: Status
    orientations: KeyValue[]
    formInterests: FormInterests[]
    formOrientations: FormInterests[]
}

const AdditionalFormContentComponent = ({
    statusInterests,
    interests,
    statusOrientations,
    orientations,
    formInterests,
    formOrientations
}: AdditionalFormContentComponentProps): JSX.Element => {
    const { t } = useTranslation();
    const [openInterests, setInterestsOpen] = useState<boolean>(false);
    const [openOrientation, setOrientationOpen] = useState<boolean>(false);

    const handleInterestsClose = (): void => setInterestsOpen(false);
    const handleInterestsOpen = (): void => setInterestsOpen(true);

    const handleOrientationClose = (): void => setOrientationOpen(false);
    const handleOrientationOpen = (): void => setOrientationOpen(true);

    const selectedInterests = selectedItems(formInterests);
    const selectedOrientations = selectedItems(formOrientations);

    return (
        <>
            <Typography align='center'>
                {t('reg-form-none-required')}
            </Typography>
            <SplitterStyled>
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
                <RenderChips
                    selectedItems={selectedInterests}
                />
                <Suspense fallback='...'>
                    <ChipsModal
                        open={openInterests}
                        count={selectedInterests?.length || 0}
                        status={statusInterests}
                        interests={interests}
                        handleClose={handleInterestsClose}
                    />
                </Suspense>
            </SplitterStyled>
            <SplitterStyled>
                <Typography>
                    {t('reg-form-sexual-orientation')}
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                    startIcon={<AddIcon />}
                    onClick={handleOrientationOpen}
                >
                    {t('reg-form-sexual-orientation-add')}
                </Button>
                <RenderChips
                    selectedItems={selectedOrientations}
                />
                <Suspense fallback='...'>
                    <OrientationModal
                        open={openOrientation}
                        count={selectedOrientations?.length || 0}
                        status={statusOrientations}
                        orientations={orientations}
                        handleClose={handleOrientationClose}
                    />
                </Suspense>
            </SplitterStyled>
        </>
    );
};

const mapStateToProps = (state: State): {
    statusInterests: Status
    interests: KeyValue[]
    statusOrientations: Status
    orientations: KeyValue[]
    formInterests: FormInterests[]
    formOrientations: FormInterests[]
} => ({
    statusInterests: selectors.regPage.interests.status(state),
    interests: selectors.regPage.interests.data(state),
    statusOrientations: selectors.regPage.orientations.status(state),
    orientations: selectors.regPage.orientations.data(state),
    formInterests: formValueSelector('registration')(state, 'interests'),
    formOrientations: formValueSelector('registration')(state, 'orientations')
});

export const AdditionalFormContent = connect(mapStateToProps, null)(AdditionalFormContentComponent);
