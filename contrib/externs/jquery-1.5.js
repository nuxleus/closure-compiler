/*
 * Copyright 2010 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Externs for jQuery 1.5.2
 *
 * Note that some functions use different return types depending on the number
 * of parameters passed in. In these cases, you may need to annotate the type
 * of the result in your code, so the JSCompiler understands which type you're
 * expecting. For example:
 *    <code>var elt = /** @type {Element} * / (foo.get(0));</code>
 *
 * @see http://api.jquery.com/
 * @externs
 */

/** @typedef {jQuery} */
var $;

/** @typedef {(Window|Document|Element|Array.<Element>|string|jQuery)} */
var jQuerySelector;

/**
 * @constructor
 * @param {(jQuerySelector|Element|Array.<Element>|Object|jQuery|string|
 *     function())=} arg1
 * @param {(Element|jQuery|Document|
 *     Object.<string, (string|function(jQuery.event=))>)=} arg2
 * @return {jQuery}
 */
function jQuery(arg1, arg2) {};

/**
 * @param {(jQuerySelector|Array.<Element>|string)} arg1
 * @param {Element=} context
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.add = function(arg1, context) {};

/**
 * @param {(string|function(number,String))} arg1
 * @return {jQuery}
 */
jQuery.prototype.addClass = function(arg1) {};

/**
 * @param {(string|Element|jQuery|function(number))} arg1
 * @param {(string|Element|Array.<Element>|jQuery)=} content
 * @return {jQuery}
 */
jQuery.prototype.after = function(arg1, content) {};

/**
 * @param {(string|Object.<string,*>)} arg1
 * @param {Object.<string,*>=} settings
 * @return {jQuery.jqXHR}
 */
jQuery.ajax = function(arg1, settings) {};

/**
 * @param {function(jQuery.event,XMLHttpRequest,Object.<string, *>)} handler
 * @return {jQuery}
 */
jQuery.prototype.ajaxComplete = function(handler) {};

/**
 * @param {function(jQuery.event,jQuery.jqXHR,Object.<string, *>,*)} handler
 * @return {jQuery}
 */
jQuery.prototype.ajaxError = function(handler) {};

/**
 * @param {function(jQuery.event,XMLHttpRequest,Object.<string, *>)} handler
 * @return {jQuery}
 */
jQuery.prototype.ajaxSend = function(handler) {};

/** @param {Object.<string,*>} options */
jQuery.ajaxSetup = function(options) {};

/**
 * @param {function()} handler
 * @return {jQuery}
 */
jQuery.prototype.ajaxStart = function(handler) {};

/**
 * @param {function()} handler
 * @return {jQuery}
 */
jQuery.prototype.ajaxStop = function(handler) {};

/**
 * @param {function(jQuery.event,XMLHttpRequest,Object.<string, *>)} handler
 * @return {jQuery}
 */
jQuery.prototype.ajaxSuccess = function(handler) {};

/**
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.andSelf = function() {};

/**
 * @param {Object.<string,*>} properties
 * @param {(string|number|Object.<string,*>)=} arg2
 * @param {string=} easing
 * @param {function()=} complete
 * @return {jQuery}
 */
jQuery.prototype.animate = function(properties, arg2, easing, complete) {};

/**
 * @param {(string|Element|jQuery|function(number,string))} arg1
 * @param {(string|Element|Array.<Element>|jQuery)=} content
 * @return {jQuery}
 */
jQuery.prototype.append = function(arg1, content) {};

/**
 * @param {(jQuerySelector|Element|jQuery)} target
 * @return {jQuery}
 */
jQuery.prototype.appendTo = function(target) {};

/**
 * @param {(string|Object.<string,*>)} arg1
 * @param {(string|number|function(number,string))=} arg2
 * @return {(string|jQuery)}
 */
jQuery.prototype.attr = function(arg1, arg2) {};

/**
 * @param {(string|Element|jQuery|function())} arg1
 * @param {(string|Element|Array.<Element>|jQuery)=} content
 * @return {jQuery}
 */
jQuery.prototype.before = function(arg1, content) {};

