import React from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';

import { requestStatus } from '../../../../components/request-status';
import { Status } from '../../../../__data__/constants';
import {
    MessagesList as MessagesListType,
    MessagesListItem as MessagesListItemType
} from '../../../../__data__/types/main-types';
import { selectors } from './../../../../__data__';
import { State } from './../../../../__data__/types';

// import {
// } from './messages.style';

interface MessagesListProps {
    status: Status
    messages: MessagesListItemType[]
}

export const MessagesListComponent = ({ status, messages }: MessagesListProps): JSX.Element => {
    const renderChildren = messages.map((message): JSX.Element => (
        <div key={message.name}>
            <Avatar
                src={message.avatar}
                alt={`avatar of ${message.name}`}
            />
            <p>{message.name}</p>
            <p>{message['last-message']}</p>
        </div>
    ));
    return (
        <div>{renderChildren}</div>
    );
};

const mapStateToProps = (state: State): MessagesListType => ({
    status: selectors.mainPage.messagesList.status(state),
    messages: selectors.mainPage.messagesList.messagesList(state)
});

export const MessagesList = connect(mapStateToProps, null)(MessagesListComponent);
