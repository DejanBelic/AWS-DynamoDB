const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const DocClient = new AWS.DynamoDB.DocumentClient();

// DocClient.put({
// 	TableName: 'td_notes_sdk',
// 	Item: {
// 		user_id: 'dd',
// 		timestamp: 2,
// 		title: 'my title',
// 		content: 'my content'
// 	}
// }, (err, data) => {
// 		if (err) {
// 			console.log(err, 'error')
// 		}
// 		if (data) {
// 			console.log(data, 'data')
// 		}
// });

// DocClient.update({
// 	TableName: 'td_notes_sdk',
// 	Key: {
// 		user_id: 'bb',
// 		timestamp: 1
// 	},
// 	UpdateExpression: 'set #t = :t',
// 	ExpressionAttributeNames: {
// 		'#t': 'title'
// 	},
// 	ExpressionAttributeValues: {
// 		':t': 'Nov title'
// 	}
// }, (err, data) => {
// 	if (err) {
// 		console.log(err, 'error')
// 	}
// 	if (data) {
// 		console.log(data, 'data')
// 	}
// });

// DocClient.get({
// 	TableName: 'td_notes_sdk',
// 	Key: {
// 		user_id: 'bb',
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

DocClient.batchWrite({
	RequestItems: {
		'td_notes_sdk': [
			{
				DeleteRequest: {
					Key: {
						user_id: 'bb',
						timestamp: 2
					}
				},
			},
			{
				PutRequest: {
					Item: {
						user_id: 'bbb',
						title: 'title cc',
						timestamp: 22,
						content: 'content cc'
					},
				},
			},{
					PutRequest: {
						Item: {
							user_id: 'md',
							title: 'title md',
							timestamp: 222,
							content: 'content md'
						},
					}
				}
		]
	}
}, (err, data) => {
	if (err) {
		console.log(err, 'error')
	}
	if (data) {
		console.log(data, 'data')
	}
});
