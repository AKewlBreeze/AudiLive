/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	function setup() {
	  createCanvas(600, 600);
	}

	// function draw() {
	//   if (mouseIsPressed) {
	//     fill(0);
	//   } else {
	//     fill(255);
	//   }
	//   ellipse(mouseX, mouseY, 80, 80);
	//
	// }


	var draw = function draw(x, y) {
	  if (x > 100) {
	    fill(255);
	  } else {
	    fill(0);
	  }

	  ellipse(x, y, 40, 40);
	};

	//
	// let drawing = (x, y)=>{
	//   if(x > 100){
	//     console.log(x)
	//   } else {
	//     console.log('nope')
	//   }
	//   }


	// <!--  tracking.js script-->
	window.onload = function () {

	  // var video = document.getElementById('video');
	  // var canvas = document.getElementById('canvas');
	  var context = canvas.getContext('2d');
	  var tracker = new tracking.ObjectTracker('face');

	  tracker.setInitialScale(4);
	  tracker.setStepSize(2);
	  tracker.setEdgesDensity(0.1);

	  tracking.track('#video', tracker, { camera: true });

	  tracker.on('track', function (event) {
	    context.clearRect(0, 0, canvas.width, canvas.height);

	    event.data.forEach(function (rect) {
	      // console.log(rect, 1);
	      context.strokeStyle = '#a64ceb';
	      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
	      context.font = '11px Helvetica';
	      context.fillStyle = "#fff";
	      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
	      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
	      draw(rect.x, rect.y);
	      // drawing(rect.x, rect.y);
	      // console.log(rect.x, rect.y)
	    });
	  });
	};

/***/ })
/******/ ]);