/**
 * @param {(string|Object.<string, function(jQuery.event=)>)} arg1
 * @param {Object.<string, *>=} eventData
 * @param {(function(jQuery.event)|boolean)=} arg3
 * @return {jQuery}
 */
jQuery.prototype.bind = function(arg1, eventData, arg3) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.blur = function(arg1, handler) {};

/** @type {boolean} */
jQuery.boxModel;

/** @type {Object.<string,*>} */
jQuery.browser;

/**
 * @type {boolean}
 * @const
 */
jQuery.browser.mozilla;

/**
 * @type {boolean}
 * @const
 */
jQuery.browser.msie;

/**
 * @type {boolean}
 * @const
 */
jQuery.browser.opera;

/**
 * @type {boolean}
 * @const
 * @deprecated
 */
jQuery.browser.safari;

/** @type {string} */
jQuery.browser.version;

/**
 * @type {boolean}
 * @const
 */
jQuery.browser.webkit;

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.change = function(arg1, handler) {};

/**
 * @param {jQuerySelector=} selector
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.children = function(selector) {};

/**
 * @param {string=} queueName
 * @return {jQuery}
 */
jQuery.prototype.clearQueue = function(queueName) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.click = function(arg1, handler) {};

/**
 * @param {boolean=} withDataAndEvents
 * @param {boolean=} deepWithDataAndEvents
 * @return {jQuery}
 */
jQuery.prototype.clone = function(withDataAndEvents, deepWithDataAndEvents) {};

/**
 * @param {(jQuerySelector|string|Array.<string>)} arg1
 * @param {Element=} context
 * @return {(jQuery|Array.<Element>)}
 * @nosideeffects
 */
jQuery.prototype.closest = function(arg1, context) {};

/**
 * @param {Element} container
 * @param {Element} contained
 * @return {boolean}
 */
jQuery.contains = function(container, contained) {};

/**
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.contents = function() {};

/** @type {Element} */
jQuery.prototype.context;

/**
 * @param {(string|Object.<string,*>)} arg1
 * @param {(string|number|function(number,*))=} arg2
 * @return {(string|jQuery)}
 */
jQuery.prototype.css = function(arg1, arg2) {};

/** @type {Object.<string, *>} */
jQuery.cssHooks;

/**
 * @param {Element} elem
 * @param {string=} key
 * @param {*=} value
 * @return {*}
 */
jQuery.data = function(elem, key, value) {};

/**
 * @param {(string|Object.<string, *>)=} arg1
 * @param {*=} value
 * @return {*}
 */
jQuery.prototype.data = function(arg1, value) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.dblclick = function(arg1, handler) {};

/**
 * @constructor
 * @param {function()=} opt_fn
 * @see http://api.jquery.com/category/deferred-object/
 */
jQuery.deferred = function(opt_fn) {};

/**
 * @constructor
 * @extends {jQuery.deferred}
 * @param {function()=} opt_fn
 * @return {jQuery.Deferred}
 */
jQuery.Deferred = function(opt_fn) {};

/**
 * @param {function()} doneCallbacks
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.done = function(doneCallbacks) {};

/**
 * @param {function()} failCallbacks
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.fail = function(failCallbacks) {};

/**
 * @return {boolean}
 * @nosideeffects
 */
jQuery.deferred.prototype.isRejected = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
jQuery.deferred.prototype.isResolved = function() {};

/** @return {jQuery.Promise} */
jQuery.deferred.prototype.promise = function() {};

/**
 * @param {...*} var_args
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.reject = function(var_args) {};

/**
 * @param {Object} context
 * @param {Array.<*>=} args
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.rejectWith = function(context, args) {};

/**
 * @param {...*} var_args
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.resolve = function(var_args) {};

/**
 * @param {Object} context
 * @param {Array.<*>=} args
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.resolveWith = function(context, args) {};

/**
 * @param {function()} doneCallbacks
 * @param {function()} failCallbacks
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.then = function(doneCallbacks, failCallbacks) {};

/**
 * @param {number} duration
 * @param {string=} queueName
 * @return {jQuery}
 */
jQuery.prototype.delay = function(duration, queueName) {};

