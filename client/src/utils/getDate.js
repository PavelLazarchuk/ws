const getDate = str => {
	const date = new Date(str);
	const [strDate] = str.split('T');
	const [year, month, day] = strDate.split('-');

	return `${date.getHours()}:${date.getMinutes()} ${day}-${month}-${year}`;
};

export default getDate;
