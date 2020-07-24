import React from 'react';

// import MessageItem from './MessageItem';

const MessagesList = ({ messages }) => {
	return (
		<div className="chat">
			{(!messages || messages.length === 0) && <div>message history is clean</div>}

			{messages && messages.length > 0 && <div>MessageItem</div>}
			<div></div>
		</div>
	);
};

export default MessagesList;
