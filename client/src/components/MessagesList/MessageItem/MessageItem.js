import React from 'react';

import getDate from 'utils/getDate';

const MessageItem = ({ id, message, date, changed }) => {
	return (
		<div>
			<div>{message}</div>
			<div>{getDate(date)}</div>
		</div>
	);
};

export default MessageItem;
