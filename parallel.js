 
var async = require("async");
var arr = [];
var getName = (callback) => {
    setTimeout(() => {
        callback(null, "Arun");
    }, 1000);


}
var getAge = (callback) => {
    setTimeout(() => {
        callback(null, 21);
    }, 1000);


}
var getGender = (callback) => {
    setTimeout(() => {
        callback(null, "Male");
    }, 2000);
}
arr.push(getName, getAge, getGender);
async.parallel(arr, function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data)
    }
});