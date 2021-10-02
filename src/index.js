import axios from 'axios';
import calcResult from '../lib/calcResult.js';

export async function getTask() {
	try {
		// fetch data from the url that gives id, operation, left, right values
		const res = await axios.get('https://interview.adpeai.com/api/v1/get-task');
		return res.data;
	} catch (error) {
		console.log(error.data);
	}
}

export async function resultFinder() {
	const res = await getTask();
	const { id, operation, left, right } = res;

	if (id) {
		// if id exixts run our utility function calResult to calculate result based on the type of operation
		const result = calcResult(operation, left, right);
		const data = {
			id,
			result,
		};
		// make a post request with the data
		const postResult = await postData(data);
		console.log('Answer:', postResult);
		console.log({ ...res, result });
		return postResult;
	}
}

export async function postData(data) {
	const postResult = await axios.post(
		'https://interview.adpeai.com/api/v1/submit-task',
		data
	);
	return postResult.data;
}

resultFinder();
