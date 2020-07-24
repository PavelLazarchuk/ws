import toJSON from 'utils/toJSON';
import { errorAction } from 'utils/action/errorAction';
import actionFactory from 'utils/action/actionFactory';
import { GET_MESSAGES, ALL_MESSAGE, ONE_MESSAGE } from './types';

const oneMessage = actionFactory(ONE_MESSAGE);
const getMessages = actionFactory(GET_MESSAGES);

const ws = new WebSocket('ws://localhost:5000');

export const initializeWebSocket = () => dispatch => {
	ws.onopen = e => {
		ws.send(
			toJSON({
				type: ALL_MESSAGE,
				message: e.type,
			}),
		);
	};

	ws.onmessage = message => {
		const data = JSON.parse(message.data);

		if (data.type === ALL_MESSAGE) {
			dispatch(getMessages(data.data));
		} else if (data.type === ONE_MESSAGE) {
			dispatch(oneMessage(data.data));
		}
	};

	ws.onerror = error => {
		dispatch(errorAction(error.message));
	};
};

export const addMessage = message => {
	ws.send(
		toJSON({
			message,
			type: 'NEW_MESSAGE',
		}),
	);
};

export const updateMessage = (id, message) => {
	ws.send(
		toJSON({
			type: 'CHANGE_MESSAGE',
			message: {
				id,
				message,
			},
		}),
	);
};

export const deleteMessage = id => {
	ws.send(
		toJSON({
			type: 'DELETE_MESSAGE',
			message: {
				id,
			},
		}),
	);
};
