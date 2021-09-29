export default function calcResult(operation, left, right) {
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
