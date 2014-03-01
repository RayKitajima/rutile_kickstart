
var autosetter = function(model){
	var entity = model.entity;
	// to see the inside of model, uncomment this
	// console.log("***** autosetter called with : " + JSON.stringify(model) );
	self.setValue(entity.productName);
	notify();
};
