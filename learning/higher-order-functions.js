var users = require('./../dummy-data/users.js');

module.exports = {
	mapEmails: function(){
		return users
			.map(user=>user.email)
	},
	sumAge: function(){
		return users
			.map(user=>user.age)
			.reduce((total,val) => total + val)
	},
	all: function(){
		return users
	},
	filterOnlyFemales: function(){
		return users
			.filter(user=>user.gender == 'female')
	}
}