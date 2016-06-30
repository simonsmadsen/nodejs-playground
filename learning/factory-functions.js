module.exports = {

	user: function(name){
		return {
			hallo: () => console.log('Hallo my name is '+name)
		}
	},
	dog: function(){
		const sound = 'woof'
		return {
			sound: () => console.log(sound)
		}
	}


}