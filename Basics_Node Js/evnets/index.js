var events = require('events');
var eventEmitter = new events.EventEmitter();
var buttonClicked = function(){
    console.log("Button Clicked");
}
var welcome = function(msg){
    console.log("Welcome User" + msg);
}


eventEmitter.on('WhatAction', buttonClicked);
eventEmitter.emit('WhatAction')

eventEmitter.on('WhatNext', welcome);
eventEmitter.emit('WhatNext', 'Dmantz') //we can pass arguments also 'Dmantz'