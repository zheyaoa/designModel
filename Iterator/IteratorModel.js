var Node = function(value){
    this.value = value;
    this.next = null;
}
Node.prototype[Symbol.iterator] = function(){
    var iterator = {next};
    var current = this;

    function next(){
        if(current){
            var value = current.value;
            current = current.next;
            return {
                value,
                done:false
            }
        }else{
            return{
                done:true
            }
        }
    }

    return iterator;
}


var one = new Node(1);
var two = new Node(2);
var three = new Node(3);

one.next = two;
two.next = three;

for (var i of one){
  console.log(i); // 1, 2, 3
}
var a = [...one]
console.log(a);