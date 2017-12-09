var a = require('./a')
var b = require('./b')

var app = document.querySelector('#app')
app.innerHTML += a.sayHello() + '<br>'
app.innerHTML += b.sayHello() + '<br>'
