import React from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@material-ui/core';

import { MessagesListItem as MessagesListItemType } from '../../../../__data__/types/main-types';

import {
    MessagesListItemStyled,
    MessagesListItemWrapperStyled,
    MessagesListItemBodyWrapperStyled,
    MessagesListItemTypographyStyled
} from './messages.style';

export const MessagesListItem = ({
    name,
    avatar,
    'last-message': lastMessage,
    'is-last-message-your': isLastMessageYour
}: MessagesListItemType): JSX.Element => {
    const { t } = useTranslation();

    return (
        <MessagesListItemStyled>
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
                <MessagesListItemBodyWrapperStyled>
                    {isLastMessageYour && (
                        <MessagesListItemTypographyStyled
                            variant='body2'
                            className='message-owner'
                        >
                            {t('main.sidebar.messages-owner')}
                        </MessagesListItemTypographyStyled>
                    )}
                    <MessagesListItemTypographyStyled
                        variant='body2'
                        className='message-body'
                    >
                        {lastMessage}
                    </MessagesListItemTypographyStyled>
                </MessagesListItemBodyWrapperStyled>
            </MessagesListItemWrapperStyled>
        </MessagesListItemStyled>
    );
};
