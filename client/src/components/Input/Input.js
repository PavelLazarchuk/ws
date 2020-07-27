import React from 'react';

import Button from 'shared/Button';

const Input = ({ id, text, setText, addMessage, updateMessage }) => (
	<div style={{ textAlign: 'center' }}>
		<input value={text} onChange={e => setText(e.target.value)} />
		{id ? (
			<Button onClick={updateMessage} text="Edit" />
		) : (
			<Button onClick={addMessage} text="Send" />
		)}
	</div>
);

export default Input;
