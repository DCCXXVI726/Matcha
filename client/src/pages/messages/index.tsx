import React from 'react';
import { withRouter } from 'react-router-dom';

const MessagesCompontent = (props): JSX.Element => {
    console.log(props);
    return <div>{ }</div>;
};

export const Messages = withRouter(MessagesCompontent);
