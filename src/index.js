import axios from 'axios';
import calcResult from '../lib/calcResult.js';

export default async function getTask() {
	try {
		// fetch data from the url that gives id, operation, left, right values
		const res = await axios.get('https://interview.adpeai.com/api/v1/get-task');
		const { id, operation, left, right } = res.data;
		if (id) {
			// if id exixts run our utility function calResult to calculate result based on the type of operation
			const result = calcResult(operation, left, right);
			const data = {
				id,
				result,
			};
			// make a post request with the data
			const postResult = await axios.post(
				'https://interview.adpeai.com/api/v1/submit-task',
				data
			);
			console.log({ ...res.data, result });
			// return postResult.data;
		}
	} catch (error) {
		console.log(error.data);
	}
}

getTask();
