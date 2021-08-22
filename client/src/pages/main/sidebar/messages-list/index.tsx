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
import {
    MessagesListComponentStyled,
    MessagesListItemStyled,
    MessagesListItemWrapperStyled,
    MessagesListItemTypographyStyled
} from './messages.style';

interface MessagesListProps {
    status: Status
    messages: MessagesListItemType[]
}

export const MessagesListComponent = ({ status, messages }: MessagesListProps): JSX.Element => {
    const renderChildren = messages.map(({
        name,
        avatar,
        'last-message': lastMessage
    }: MessagesListItemType): JSX.Element => (
        <MessagesListItemStyled key={name}>
            <Avatar
                src={avatar}
                alt={`avatar of ${name}`}
            />
            <MessagesListItemWrapperStyled>
                <MessagesListItemTypographyStyled
                    className='message-title'
                >
                    {name}
                </MessagesListItemTypographyStyled>
                <MessagesListItemTypographyStyled
                    variant='body2'
                    className='message-body'
                >
                    {lastMessage}
                </MessagesListItemTypographyStyled>
            </MessagesListItemWrapperStyled>
        </MessagesListItemStyled>
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
