import React, { useState } from 'react';
import { connect } from 'react-redux';

import Input from '../Input';
import toJSON from 'utils/toJSON';
import MessageItem from './MessageItem';

const MessagesList = ({ error, messages, socket }) => {
	const [id, setId] = useState(null);
	const [text, setText] = useState('');

	const add = () => {
		socket.send(
			toJSON({
				message: text,
				type: 'NEW_MESSAGE',
			}),
		);
		setText('');
	};

	const update = () => {
		socket.send(
			toJSON({
				type: 'CHANGE_MESSAGE',
				message: {
					_id: id,
					text,
				},
			}),
		);
		setId(null);
		setText('');
	};

	return (
		<>
			<div className="chat">
				{error && <div>{error}</div>}

				{messages.length === 0 && <div>Message history is clear</div>}

				{messages.length > 0 &&
					messages.map(elem => (
						<MessageItem key={elem._id} socket={socket} setId={setId} setText={setText} {...elem} />
					))}
			</div>
			<Input id={id} text={text} setText={setText} addMessage={add} updateMessage={update} />
		</>
	);
};

const mstp = ({ message }) => ({
	socket: message.socket,
});

export default connect(mstp)(MessagesList);
