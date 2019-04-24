const {Dep,Watcher} = require('./sub.js');

function User(name,phone){
    this.name = name;
    this.phone = phone;
}
User.prototype = new Watcher();
User.prototype.fn = function(){
    console.log(`给${this.name}:${this.phone}发送短信`)
}


console.log(new User() instanceof User)
// console.log(new User() instanceof Watcher)

// const dep = new Dep();
// dep.addSub(new User('yyx','12345'))
// dep.addSub(new User('yw','67890'))
// dep.notify()

exports.User = User;