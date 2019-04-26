var createSingle = (function(){
    var instance;
    var createSingle = function(name){
        if(!instance){
            instance = new Single(name);
        }
        return instance;
    }
    function Single(name){
        this.name = name;
    }
    Single.prototype.getInfo = function(){
        console.log(this.name);
    }
    return createSingle;
})()

var a = createSingle('zheyao');
var b = createSingle('yyx');
console.log(a===b);