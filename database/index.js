var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/groceries');


var db = mongoose.connection;



var grocerySchema = mongoose.Schema({
    item: String,
    quantity: Number
});

var Grocery = mongoose.model('Grocery', grocerySchema);


var saveToDB = function(data) {

    for (var i = 0; i < data.length; i++) {
        var newGrocery = new Grocery({
            item: data.item,
            quantity: data.quantity
        });
        newGrocery.save();
        //fix later
    }
}

var getFromDB = function(callback) {
    var groceryArray = Grocery.find();
    callback(groceryArray);
}