var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(tableInput, name, cb) {
        var queryString = "INSERT INTO " + tableInput + " (burger_name, devoured) ";
        queryString += "VALUES ('";
        queryString += name.toString();
        queryString += "', false);";

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;