import { ERROR } from 'utils/action/errorAction';
import { GET_MESSAGES, ONE_MESSAGE, OPEN_WS, CLOSE_WS } from './types';

const initialState = {
	error: null,
	messages: [],
	socket: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case OPEN_WS:
			return {
				...state,
				error: null,
				socket: action.payload,
			};

		case CLOSE_WS:
			return {
				...state,
				error: null,
				socket: null,
			};

		case ONE_MESSAGE:
			return {
				...state,
				error: null,
				messages: [...state.messages, action.payload],
			};

		case GET_MESSAGES:
			return {
				...state,
				error: null,
				messages: action.payload,
			};

		case ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
