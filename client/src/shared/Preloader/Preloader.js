import React from 'react';

import style from './style.module.css';

const Preloader = ({ size }) => (
	<div className={size ? style.small : style.preload}>
		<div className={style.loader}></div>
	</div>
);

export default Preloader;
