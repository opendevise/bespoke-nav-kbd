/*!
 * bespoke-nav-kbd v1.0.2-dev
 *
 * Copyright 2015, Dan Allen
 * This content is released under the MIT license
 */

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.bespoke||(g.bespoke = {}));g=(g.plugins||(g.plugins = {}));g.navkbd = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var KEY_SB = 32, KEY_PGUP = 33, KEY_PGDN = 34, KEY_END = 35, KEY_HME = 36,
        KEY_LT = 37, KEY_RT = 39, KEY_H = 72, KEY_L = 76,
      isModifierPressed = function(e, keyCode) {
        return e.ctrlKey || (e.shiftKey && keyCode !== KEY_SB) || e.altKey || e.metaKey;
      },
      onKeydown = function(e) {
        if (!isModifierPressed(e, e.which)) {
          switch(e.which) {
            case KEY_SB: return e.shiftKey ? deck.prev() : deck.next();
            case KEY_RT: case KEY_PGDN: case KEY_L: return deck.next();
            case KEY_LT: case KEY_PGUP: case KEY_H: return deck.prev();
            case KEY_HME: return deck.slide(0);
            case KEY_END: return deck.slide(deck.slides.length - 1);
          }
        }
      };
    deck.on('destroy', function() { document.removeEventListener('keydown', onKeydown); });
    document.addEventListener('keydown', onKeydown);
  };
};

},{}]},{},[1])(1)
});