/**
 * @param {string} selector
 * @param {(string|Object.<string,*>)} arg2
 * @param {(function()|Object.<string, *>)=} arg3
 * @param {function()=} handler
 * @return {jQuery}
 */
jQuery.prototype.delegate = function(selector, arg2, arg3, handler) {};

/**
 * @param {Element} elem
 * @param {string=} queueName
 * @return {jQuery}
 */
jQuery.dequeue = function(elem, queueName) {};

/**
 * @param {string=} queueName
 * @return {jQuery}
 */
jQuery.prototype.dequeue = function(queueName) {};

/**
 * @param {jQuerySelector=} selector
 * @return {jQuery}
 */
jQuery.prototype.detach = function(selector) {};

/**
 * @param {(string|Object.<string,*>)=} arg1
 * @param {string=} handler
 * @return {jQuery}
 */
jQuery.prototype.die = function(arg1, handler) {};

/**
 * @param {Object} collection
 * @param {function(number,*)} callback
 * @return {Object}
 */
jQuery.each = function(collection, callback) {};

/**
 * @param {function(number,Element)} fnc
 * @return {jQuery}
 */
jQuery.prototype.each = function(fnc) {};

/** @return {jQuery} */
jQuery.prototype.empty = function() {};

/**
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.end = function() {};

/**
 * @param {number} arg1
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.eq = function(arg1) {};

/** @param {string} message */
jQuery.error = function(message) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.error = function(arg1, handler) {};

/**
 * @constructor
 * @param {string} eventType
 */
jQuery.event = function(eventType) {};

/**
 * @constructor
 * @extends {jQuery.event}
 * @param {string} eventType
 * @return {jQuery.Event}
 */
jQuery.Event = function(eventType) {};

/** @type {Element} */
jQuery.event.prototype.currentTarget;

/** @type {*} */
jQuery.event.prototype.data;

/**
 * @return {boolean}
 * @nosideeffects
 */
jQuery.event.prototype.isDefaultPrevented = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
jQuery.event.prototype.isImmediatePropagationStopped = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
jQuery.event.prototype.isPropagationStopped = function() {};

/** @type {string} */
jQuery.event.prototype.namespace;

/** @type {Event} */
jQuery.event.prototype.originalEvent;

/** @type {number} */
jQuery.event.prototype.pageX;

/** @type {number} */
jQuery.event.prototype.pageY;

/** @return {undefined} */
jQuery.event.prototype.preventDefault = function() {};

/** @type {Object.<string, *>} */
jQuery.event.prototype.props;

/** @type {Element} */
jQuery.event.prototype.relatedTarget;

/** @type {*} */
jQuery.event.prototype.result;

/** @return {undefined} */
jQuery.event.prototype.stopImmediatePropagation = function() {};

/** @return {undefined} */
jQuery.event.prototype.stopPropagation = function() {};

/** @type {Element} */
jQuery.event.prototype.target;

/** @type {number} */
jQuery.event.prototype.timeStamp;

/** @type {string} */
jQuery.event.prototype.type;

/** @type {number} */
jQuery.event.prototype.which;

/**
 * @param {(Object|boolean)} arg1
 * @param {...*} var_args
 * @return {Object}
 */
jQuery.extend = function(arg1, var_args) {};

/**
 * @param {(Object|boolean)} arg1
 * @param {...*} var_args
 * @return {Object}
 */
jQuery.prototype.extend = function(arg1, var_args) {};

/**
 * @param {(string|number)=} duration
 * @param {(function()|string)=} arg2
 * @param {function()=} callback
 * @return {jQuery}
 */
jQuery.prototype.fadeIn = function(duration, arg2, callback) {};

/**
 * @param {(string|number)=} duration
 * @param {(function()|string)=} arg2
 * @param {function()=} callback
 * @return {jQuery}
 */
jQuery.prototype.fadeOut = function(duration, arg2, callback) {};

/**
 * @param {(string|number)} duration
 * @param {number} opacity
 * @param {(function()|string)=} arg3
 * @param {function()=} callback
 * @return {jQuery}
 */
jQuery.prototype.fadeTo = function(duration, opacity, arg3, callback) {};

