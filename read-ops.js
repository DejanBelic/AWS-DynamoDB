const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const DocClient = new AWS.DynamoDB.DocumentClient();

// DocClient.get({
// 	TableName: 'td_notes_sdk',
// 	Key: {
// 		user_id: 'ABC',
// 		timestamp: 1
// 	}
// }, (err, data) => {
// 	if (err) {
// 		console.log(err, 'error')
// 	}
// 	if (data) {
// 		console.log(data, 'data')
// 	}
// });


// DocClient.query({
// 	TableName: 'td_notes_sdk',
// 	KeyConditionExpression: 'user_id = :uid',
// 	ExpressionAttributeValues: {
// 		':uid': 'ABC'
// 	}
// }, (err, data) => {
// 	if (err) {
// 		console.log(err, 'error')
// 	}
// 	if (data) {
// 		console.log(data, 'data')
// 	}
// });

DocClient.scan({
	TableName: 'td_notes_sdk',
}, (err, data) => {
	if (err) {
		console.log(err, 'error')
	}
	if (data) {
		console.log(data, 'data')
	}
});
