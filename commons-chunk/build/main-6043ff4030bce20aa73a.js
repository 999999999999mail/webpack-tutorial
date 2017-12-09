webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var a = __webpack_require__(0)
var b = __webpack_require__(1)
var c = __webpack_require__(3)

var app = document.querySelector('#app')
app.innerHTML += a.sayHello() + '<br>'
app.innerHTML += b.sayHello() + '<br>'
app.innerHTML += c.sayHello() + '<br>'


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  sayHello: function () {
    return '我是 c 模块！'
  }
}


/***/ })
],[2]);