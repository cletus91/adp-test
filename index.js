const axios = require('axios').default;

async function getTask() {
	try {
		const res = await axios.get('https://interview.adpeai.com/api/v1/get-task');
		const { id, operation, left, right } = res.data;
		if (id) {
			const result = calcResult(operation, left, right);
			const data = {
				id,
				result,
			};
			console.log(res.data, result);
			const postResult = await axios.post(
				'https://interview.adpeai.com/api/v1/submit-task',
				data
			);
			console.log(postResult.data);
		}
	} catch (error) {
		console.log(error.data);
	}
}

getTask();

function calcResult(operation, left, right) {
	switch (operation) {
		case 'addition':
			return left + right;
		case 'subtraction':
			return left - right;
		case 'multiplication':
			return left * right;
		case 'division':
			return left / right;
		case 'remainder':
			return left % right;
		default:
			return 'Unknown Operation';
	}
}
