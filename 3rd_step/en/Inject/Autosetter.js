// 
// you can inject custom autoset function for the cross EditForm event: 'imageSelected' and 'entitySelected'.
// 

var fs = require('fs');

module.exports = {
	"entitySelected" : {
		"Order/OrderItem.productName" : fs.readFileSync(__dirname+'/Autosetter_productName.js').toString(),
		"Order/OrderItem.price"       : fs.readFileSync(__dirname+'/Autosetter_price.js').toString()
	},
};
