const program = require('./program6_1');

program(process.argv[2], process.argv[3], printList);

function printList(err, result){
	for (var i = 0; i < result.length; i++) {
		console.log(result[i]);
	}
}