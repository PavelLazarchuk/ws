import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MessagesList from '../MessagesList';
import { getAllMessages } from 'store/message/actions';

const Chat = ({ messages, getAllMessages }) => {
	useEffect(() => {
		getAllMessages();
	}, [getAllMessages]);

	return <MessagesList messages={messages} />;
};

const mstp = ({ message }) => ({
	messages: message.messages,
});

const mdtp = {
	getAllMessages,
};

export default connect(mstp, mdtp)(Chat);