/**
 * @param {(string|number)=} duration
 * @param {string=} easing
 * @param {function()=} callback
 * @return {jQuery}
 */
jQuery.prototype.fadeToggle = function(duration, easing, callback) {};

/**
 * @param {(jQuerySelector|function(number)|Element|jQuery)} arg1
 * @return {jQuery}
 */
jQuery.prototype.filter = function(arg1) {};

/**
 * @param {jQuerySelector} selector
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.find = function(selector) {};

/**
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.first = function() {};

/** @see http://docs.jquery.com/Plugins/Authoring */
jQuery.fn;

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.focus = function(arg1, handler) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.focusin = function(arg1, handler) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.focusout = function(arg1, handler) {};

/** @const */
jQuery.fx = {};

/** @type {number} */
jQuery.fx.interval;

/** @type {boolean} */
jQuery.fx.off;

/**
 * @param {string} url
 * @param {(Object.<string,*>|string)=} data
 * @param {function(string,string,jQuery.jqXHR)=} success
 * @param {string=} dataType
 * @return {jQuery.jqXHR}
 */
jQuery.get = function(url, data, success, dataType) {};

/**
 * @param {number=} index
 * @return {(Element|Array.<Element>)}
 * @nosideeffects
 */
jQuery.prototype.get = function(index) {};

/**
 * @param {string} url
 * @param {Object.<string,*>=} data
 * @param {function(string,string,jQuery.jqXHR)=} success
 * @return {jQuery.jqXHR}
 */
jQuery.getJSON = function(url, data, success) {};

/**
 * @param {string} url
 * @param {function(string,string)=} success
 * @return {XMLHttpRequest}
 */
jQuery.getScript = function(url, success) {};

/** @param {string} code */
jQuery.globalEval = function(code) {};

/**
 * @param {Array.<*>} arr
 * @param {function(*,number)} fnc
 * @param {boolean=} invert
 * @return {Array.<*>}
 */
jQuery.grep = function(arr, fnc, invert) {};

/**
 * @param {(string|Element)} arg1
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.has = function(arg1) {};

/**
 * @param {string} className
 * @return {boolean}
 * @nosideeffects
 */
jQuery.prototype.hasClass = function(className) {};

/**
 * @param {Element} elem
 * @return {boolean}
 * @nosideeffects
 */
jQuery.hasData = function(elem) {};

/**
 * @param {(string|number|function(number,number))=} arg1
 * @return {(number|jQuery)}
 */
jQuery.prototype.height = function(arg1) {};

/**
 * @param {(string|number)=} duration
 * @param {(function()|string)=} arg2
 * @param {function()=} callback
 * @return {jQuery}
 */
jQuery.prototype.hide = function(duration, arg2, callback) {};

/**
 * @param {function(jQuery.event)} arg1
 * @param {function(jQuery.event)=} handlerOut
 * @return {jQuery}
 */
jQuery.prototype.hover = function(arg1, handlerOut) {};

/**
 * @param {(string|function(number,string))=} arg1
 * @return {(string|jQuery)}
 */
jQuery.prototype.html = function(arg1) {};

/**
 * @param {*} value
 * @param {Array.<*>} arr
 * @return {number}
 * @nosideeffects
 */
jQuery.inArray = function(value, arr) {};

/**
 * @param {(jQuerySelector|Element|jQuery)=} arg1
 * @return {number}
 */
jQuery.prototype.index = function(arg1) {};

/**
 * @return {number}
 * @nosideeffects
 */
jQuery.prototype.innerHeight = function() {};

/**
 * @return {number}
 * @nosideeffects
 */
jQuery.prototype.innerWidth = function() {};

/**
 * @param {(jQuerySelector|Element|jQuery)} target
 * @return {jQuery}
 */
jQuery.prototype.insertAfter = function(target) {};

/**
 * @param {(jQuerySelector|Element|jQuery)} target
 * @return {jQuery}
 */
jQuery.prototype.insertBefore = function(target) {};

/**
 * @param {jQuerySelector} selector
 * @return {boolean}
 * @nosideeffects
 */
jQuery.prototype.is = function(selector) {};

/**
 * @param {*} obj
 * @return {boolean}
 * @nosideeffects
 */
