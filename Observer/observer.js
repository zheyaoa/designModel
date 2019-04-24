function Observer(){
    this.callbackList = [];
}

Observer.prototype.listen = function(fn,type='default'){
    if(!this.callbackList[type]){
        this.callbackList[type] = [];
    }
    this.callbackList[type].push(fn);
}

Observer.prototype.triger = function(){
    let type = Array.prototype.shift.call(arguments);
    type = type == 'undefine'?'default':type;
    let callbackList = this.callbackList[type];
    if(!callbackList||callbackList.length == 0){
        return false;
    }
    callbackList.forEach(fn => {
        fn.apply(this,arguments)
    });
}

const observer = new Observer();
obs.listen(function(name){
    console.log(`${name} get your message`)
})
obs.listen(function(name){
    console.log(`${name} reset the message`)
})
observer.triger('default','yyx')