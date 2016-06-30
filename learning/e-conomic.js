var request = require('request');

module.exports = {

	options: {
		url: 'https://restapi.e-conomic.com/customers',
		method: 'GET',
		headers: {
			'X-AppSecretToken': "demo",
			'X-AgreementGrantToken': "demo",
			accept: "application/json"
		}
	},

	getDemoCustomers: function(onDone){
		request(this.options, (error, response, body) => {
			if (!error && response.statusCode == 200) {
				onDone(JSON.parse(body).collection);
			}
		});
	}
}