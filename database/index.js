var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/groceries');


var db = mongoose.connection;



var grocerySchema = mongoose.Schema({
    item: String,
    quantity: Number
});

var Grocery = mongoose.model('Grocery', grocerySchema);


var saveToDB = function(grocery) {
    grocery = JSON.parse(grocery);
    console.log('grocery', grocery);
    var newGrocery = new Grocery({
        item: grocery.item,
        quantity: grocery.quantity
    });
    newGrocery.save();
    //fix later
}

var getFromDB = function(callback) {
    var groceryArray = Grocery.find();
    callback(groceryArray);
}

exports.saveToDB = saveToDB;
exports.getFromDB = getFromDB;