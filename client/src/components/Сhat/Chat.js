import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MessagesList from '../MessagesList';
import { initializeWebSocket } from 'store/message/actions';

const Chat = ({ error, messages, initializeWebSocket }) => {
	useEffect(() => {
		initializeWebSocket();
	}, [initializeWebSocket]);

	return <MessagesList error={error} messages={messages} />;
};

const mstp = ({ message }) => ({
	error: message.error,
	messages: message.messages,
});

const mdtp = {
	initializeWebSocket,
};

export default connect(mstp, mdtp)(Chat);
