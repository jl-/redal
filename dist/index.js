(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-addons-transition-group"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-addons-transition-group"], factory);
	else if(typeof exports === 'object')
		exports["ReactRedal"] = factory(require("react"), require("react-dom"), require("react-addons-transition-group"));
	else
		root["ReactRedal"] = factory(root["React"], root["ReactDOM"], root["ReactTransitionGroup"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * <Redal scoped={false} enterDuration leaveDuration ref='redal' willEnter={} didEnter={} willLeave={} didLeave={} maskToggle={false} handleMaskClick hidden={true}>
	 *   <Redal.X> x </Redal.X>
	 *   <div className='redal-header'></div>
	 *   <div className='redal-body'></div>
	 *   <div className='redal-footer'>
	 *     <Redal.X beforeLeave={}> confirm </Redal.X>
	 *     <Redal.X> cancel </Redal.X>
	 *   </div>
	 * </Redal>
	 *
	 *
	 *
	 *
	 **/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsTransitionGroup = __webpack_require__(3);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _wrapper = __webpack_require__(4);
	
	var _wrapper2 = _interopRequireDefault(_wrapper);
	
	var _x3 = __webpack_require__(7);
	
	var _x4 = _interopRequireDefault(_x3);
	
	__webpack_require__(8);
	
	var renderSubtreeIntoContainer = _reactDom2['default'].unstable_renderSubtreeIntoContainer;
	
	var DEFAULT_DURATION = 0;
	
	var STATUS_SHOWN = 1;
	var STATUS_HIDDEN = 2;
	
	var WRAPPER_KEY = 'redalwrapper';
	
	function replaceRedalX(children, replace) {
	  return _react.Children.map(children, function (child) {
	    if (child && child.type === _x4['default']) {
	      return replace(child);
	    } else if (child && child.props && typeof child.props.children === 'object') {
	      return _react2['default'].cloneElement(child, child.props, replaceRedalX(child.props.children, replace));
	    }
	    return child;
	  });
	}
	
	var Redal = (function (_Component) {
	  _inherits(Redal, _Component);
	
	  _createClass(Redal, null, [{
	    key: 'defaultProps',
	    value: {
	      hidden: true
	    },
	    enumerable: true
	  }]);
	
	  function Redal(props, context) {
	    _classCallCheck(this, Redal);
	
	    var _props$hidden = props.hidden;
	    var hidden = _props$hidden === undefined ? true : _props$hidden;
	
	    _get(Object.getPrototypeOf(Redal.prototype), 'constructor', this).call(this, props, context);
	    this.state = { hidden: hidden };
	  }
	
	  _createClass(Redal, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.scoped !== true) {
	        var hidden = nextProps.hidden !== this.props.hidden ? nextProps.hidden : this.state.hidden;
	        this.toggle(hidden, nextProps);
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props;
	      var scoped = _props.scoped;
	
	      var props = _objectWithoutProperties(_props, ['scoped']);
	
	      if (scoped === true) return;
	      this.node = document.createElement('div');
	      this.node.className = 'ReactModalPortal';
	      document.body.appendChild(this.node);
	      this.toggle(props.hidden, props);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (!this.node) return;
	      _reactDom2['default'].unmountComponentAtNode(this.node);
	      document.body.removeChild(this.node);
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      this.toggle(true);
	    }
	  }, {
	    key: 'open',
	    value: function open() {
	      this.toggle(false);
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      var hidden = arguments.length <= 0 || arguments[0] === undefined ? !this.state.hidden : arguments[0];
	
	      var _ref = arguments.length <= 1 || arguments[1] === undefined ? this.props : arguments[1];
	
	      var scoped = _ref.scoped;
	
	      var props = _objectWithoutProperties(_ref, ['scoped']);
	
	      this.setState({ hidden: hidden });
	      if (scoped !== true) {
	        props.hidden = hidden;
	        this.renderPortal(props);
	      }
	    }
	  }, {
	    key: 'delegateRedalX',
	    value: function delegateRedalX(redalX) {
	      return _react2['default'].cloneElement(redalX, Object.assign({}, redalX.props, { onClick: this.createLeaveHandler(redalX.props.beforeLeave) }));
	    }
	  }, {
	    key: 'createLeaveHandler',
	    value: function createLeaveHandler(beforeLeave) {
	      var _this = this;
	
	      var handler = typeof beforeLeave === 'function' ? function (e) {
	        e.stopPropagation();
	        var shouldLeave = beforeLeave();
	        if (shouldLeave === false) return;
	        if (!shouldLeave || typeof shouldLeave.then !== 'function') return _this.close();
	        shouldLeave.then(_this.close.bind(_this));
	      } : this.close.bind(this);
	      return handler;
	    }
	  }, {
	    key: 'renderPortal',
	    value: function renderPortal(props) {
	      this.portal = renderSubtreeIntoContainer(this, this.build(props), this.node);
	    }
	  }, {
	    key: 'build',
	    value: function build(pristineProps) {
	      var _pristineProps$enterDuration = pristineProps.enterDuration;
	      var enterDuration = _pristineProps$enterDuration === undefined ? DEFAULT_DURATION : _pristineProps$enterDuration;
	      var _pristineProps$leaveDuration = pristineProps.leaveDuration;
	      var leaveDuration = _pristineProps$leaveDuration === undefined ? enterDuration : _pristineProps$leaveDuration;
	      var children = pristineProps.children;
	      var hidden = pristineProps.hidden;
	
	      var props = _objectWithoutProperties(pristineProps, ['enterDuration', 'leaveDuration', 'children', 'hidden']);
	
	      var content = hidden ? null : _react2['default'].createElement(
	        _wrapper2['default'],
	        _extends({ key: WRAPPER_KEY }, props, { enterDuration: enterDuration, leaveDuration: leaveDuration, close: this.close.bind(this) }),
	        replaceRedalX(children, this.delegateRedalX.bind(this))
	      );
	
	      return _react2['default'].createElement(
	        _reactAddonsTransitionGroup2['default'],
	        { component: 'div', transitionEnterTimeout: enterDuration, transitionLeaveTimeout: leaveDuration },
	        content
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var scoped = _props2.scoped;
	
	      var props = _objectWithoutProperties(_props2, ['scoped']);
	
	      return scoped !== true ? _react2['default'].DOM.noscript() : props.hidden = this.state.hidden, this.build(props);
	    }
	  }]);
	
	  return Redal;
	})(_react.Component);
	
	Redal.X = _x4['default'];
	
	exports['default'] = Redal;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsDomContains = __webpack_require__(6);
	
	var _utilsDomContains2 = _interopRequireDefault(_utilsDomContains);
	
	var STATUS_WILL_ENTER = 1;
	var STATUS_DID_ENTER = 2;
	var STATUS_WILL_LEAVE = 3;
	var STATUS_DID_LEAVE = 4;
	
	var INNER_REF = Symbol('inner');
	
	var RedalWrapper = (function (_Component) {
	  _inherits(RedalWrapper, _Component);
	
	  function RedalWrapper(props, context) {
	    _classCallCheck(this, RedalWrapper);
	
	    _get(Object.getPrototypeOf(RedalWrapper.prototype), 'constructor', this).call(this, props, context);
	    this.state = { status: STATUS_WILL_ENTER };
	  }
	
	  _createClass(RedalWrapper, [{
	    key: 'componentWillAppear',
	    value: function componentWillAppear(cb) {
	      console.log('redal will appear');
	      this.setState({ status: STATUS_WILL_ENTER });
	      cb();
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      console.log('redal did appear');
	      this.setState({ status: STATUS_DID_ENTER });
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(cb) {
	      var _this = this;
	
	      console.log('redal will enter');
	      var _props = this.props;
	      var willEnter = _props.willEnter;
	      var _props$enterDuration = _props.enterDuration;
	      var enterDuration = _props$enterDuration === undefined ? 0 : _props$enterDuration;
	
	      this.setState({ status: STATUS_WILL_ENTER });
	      setTimeout(cb, enterDuration);
	      typeof willEnter === 'function' && setTimeout(function () {
	        return willEnter(_this.refs.inner);
	      }, 0);
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      var _this2 = this;
	
	      console.log('redal did enter');
	      var didEnter = this.props.didEnter;
	
	      this.setState({ status: STATUS_DID_ENTER });
	      typeof didEnter === 'function' && setTimeout(function () {
	        return didEnter(_this2.refs.inner);
	      }, 0);
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(cb) {
	      var _this3 = this;
	
	      console.log('redal will leave');
	      var _props2 = this.props;
	      var willLeave = _props2.willLeave;
	      var _props2$leaveDuration = _props2.leaveDuration;
	      var leaveDuration = _props2$leaveDuration === undefined ? 0 : _props2$leaveDuration;
	
	      this.setState({ status: STATUS_WILL_LEAVE });
	      setTimeout(cb, leaveDuration);
	      typeof willLeave === 'function' && setTimeout(function () {
	        return willLeave(_this3.refs.inner);
	      }, 0);
	    }
	  }, {
	    key: 'componentDidLeave',
	    value: function componentDidLeave() {
	      var _this4 = this;
	
	      console.log('redal did leave');
	      var didLeave = this.props.didLeave;
	
	      this.setState({ status: STATUS_DID_LEAVE });
	      typeof didLeave === 'function' && setTimeout(function () {
	        return didLeave(_this4.refs.inner);
	      }, 0);
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      var _props3 = this.props;
	      var maskToggle = _props3.maskToggle;
	      var handleMaskClick = _props3.handleMaskClick;
	      var close = _props3.close;
	
	      var inner = this.refs[INNER_REF];
	      var willLeave = typeof handleMaskClick === 'function' ? !handleMaskClick(e, inner) : maskToggle && !(0, _utilsDomContains2['default'])(inner, e.target);
	      if (willLeave) close();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props;
	      var className = _props4.className;
	      var children = _props4.children;
	
	      var props = _objectWithoutProperties(_props4, ['className', 'children']);
	
	      var status = this.state.status;
	
	      var cn = (0, _classnames2['default'])({
	        'redal--entering': status === STATUS_WILL_ENTER,
	        'redal--entered': status === STATUS_DID_ENTER,
	        'redal--leaving': status === STATUS_WILL_LEAVE,
	        'redal--left': status === STATUS_DID_LEAVE
	      }, 'redal', className);
	      return _react2['default'].createElement(
	        'div',
	        _extends({ className: cn }, props, { onClick: this.handleClick.bind(this) }),
	        _react2['default'].createElement(
	          'div',
	          { className: (0, _classnames2['default'])('redal-inner', className), ref: INNER_REF },
	          children
	        )
	      );
	    }
	  }]);
	
	  return RedalWrapper;
	})(_react.Component);
	
	exports['default'] = RedalWrapper;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	'use strict';
	
	(function () {
		'use strict';
	
		var hasOwn = ({}).hasOwnProperty;
	
		function classNames() {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = domContains;
	
	function domContains(root, child) {
	  while (child) {
	    if (child === root) return true;
	    child = child.parentNode;
	  }
	  return false;
	}
	
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var ReactX = (function (_Component) {
	  _inherits(ReactX, _Component);
	
	  function ReactX() {
	    _classCallCheck(this, ReactX);
	
	    _get(Object.getPrototypeOf(ReactX.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ReactX, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;
	      var _props$component = _props.component;
	      var component = _props$component === undefined ? 'span' : _props$component;
	
	      var props = _objectWithoutProperties(_props, ['children', 'className', 'component']);
	
	      props.className = (0, _classnames2['default'])(className, 'redal-x');
	      return _react2['default'].createElement(component, props, children);
	    }
	  }]);
	
	  return ReactX;
	})(_react.Component);
	
	exports['default'] = ReactX;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?importLoaders=2!./../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 5 version\"]}!./../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?importLoaders=2!./../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 5 version\"]}!./../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, ".fcol, .redal {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n\n.f-jc-c, .redal {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.f-ai-c, .redal {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n              -ms-grid-row-align: center;\n          align-items: center; }\n\n.redal {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  overflow: auto;\n  z-index: 100; }\n  .redal-x {\n    cursor: pointer; }\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	"use strict";
	
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.map.json