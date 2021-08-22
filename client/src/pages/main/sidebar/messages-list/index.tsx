import React from 'react';
import { connect } from 'react-redux';

import { requestStatus } from '../../../../components/request-status';
import { Status } from '../../../../__data__/constants';
import {
    MessagesList as MessagesListType,
    MessagesListItem as MessagesListItemType
} from '../../../../__data__/types/main-types';

import { selectors } from './../../../../__data__';
import { State } from './../../../../__data__/types';
import { MessagesListComponentStyled } from './messages.style';
import { MessagesListItem } from './messages-list-item';

interface MessagesListProps {
    status: Status
    messages: MessagesListItemType[]
}

export const MessagesListComponent = ({ status, messages }: MessagesListProps): JSX.Element => {
    const renderChildren = messages.map((message: MessagesListItemType) => (
        <MessagesListItem key={message.name} {...message} />
    ));

    return (
        <MessagesListComponentStyled>
            {requestStatus(renderChildren)[status]}
        </MessagesListComponentStyled>
    );
};

const mapStateToProps = (state: State): MessagesListType => ({
    status: selectors.mainPage.messagesList.status(state),
    messages: selectors.mainPage.messagesList.messagesList(state)
});

export const MessagesList = connect(mapStateToProps, null)(MessagesListComponent);
