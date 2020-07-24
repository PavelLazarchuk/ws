const getDate = str => {
	const [date, time] = str.split('T');
	const [year, month, day] = date.split('-');
	const [hour, minutes] = time.split(':');

	return `${minutes}:${hour} ${day}-${month}-${year}`;
};

export default getDate;
