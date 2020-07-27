import toJSON from 'utils/toJSON';
import { errorAction } from 'utils/action/errorAction';
import actionFactory from 'utils/action/actionFactory';
import { GET_MESSAGES, ALL_MESSAGE, ONE_MESSAGE, OPEN_WS, CLOSE_WS } from './types';

const openWS = actionFactory(OPEN_WS);
const closeWS = actionFactory(CLOSE_WS);
const oneMessage = actionFactory(ONE_MESSAGE);
const getMessages = actionFactory(GET_MESSAGES);

export const initializeWebSocket = () => dispatch => {
	const ws = new WebSocket('ws://localhost:5000');
	ws.onopen = () => {
		ws.send(
			toJSON({
				type: ALL_MESSAGE,
			}),
		);

		dispatch(openWS(ws));
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

	ws.onclose = () => {
		dispatch(closeWS());
	};
};
