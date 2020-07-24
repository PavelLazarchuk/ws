import { GET_MESSAGES } from './types';

const initialState = {
	messages: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_MESSAGES:
			return {
				...state,
				messages: action.payload,
			};

		default:
			return state;
	}
};
