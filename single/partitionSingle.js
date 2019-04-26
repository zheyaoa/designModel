var createSingle = function(fn){
    var result;
    return function(){
        return result?result:result=fn.apply(this,arguments);
    }
}
function Person(name){
    this.name = name;
}
var createSinglePerson = createSingle(function (name){
    return new Person(name)
});

var a = new createSinglePerson('a');
var b = new createSinglePerson('b');

console.log(a==b)