jQuery.isArray = function(obj) {};

/**
 * @param {Object} obj
 * @return {boolean}
 * @nosideeffects
 */
jQuery.isEmptyObject = function(obj) {};

/**
 * @param {*} obj
 * @return {boolean}
 * @nosideeffects
 */
jQuery.isFunction = function(obj) {};

/**
 * @param {Object} obj
 * @return {boolean}
 * @nosideeffects
 */
jQuery.isPlainObject = function(obj) {};

/**
 * @param {*} obj
 * @return {boolean}
 * @nosideeffects
 */
jQuery.isWindow = function(obj) {};

/**
 * @param {Element} node
 * @return {boolean}
 * @nosideeffects
 */
jQuery.isXMLDoc = function(node) {};

/** @type {string} */
jQuery.prototype.jquery;

/**
 * @constructor
 * @extends {XMLHttpRequest}
 * @implements {jQuery.Promise}
 * @private
 * @see http://api.jquery.com/jQuery.ajax/#jqXHR
 */
jQuery.jqXHR = function () {};

/**
 * @param {function()} callback
 * @return {jQuery.jqXHR}
*/
jQuery.jqXHR.prototype.complete = function (callback) {};

/**
 * @override
 * @param {function()} doneCallbacks
 * @return {jQuery.Promise}
 */
jQuery.jqXHR.prototype.done = function(doneCallbacks) {};


/**
 * @param {function()} callback
 * @return {jQuery.jqXHR}
*/
jQuery.jqXHR.prototype.error = function (callback) {};

/**
 * @override
 * @param {function()} failCallbacks
 * @return {jQuery.Promise}
 */
jQuery.jqXHR.prototype.fail = function(failCallbacks) {};

/**
 * @override
 * @return {boolean}
 * @nosideeffects
 */
jQuery.jqXHR.prototype.isRejected = function() {};

/**
 * @override
 * @return {boolean}
 * @nosideeffects
 */
jQuery.jqXHR.prototype.isResolved = function() {};

/**
 * @override
 * @deprecated
 */
jQuery.jqXHR.prototype.onreadystatechange = function (callback) {};

/**
 * @param {function()} callback
 * @return {jQuery.jqXHR}
*/
jQuery.jqXHR.prototype.success = function (callback) {};

/**
 * @override
 * @param {function()} doneCallbacks
 * @param {function()} failCallbacks
 * @return {jQuery.Promise}
 */
jQuery.jqXHR.prototype.then = function(doneCallbacks, failCallbacks) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.keydown = function(arg1, handler) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.keypress = function(arg1, handler) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.keyup = function(arg1, handler) {};

/**
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.last = function() {};

/** @type {number} */
jQuery.prototype.length;

/**
 * @param {(string|Object.<string, function(jQuery.event=)>)} arg1
 * @param {(function()|Object.<string, *>)=} arg2
 * @param {function()=} handler
 * @return {jQuery}
 */
jQuery.prototype.live = function(arg1, arg2, handler) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>|string)=} arg1
 * @param {(function(jQuery.event)|Object.<string,*>|string)=} arg2
 * @param {function(string,string,XMLHttpRequest)=} complete
 * @return {jQuery}
 */
jQuery.prototype.load = function(arg1, arg2, complete) {};

/**
 * @param {*} obj
 * @return {Array.<*>}
 */
jQuery.makeArray = function(obj) {};

/**
 * @param {Array.<*>} arr
 * @param {function(*,number)} callback
 * @return {Array.<*>}
 */
jQuery.map = function(arr, callback) {};

/**
 * @param {function(number,Element)} callback
 * @return {jQuery}
 */
jQuery.prototype.map = function(callback) {};

/**
 * @param {Array.<*>} first
 * @param {Array.<*>} second
 * @return {Array.<*>}
 */
jQuery.merge = function(first, second) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.mousedown = function(arg1, handler) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.mouseenter = function(arg1, handler) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.mouseleave = function(arg1, handler) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.mousemove = function(arg1, handler) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.mouseout = function(arg1, handler) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.mouseover = function(arg1, handler) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.mouseup = function(arg1, handler) {};

