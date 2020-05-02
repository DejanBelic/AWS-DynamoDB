const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const dynamodb = new AWS.DynamoDB();
const params = {};
dynamodb.listTables(params, (err, data) => {
	if (err) {
		console.log(err, 'err')
	} else {
		console.log(data, 'data')
	}
});

// dynamodb.describeTable({
// 	TableName: 'td_notes'
// }, (err, data) => {
// 	if (err) {
// 		console.log(err, 'err')
// 	} else {
// 		console.log(data, 'data')
// 	}
// });

//
// dynamodb.createTable({
// 	TableName: 'td_notes_sdk',
// 	AttributeDefinitions: [
// 		{
// 			AttributeName: 'user_id',
// 			AttributeType: 'S'
// 		},
// 		{
// 			AttributeName: 'timestamp',
// 			AttributeType: 'N'
// 		},
// 	],
// 	KeySchema: [
// 		{
// 			AttributeName: 'user_id',
// 			KeyType: 'HASH'
// 		},
// 		{
// 			AttributeName: 'timestamp',
// 			KeyType: 'RANGE'
// 		}
// 	],
// 	ProvisionedThroughput: {
// 		ReadCapacityUnits: 1,
// 		WriteCapacityUnits: 1
// 	}
// }, (err, data) => {
// 	if (err) {
// 		console.log(err, 'err')
// 	} else {
// 		console.log(data, 'data')
// 	}
// });

