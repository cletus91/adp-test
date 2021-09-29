import axios from 'axios';
import calcResult from '../lib/calcResult.js';

export default async function getTask() {
	try {
		const res = await axios.get('https://interview.adpeai.com/api/v1/get-task');
		const { id, operation, left, right } = res.data;
		if (id) {
			const result = calcResult(operation, left, right);
			const data = {
				id,
				result,
			};
			console.log({ ...res.data, result });
			const postResult = await axios.post(
				'https://interview.adpeai.com/api/v1/submit-task',
				data
			);
			// console.log(postResult.data);
			return postResult.data;
		}
	} catch (error) {
		console.log(error.data);
	}
}

getTask();