/**
 * @param {jQuerySelector=} selector
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.next = function(selector) {};

/**
 * @param {string=} selector
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.nextAll = function(selector) {};

/**
 * @param {jQuerySelector=} selector
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.nextUntil = function(selector) {};

/**
 * @param {boolean=} removeAll
 * @return {Object}
 */
jQuery.noConflict = function(removeAll) {};

/**
 * @return {function()}
 * @nosideeffects
 */
jQuery.noop = function() {};

/**
 * @param {(jQuerySelector|Array.<Element>|function(number))} arg1
 * @return {jQuery}
 */
jQuery.prototype.not = function(arg1) {};

/**
 * @return {number}
 * @nosideeffects
 */
jQuery.now = function() {};

/**
 * @param {({left:number,top:number}|
 *     function(number,{top:number,left:number}))=} arg1
 * @return {({left:number,top:number}|jQuery)}
 */
jQuery.prototype.offset = function(arg1) {};

/**
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.offsetParent = function() {};

/**
 * @param {string} eventType
 * @param {Object.<string, *>=} eventData
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.one = function(eventType, eventData, handler) {};

/**
 * @param {boolean=} includeMargin
 * @return {number}
 * @nosideeffects
 */
jQuery.prototype.outerHeight = function(includeMargin) {};

/**
 * @param {boolean=} includeMargin
 * @return {number}
 * @nosideeffects
 */
jQuery.prototype.outerWidth = function(includeMargin) {};

/**
 * @param {(Object.<string, *>|Array.<Object.<string, *>>)} obj
 * @param {boolean=} traditional
 * @return {string}
 */
jQuery.param = function(obj, traditional) {};

/**
 * @param {jQuerySelector=} selector
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.parent = function(selector) {};

/**
 * @param {jQuerySelector=} selector
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.parents = function(selector) {};

/**
 * @param {jQuerySelector=} selector
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.parentsUntil = function(selector) {};

/**
 * @param {string} json
 * @return {Object.<string, *>}
 */
jQuery.parseJSON = function(json) {};

/**
 * @param {string} data
 * @return {Document}
 */
jQuery.parseXML = function(data) {};

/**
 * @return {{left:number,top:number}}
 * @nosideeffects
 */
jQuery.prototype.position = function() {};

/**
 * @param {string} url
 * @param {(Object.<string,*>|string)=} data
 * @param {function(string,string,jQuery.jqXHR)=} success
 * @param {string=} dataType
 * @return {jQuery.jqXHR}
 */
jQuery.post = function(url, data, success, dataType) {};

/**
 * @param {(string|Element|jQuery|function(number,string))} arg1
 * @param {(string|Element|jQuery)=} content
 * @return {jQuery}
 */
jQuery.prototype.prepend = function(arg1, content) {};

/**
 * @param {(jQuerySelector|Element|jQuery)} target
 * @return {jQuery}
 */
jQuery.prototype.prependTo = function(target) {};

/**
 * @param {jQuerySelector=} selector
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.prev = function(selector) {};

/**
 * @param {jQuerySelector=} selector
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.prevAll = function(selector) {};

/**
 * @param {jQuerySelector=} selector
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.prevUntil = function(selector) {};

/**
 * @interface
 * @private
 * @see http://api.jquery.com/Types/#Promise
 */
jQuery.Promise = function () {};

/**
 * @param {function()} doneCallbacks
 * @return {jQuery.Promise}
 */
jQuery.Promise.prototype.done = function(doneCallbacks) {};

/**
 * @param {function()} failCallbacks
 * @return {jQuery.Promise}
 */
jQuery.Promise.prototype.fail = function(failCallbacks) {};

/**
 * @return {boolean}
 * @nosideeffects
 */
jQuery.Promise.prototype.isRejected = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
jQuery.Promise.prototype.isResolved = function() {};

/**
 * @param {function()} doneCallbacks
 * @param {function()} failCallbacks
 * @return {jQuery.Promise}
 */
jQuery.Promise.prototype.then = function(doneCallbacks, failCallbacks) {};

/**
 * @param {(function()|Object)} arg1
 * @param {(Object|string)} arg2
 * @return {function()}
 */
