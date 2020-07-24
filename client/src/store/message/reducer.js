import { GET_MESSAGES, ONE_MESSAGE } from './types';
import { ERROR } from 'utils/action/errorAction';

const initialState = {
	error: null,
	messages: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
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
