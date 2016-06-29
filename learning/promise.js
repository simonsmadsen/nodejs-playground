 fs = require('fs')

module.exports = {

	fileContent: function(){
		return new Promise((resolve, reject) => {
		    fs.readFile(__filename, (err, text) => {
		      if (err) 
		        reject(err);
		      else
		        resolve(text.toString());
		    })
		  })
	},
	fileContentErr: function(){
		return new Promise((resolve, reject) => {
		    fs.readFile('CrazyFilename:o.lolfile', (err, text) => {
		      if (err) 
		        reject(err);
		      else
		        resolve(text.toString());
		    })
		 })
	}

}