jQuery.proxy = function(arg1, arg2) {};

/**
 * @param {Array.<Element>} elements
 * @param {string=} name
 * @param {Array.<*>=} args
 * @return {jQuery}
 */
jQuery.prototype.pushStack = function(elements, name, args) {};

/**
 * @param {string=} queueName
 * @param {(Array.<function(this:jQuery)>|function(function()))=} arg2
 * @return {(Array.<Element>|jQuery)}
 */
jQuery.prototype.queue = function(queueName, arg2) {};

/**
 * @param {Element} elem
 * @param {string=} queueName
 * @param {(Array.<function(this:jQuery)>|function())=} arg3
 * @return {(Array.<Element>|jQuery)}
 */
jQuery.queue = function(elem, queueName, arg3) {};

/**
 * @param {function()} handler
 * @return {jQuery}
 */
jQuery.prototype.ready = function(handler) {};

/**
 * @param {string=} selector
 * @return {jQuery}
 */
jQuery.prototype.remove = function(selector) {};

/**
 * @param {string} attributeName
 * @return {jQuery}
 */
jQuery.prototype.removeAttr = function(attributeName) {};

/**
 * @param {(string|function(number,string))=} arg1
 * @return {jQuery}
 */
jQuery.prototype.removeClass = function(arg1) {};

/**
 * @param {string=} name
 * @return {jQuery}
 */
jQuery.prototype.removeData = function(name) {};

/**
 * @param {Element} elem
 * @param {string=} name
 * @return {jQuery}
 */
jQuery.removeData = function(elem, name) {};

/**
 * @param {jQuerySelector} target
 * @return {jQuery}
 */
jQuery.prototype.replaceAll = function(target) {};

/**
 * @param {(string|Element|jQuery|function())} arg1
 * @return {jQuery}
 */
jQuery.prototype.replaceWith = function(arg1) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.resize = function(arg1, handler) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.scroll = function(arg1, handler) {};

/**
 * @param {number=} value
 * @return {(number|jQuery)}
 */
jQuery.prototype.scrollLeft = function(value) {};

/**
 * @param {number=} value
 * @return {(number|jQuery)}
 */
jQuery.prototype.scrollTop = function(value) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.select = function(arg1, handler) {};

/** @type {string} */
jQuery.prototype.selector;

/**
 * @return {string}
 * @nosideeffects
 */
jQuery.prototype.serialize = function() {};

/**
 * @return {Array.<Object.<string, *>>}
 * @nosideeffects
 */
jQuery.prototype.serializeArray = function() {};

/**
 * @param {(string|number)=} duration
 * @param {(function()|string)=} arg2
 * @param {function()=} callback
 * @return {jQuery}
 */
jQuery.prototype.show = function(duration, arg2, callback) {};

/**
 * @param {jQuerySelector=} selector
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.siblings = function(selector) {};

/**
 * @return {number}
 * @nosideeffects
 */
jQuery.prototype.size = function() {};

/**
 * @param {number} start
 * @param {number=} end
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.prototype.slice = function(start, end) {};

/**
 * @param {(string|number)=} duration
 * @param {(function()|string)=} arg2
 * @param {function()=} callback
 * @return {jQuery}
 */
jQuery.prototype.slideDown = function(duration, arg2, callback) {};

/**
 * @param {(string|number)=} duration
 * @param {(function()|string)=} arg2
 * @param {function()=} callback
 * @return {jQuery}
 */
jQuery.prototype.slideToggle = function(duration, arg2, callback) {};

/**
 * @param {(string|number)=} duration
 * @param {(function()|string)=} arg2
 * @param {function()=} callback
 * @return {jQuery}
 */
jQuery.prototype.slideUp = function(duration, arg2, callback) {};

/**
 * @param {boolean=} clearQueue
 * @param {boolean=} jumpToEnd
 * @return {jQuery}
 */
jQuery.prototype.stop = function(clearQueue, jumpToEnd) {};

/**
 * @return {jQuery}
 * @nosideeffects
 */
