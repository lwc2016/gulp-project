(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var config = require("./libs/config.js");

var Hello = "hello world1";
var a = 10;
var c = 1;
var obj = {
  a: a,
  Hello: Hello
};
console.log(obj);
console.log("hello world@222");
console.log("ooo11211");
console.log("ok");

},{"./libs/config.js":2}],2:[function(require,module,exports){
"use strict";

module.exports = {
  base_url: "http://localhost:3030",
  secret: "good1"
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvbGlicy9jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBRCxDQUF0Qjs7QUFDQSxJQUFJLEtBQUssR0FBRyxjQUFaO0FBQ0EsSUFBSSxDQUFDLEdBQUcsRUFBUjtBQUNBLElBQUksQ0FBQyxHQUFHLENBQVI7QUFFQSxJQUFJLEdBQUcsR0FBRztBQUFDLEVBQUEsQ0FBQyxFQUFFLENBQUo7QUFBTyxFQUFBLEtBQUssRUFBRTtBQUFkLENBQVY7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLEdBQVo7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaO0FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaOzs7OztBQ1hBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0FBQ2IsRUFBQSxRQUFRLEVBQUUsdUJBREc7QUFFYixFQUFBLE1BQU0sRUFBRTtBQUZLLENBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4vbGlicy9jb25maWcuanNcIik7XG52YXIgSGVsbG8gPSBcImhlbGxvIHdvcmxkMVwiO1xudmFyIGEgPSAxMDtcbnZhciBjID0gMTtcblxudmFyIG9iaiA9IHthOiBhLCBIZWxsbzogSGVsbG99O1xuXG5jb25zb2xlLmxvZyhvYmopO1xuXG5jb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkQDIyMlwiKTtcbmNvbnNvbGUubG9nKFwib29vMTEyMTFcIik7XG5jb25zb2xlLmxvZyhcIm9rXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYmFzZV91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDMwXCIsXG4gICAgc2VjcmV0OiBcImdvb2QxXCJcbn07XG4iXX0=
