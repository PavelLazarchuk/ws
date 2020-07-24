import toJSON from 'utils/toJSON';
import { GET_MESSAGES, ALL_MESSAGE } from './types';
import actionFactory from 'utils/action/actionFactory';

export const getMessages = actionFactory(GET_MESSAGES);

export const getAllMessages = () => dispatch => {
	const ws = new WebSocket('ws://localhost:5000');

	ws.onopen = () => {
		ws.send(
			toJSON({
				type: ALL_MESSAGE,
			}),
		);
	};

	ws.onmessage = message => {
		const data = JSON.parse(message.data);

		if (data.type === ALL_MESSAGE) {
			dispatch(getMessages(data.data));
		}
	};
};
