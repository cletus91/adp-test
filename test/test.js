import assert from 'assert';
import { getTask, postData } from '../src/index.js';
import calcResult from '../lib/calcResult.js';

describe('test the result', function () {
	it('should return correct answer', async function () {
		const rest = await getTask();
		const { id, operation, left, right } = rest;

		if (id) {
			const result = calcResult(operation, left, right);
			const data = {
				id,
				result,
			};

			const postResult = await postData(data);
			assert.equal(postResult, 'Correct');
		}
	});
});
