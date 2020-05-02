const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const DocClient = new AWS.DynamoDB.DocumentClient();

DocClient.put({
	TableName: 'td_notes_sdk',
		Item: {
			user_id: 'ABC',
			timestamp: 1,
			title: 'New title',
			content: 'New	 content'
		},
	ConditionExpression: '#t <> :t',
	ExpressionAttributeNames: {
		'#t': 'timestamp'
	},
	ExpressionAttributeValues: {
		':t': 1
	}
}, (err, data) => {
		if (err) {
			console.log(err, 'err')
		}
		if (data) {
			console.log(data, 'data')
		}
})
