import React from 'react';

import MessageItem from './MessageItem';

const MessagesList = ({ error, messages }) => (
	<div className="chat">
		{error && <div>{error}</div>}

		{messages.length === 0 && <div>message history is</div>}

		{messages.length > 0 && messages.map(elem => <MessageItem key={elem.id} {...elem} />)}
	</div>
);

export default MessagesList;
