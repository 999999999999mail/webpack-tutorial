var a = require('./a')
var b = require('./b')
var c = require('./c')

var app = document.querySelector('#app')
app.innerHTML += a.sayHello() + '<br>'
app.innerHTML += b.sayHello() + '<br>'
app.innerHTML += c.sayHello() + '<br>'
