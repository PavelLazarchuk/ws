import React from 'react';

import toJSON from 'utils/toJSON';
import getDate from 'utils/getDate';

const MessageItem = ({ _id, text, date, changed, socket, setId, setText }) => {
	const changeMessage = () => {
		setId(_id);
		setText(text);
	};

	const deleteMessage = () => {
		socket.send(
			toJSON({
				type: 'DELETE_MESSAGE',
				message: {
					_id,
				},
			}),
		);
	};

	return (
		<div className="chat-message">
			<div>{text}</div>
			<div>
				<button onClick={changeMessage}>edit</button>
				<button onClick={deleteMessage}>delete</button>
				<div>
					{changed && <span>edited</span>} {getDate(date)}
				</div>
			</div>
		</div>
	);
};

export default MessageItem;
