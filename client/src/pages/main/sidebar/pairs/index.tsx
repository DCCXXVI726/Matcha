import React from 'react';
import { connect } from 'react-redux';

import { requestStatus } from '../../../../components/request-status';
import { Status } from '../../../../__data__/constants';
import { Pair, Pairs as PairsType } from '../../../../__data__/types/main-types';
import { InfoBlock } from '../info-block';

import { selectors } from './../../../../__data__';
import { State } from './../../../../__data__/types';
import { PairsList } from './pairs-list';
import { PairsListStyled } from './pairs.style';

interface PairsComponentProps {
    status: Status
    pairs: Pair[]
}

export const PairsComponent = ({ status, pairs }: PairsComponentProps): JSX.Element => {
    const renderChildren = pairs.map((pair): JSX.Element => <PairsList key={pair.name} {...pair} />);

    return (
        <PairsListStyled>
            {requestStatus(renderChildren)[status]}
            {pairs.length === 0 && <InfoBlock />}
        </PairsListStyled>
    );
};

const mapStateToProps = (state: State): PairsType => ({
    status: selectors.mainPage.pairs.status(state),
    pairs: selectors.mainPage.pairs.pair(state)
});

export const Pairs = connect(mapStateToProps, null)(PairsComponent);
