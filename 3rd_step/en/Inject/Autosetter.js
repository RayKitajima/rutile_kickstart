// 
// you can inject custom autoset function for the cross EditForm event, imageSelected and entitySelected.
// 

var OrderOrderItemProductNameAutosetter = "
function(event){
	var entity = event.entity;
	self.setValue(entity.productName);
	notify();
}";

var OrderOrderItemPriceAutosetter = "
function(event){
	var entity = event.entity;
	self.setValue(entity.price);
	notify();
}";

exports = {
	"entitySelected" : {
		"Order/OrderItem.productName" : OrderOrderItemProductNameAutosetter,
		"Order/OrderItem.price"       : OrderOrderItemPriceAutosetter
	},
};
