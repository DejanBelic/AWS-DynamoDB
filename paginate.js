const async = require('async');
const _ = require('underscore');
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const DocClient = new AWS.DynamoDB.DocumentClient();

let startKey = [],
	result = [],
	pages = 0;

async.doWhilst(
	// iteratee
	(callback) => {
		let params = {
			TableName: 'td_notes',
			Limit: 3
		}
		if (!_.isEmpty(startKey)) {
			params.ExclusiveStartKey = startKey;
		}
		DocClient.scan(params, (err, data) => {
			if (err) {
				console.log(err, 'err')
				callback(err, {})
			} else {
				if (typeof data.LastEvaluatedKey != "undefined") {
					startKey = data.LastEvaluatedKey
				}
				else {
					startKey = [];
				}
				if (_.isEmpty(data.Items)) {
					result = _.union(result);
				}
				console.log(data, 'data')
			}
			pages++;
			callback(null, result)
		})
	},
	// truth test
	() => {
		if(_.isEmpty(startKey)) {
			return false
		} else {
			return true;
		}
	},
	// callback
	(err, data) => {
		if (err) {
			console.log(err, 'err')
		} else {
			console.log(data, 'data')
			console.log('Item Count: ', data.length)
			console.log('Pages: ', pages)
		}
	}
);
