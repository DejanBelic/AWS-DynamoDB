const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const DocClient = new AWS.DynamoDB.DocumentClient();


DocClient.update({
	TableName: 'td_notes_sdk',
	Key: {
		user_id: 'ABC',
		timestamp: 1
	},
		UpdateExpression: 'add #test :value',
	ExpressionAttributeNames: {
		'#test': 'test_incr',
	},
	ExpressionAttributeValues: {
		':value': 2,
	},
}, (err, data) => {
	if (err) {
		console.log(err, 'err')
	}
	if (data) {
		console.log(data, 'data')
	}
})