jQuery.sub = function() {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.submit = function(arg1, handler) {};

/** @type {Object.<string, *>} */
jQuery.support;

/** @type {boolean} */
jQuery.support.boxModel;

/** @type {boolean} */
jQuery.support.changeBubbles;

/** @type {boolean} */
jQuery.support.cssFloat;

/** @type {boolean} */
jQuery.support.hrefNormalized;

/** @type {boolean} */
jQuery.support.htmlSerialize;

/** @type {boolean} */
jQuery.support.leadingWhitespace;

/** @type {boolean} */
jQuery.support.noCloneEvent;

/** @type {boolean} */
jQuery.support.opacity;

/** @type {boolean} */
jQuery.support.scriptEval;

/** @type {boolean} */
jQuery.support.style;

/** @type {boolean} */
jQuery.support.submitBubbles;

/** @type {boolean} */
jQuery.support.tbody;

/**
 * @param {(string|function(number,string))=} arg1
 * @return {(string|jQuery)}
 */
jQuery.prototype.text = function(arg1) {};

/**
 * @return {Array.<Element>}
 * @nosideeffects
 */
jQuery.prototype.toArray = function() {};

/**
 * @param {(function(jQuery.event)|string|number|boolean)=} arg1
 * @param {(function(jQuery.event)|string)=} arg2
 * @param {function(jQuery.event)=} arg3
 * @return {jQuery}
 */
jQuery.prototype.toggle = function(arg1, arg2, arg3) {};

/**
 * @param {(string|function(number,string))} arg1
 * @param {boolean=} flag
 * @return {jQuery}
 */
jQuery.prototype.toggleClass = function(arg1, flag) {};

/**
 * @param {(string|jQuery.event)} arg1
 * @param {Array.<*>=} extraParameters
 * @return {jQuery}
 */
jQuery.prototype.trigger = function(arg1, extraParameters) {};

/**
 * @param {string} eventType
 * @param {Array.<*>} extraParameters
 * @return {*}
 */
jQuery.prototype.triggerHandler = function(eventType, extraParameters) {};

/**
 * @param {string} str
 * @return {string}
 * @nosideeffects
 */
jQuery.trim = function(str) {};

/**
 * @param {*} obj
 * @return {string}
 * @nosideeffects
 */
jQuery.type = function(obj) {};

/**
 * @param {(string|jQuery.event)=} arg1
 * @param {(function(jQuery.event)|boolean)=} arg2
 * @return {jQuery}
 */
jQuery.prototype.unbind = function(arg1, arg2) {};

/**
 * @param {string=} selector
 * @param {(string|Object.<string,*>)=} arg2
 * @param {function()=} handler
 * @return {jQuery}
 */
jQuery.prototype.undelegate = function(selector, arg2, handler) {};

/**
 * @param {Array.<Element>} arr
 * @return {Array.<Element>}
 */
jQuery.unique = function(arr) {};

/**
 * @param {(function(jQuery.event)|Object.<string, *>)=} arg1
 * @param {function(jQuery.event)=} handler
 * @return {jQuery}
 */
jQuery.prototype.unload = function(arg1, handler) {};

/** @return {jQuery} */
jQuery.prototype.unwrap = function() {};

/**
 * @param {(string|function(number,*))=} arg1
 * @return {(string|Array.<string>|jQuery)}
 */
jQuery.prototype.val = function(arg1) {};

/**
 * @param {jQuery.deferred} deferreds
 * @return {jQuery.Promise}
 */
jQuery.when = function(deferreds) {};

/**
 * @param {(string|number|function(number,number))=} arg1
 * @return {(number|jQuery)}
 */
jQuery.prototype.width = function(arg1) {};

/**
 * @param {(string|jQuerySelector|Element|jQuery|function(number))} arg1
 * @return {jQuery}
 */
jQuery.prototype.wrap = function(arg1) {};

/**
 * @param {(string|jQuerySelector|Element|jQuery)} wrappingElement
 * @return {jQuery}
 */
jQuery.prototype.wrapAll = function(wrappingElement) {};

/**
 * @param {(string|function())} arg1
 * @return {jQuery}
 */
jQuery.prototype.wrapInner = function(arg1) {};

/** @typedef {jQuery} */
var jQueryObject;