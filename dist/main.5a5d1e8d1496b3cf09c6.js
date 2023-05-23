/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@swup/fade-theme/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@swup/fade-theme/lib/index.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};
      /******/
      /******/ // The require function
      /******/
      function __nested_webpack_require_1077__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1077__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __nested_webpack_require_1077__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/
      __nested_webpack_require_1077__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/
      __nested_webpack_require_1077__.d = function (exports, name, getter) {
        /******/if (!__nested_webpack_require_1077__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/
      __nested_webpack_require_1077__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/
      __nested_webpack_require_1077__.t = function (value, mode) {
        /******/if (mode & 1) value = __nested_webpack_require_1077__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __nested_webpack_require_1077__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __nested_webpack_require_1077__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/
      __nested_webpack_require_1077__.n = function (module) {
        /******/var getter = module && module.__esModule ? /******/function getDefault() {
          return module['default'];
        } : /******/function getModuleExports() {
          return module;
        };
        /******/
        __nested_webpack_require_1077__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/
      __nested_webpack_require_1077__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/
      __nested_webpack_require_1077__.p = "";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/
      return __nested_webpack_require_1077__(__nested_webpack_require_1077__.s = 0);
      /******/
    }
    /************************************************************************/
    /******/([/* 0 */
    /***/function (module, exports, __nested_webpack_require_5413__) {
      "use strict";

      var _index = __nested_webpack_require_5413__(1);
      var _index2 = _interopRequireDefault(_index);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module.exports = _index2["default"]; // this is here for webpack to expose SwupTheme as window.SwupTheme

      /***/
    }, /* 1 */
    /***/function (module, exports, __nested_webpack_require_5863__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _theme = __nested_webpack_require_5863__(2);
      var _theme2 = _interopRequireDefault(_theme);
      var _index = __nested_webpack_require_5863__(3);
      var _index2 = _interopRequireDefault(_index);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var FadeTheme = function (_Theme) {
        _inherits(FadeTheme, _Theme);
        function FadeTheme(options) {
          _classCallCheck(this, FadeTheme);
          var _this = _possibleConstructorReturn(this, (FadeTheme.__proto__ || Object.getPrototypeOf(FadeTheme)).call(this));
          _this.name = 'FadeTheme';
          var defaultOptions = {
            mainElement: '#swup'
          };
          _this.options = _extends({}, defaultOptions, options);
          return _this;
        }
        _createClass(FadeTheme, [{
          key: 'mount',
          value: function mount() {
            this.applyStyles(_index2["default"]);
            this.addClassName(this.options.mainElement, 'main');
          }
        }]);
        return FadeTheme;
      }(_theme2["default"]);
      exports["default"] = FadeTheme;

      /***/
    }, /* 2 */
    /***/function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var Theme = function () {
        function Theme() {
          var _this = this;
          _classCallCheck(this, Theme);
          this._addedStyleElements = [];
          this._addedHTMLContent = [];
          this._classNameAddedToElements = [];
          this._addClassNameToElement = function () {
            _this._classNameAddedToElements.forEach(function (item) {
              var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
              elements.forEach(function (element) {
                element.classList.add('swup-transition-' + item.name);
              });
            });
          };
          this.isSwupPlugin = true;
        }
        _createClass(Theme, [{
          key: '_beforeMount',
          value: function _beforeMount() {
            // save original and replace animationSelector option
            this._originalAnimationSelectorOption = String(this.swup.options.animationSelector);
            this.swup.options.animationSelector = '[class*="swup-transition-"]';

            // add classes after each content replace
            this.swup.on('contentReplaced', this._addClassNameToElement);
          }
        }, {
          key: '_afterUnmount',
          value: function _afterUnmount() {
            // reset animationSelector option
            this.swup.options.animationSelector = this._originalAnimationSelectorOption;

            // remove added styles
            this._addedStyleElements.forEach(function (element) {
              element.outerHTML = '';
              element = null;
            });

            // remove added HTML
            this._addedHTMLContent.forEach(function (element) {
              element.outerHTML = '';
              element = null;
            });

            // remove added classnames
            this._classNameAddedToElements.forEach(function (item) {
              var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
              elements.forEach(function (element) {
                element.className.split(' ').forEach(function (classItem) {
                  if (new RegExp('^swup-transition-').test(classItem)) {
                    element.classList.remove(classItem);
                  }
                });
              });
            });
            this.swup.off('contentReplaced', this._addClassNameToElement);
          }
        }, {
          key: 'mount',
          value: function mount() {
            // this is mount method rewritten by class extending
            // and is executed when swup is enabled with theme
          }
        }, {
          key: 'unmount',
          value: function unmount() {
            // this is unmount method rewritten by class extending
            // and is executed when swup with theme is disabled
          }
        }, {
          key: 'applyStyles',
          value: function applyStyles(styles) {
            var head = document.head;
            var style = document.createElement('style');
            style.setAttribute('data-swup-theme', '');
            style.appendChild(document.createTextNode(styles));
            this._addedStyleElements.push(style);
            head.prepend(style);
          }
        }, {
          key: 'applyHTML',
          value: function applyHTML(content) {
            var element = document.createElement('div');
            element.innerHTML = content;
            this._addedHTMLContent.push(element);
            document.body.appendChild(element);
          }
        }, {
          key: 'addClassName',
          value: function addClassName(selector, name) {
            // save so it can be later removed
            this._classNameAddedToElements.push({
              selector: selector,
              name: name
            });

            // add class the first time
            this._addClassNameToElement();
          }

          // this is here so we can tell if plugin was created by extending this class
        }]);

        return Theme;
      }();
      exports["default"] = Theme;

      /***/
    }, /* 3 */
    /***/function (module, exports, __nested_webpack_require_14570__) {
      exports = module.exports = __nested_webpack_require_14570__(4)(false);
      // Module
      exports.push([module.i, ".swup-transition-main {\n    opacity: 1;\n    transition: opacity .4s;\n}\n\nhtml.is-animating .swup-transition-main {\n    opacity: 0;\n}", ""]);

      /***/
    }, /* 4 */
    /***/function (module, exports, __webpack_require__) {
      "use strict";

      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      module.exports = function (useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
              return '@media ' + item[2] + '{' + content + '}';
            } else {
              return content;
            }
          }).join('');
        }; // import a list of modules into the list

        list.i = function (modules, mediaQuery) {
          if (typeof modules === 'string') {
            modules = [[null, modules, '']];
          }
          var alreadyImportedModules = {};
          for (var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
          for (i = 0; i < modules.length; i++) {
            var item = modules[i]; // skip already imported module
            // this implementation is not 100% perfect for weird media query combinations
            // when a module is imported multiple times with different media queries.
            // I hope this will never occur (Hey this way we have smaller bundles)

            if (item[0] == null || !alreadyImportedModules[item[0]]) {
              if (mediaQuery && !item[2]) {
                item[2] = mediaQuery;
              } else if (mediaQuery) {
                item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
              }
              list.push(item);
            }
          }
        };
        return list;
      };
      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || '';
        var cssMapping = item[3];
        if (!cssMapping) {
          return content;
        }
        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
          });
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }
        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)

      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
        return '/*# ' + data + ' */';
      }

      /***/
    }
    /******/])
  );
});

/***/ }),

/***/ "./node_modules/@swup/overlay-theme/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@swup/overlay-theme/lib/index.js ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};
      /******/
      /******/ // The require function
      /******/
      function __nested_webpack_require_1083__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1083__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __nested_webpack_require_1083__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/
      __nested_webpack_require_1083__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/
      __nested_webpack_require_1083__.d = function (exports, name, getter) {
        /******/if (!__nested_webpack_require_1083__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/
      __nested_webpack_require_1083__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/
      __nested_webpack_require_1083__.t = function (value, mode) {
        /******/if (mode & 1) value = __nested_webpack_require_1083__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __nested_webpack_require_1083__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __nested_webpack_require_1083__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/
      __nested_webpack_require_1083__.n = function (module) {
        /******/var getter = module && module.__esModule ? /******/function getDefault() {
          return module['default'];
        } : /******/function getModuleExports() {
          return module;
        };
        /******/
        __nested_webpack_require_1083__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/
      __nested_webpack_require_1083__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/
      __nested_webpack_require_1083__.p = "";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/
      return __nested_webpack_require_1083__(__nested_webpack_require_1083__.s = 0);
      /******/
    }
    /************************************************************************/
    /******/([/* 0 */
    /***/function (module, exports, __nested_webpack_require_5419__) {
      "use strict";

      var _index = __nested_webpack_require_5419__(1);
      var _index2 = _interopRequireDefault(_index);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module.exports = _index2["default"]; // this is here for webpack to expose SwupTheme as window.SwupTheme

      /***/
    }, /* 1 */
    /***/function (module, exports, __nested_webpack_require_5869__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _theme = __nested_webpack_require_5869__(2);
      var _theme2 = _interopRequireDefault(_theme);
      var _index = __nested_webpack_require_5869__(3);
      var _index2 = _interopRequireDefault(_index);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var OverlayTheme = function (_Theme) {
        _inherits(OverlayTheme, _Theme);
        function OverlayTheme(options) {
          _classCallCheck(this, OverlayTheme);
          var _this = _possibleConstructorReturn(this, (OverlayTheme.__proto__ || Object.getPrototypeOf(OverlayTheme)).call(this));
          _this.name = 'OverlayTheme';
          var defaultOptions = {
            color: '#2D2E82',
            duration: 600,
            direction: 'to-right'
          };
          _this.options = _extends({}, defaultOptions, options);
          return _this;
        }
        _createClass(OverlayTheme, [{
          key: 'mount',
          value: function mount() {
            this.applyStyles(_index2["default"]);
            this.applyHTML('\n\t\t\t<div class="swup-transition-overlay"\n\t\t\tstyle="background: ' + this.options.color + '; transition-duration: ' + this.options.duration + 'ms"\n\t\t\tdata-direction="' + this.options.direction + '"></div>\n\t\t');
          }
        }]);
        return OverlayTheme;
      }(_theme2["default"]);
      exports["default"] = OverlayTheme;

      /***/
    }, /* 2 */
    /***/function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var Theme = function () {
        function Theme() {
          var _this = this;
          _classCallCheck(this, Theme);
          this._addedStyleElements = [];
          this._addedHTMLContent = [];
          this._classNameAddedToElements = [];
          this._addClassNameToElement = function () {
            _this._classNameAddedToElements.forEach(function (item) {
              var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
              elements.forEach(function (element) {
                element.classList.add('swup-transition-' + item.name);
              });
            });
          };
          this.isSwupPlugin = true;
        }
        _createClass(Theme, [{
          key: '_beforeMount',
          value: function _beforeMount() {
            // save original and replace animationSelector option
            this._originalAnimationSelectorOption = String(this.swup.options.animationSelector);
            this.swup.options.animationSelector = '[class*="swup-transition-"]';

            // add classes after each content replace
            this.swup.on('contentReplaced', this._addClassNameToElement);
          }
        }, {
          key: '_afterUnmount',
          value: function _afterUnmount() {
            // reset animationSelector option
            this.swup.options.animationSelector = this._originalAnimationSelectorOption;

            // remove added styles
            this._addedStyleElements.forEach(function (element) {
              element.outerHTML = '';
              element = null;
            });

            // remove added HTML
            this._addedHTMLContent.forEach(function (element) {
              element.outerHTML = '';
              element = null;
            });

            // remove added classnames
            this._classNameAddedToElements.forEach(function (item) {
              var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
              elements.forEach(function (element) {
                element.className.split(' ').forEach(function (classItem) {
                  if (new RegExp('^swup-transition-').test(classItem)) {
                    element.classList.remove(classItem);
                  }
                });
              });
            });
            this.swup.off('contentReplaced', this._addClassNameToElement);
          }
        }, {
          key: 'mount',
          value: function mount() {
            // this is mount method rewritten by class extending
            // and is executed when swup is enabled with theme
          }
        }, {
          key: 'unmount',
          value: function unmount() {
            // this is unmount method rewritten by class extending
            // and is executed when swup with theme is disabled
          }
        }, {
          key: 'applyStyles',
          value: function applyStyles(styles) {
            var head = document.head;
            var style = document.createElement('style');
            style.setAttribute('data-swup-theme', '');
            style.appendChild(document.createTextNode(styles));
            this._addedStyleElements.push(style);
            head.prepend(style);
          }
        }, {
          key: 'applyHTML',
          value: function applyHTML(content) {
            var element = document.createElement('div');
            element.innerHTML = content;
            this._addedHTMLContent.push(element);
            document.body.appendChild(element);
          }
        }, {
          key: 'addClassName',
          value: function addClassName(selector, name) {
            // save so it can be later removed
            this._classNameAddedToElements.push({
              selector: selector,
              name: name
            });

            // add class the first time
            this._addClassNameToElement();
          }

          // this is here so we can tell if plugin was created by extending this class
        }]);

        return Theme;
      }();
      exports["default"] = Theme;

      /***/
    }, /* 3 */
    /***/function (module, exports, __nested_webpack_require_14851__) {
      exports = module.exports = __nested_webpack_require_14851__(4)(false);
      // Module
      exports.push([module.i, ".swup-transition-overlay {\n  opacity: 0;\n  z-index: 9999;\n  position: fixed;\n  pointer-events: none;\n  transition-property: transform;\n}\nhtml.is-changing .swup-transition-overlay {\n  opacity: 1;\n}\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-right\"],\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-left\"],\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-bottom\"],\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-top\"] {\n  transition-delay: 0.2s;\n}\n.swup-transition-overlay[data-direction=\"to-right\"],\n.swup-transition-overlay[data-direction=\"to-left\"] {\n  top: 0;\n  bottom: 0;\n  left: -10%;\n  right: -10%;\n  width: 120vw;\n  height: 100vh;\n}\n.swup-transition-overlay[data-direction=\"to-right\"] {\n  transform: translate3d(-120%, 0, 0) skewX(5deg);\n}\nhtml.is-animating .swup-transition-overlay[data-direction=\"to-right\"] {\n  transform: translate3d(0, 0, 0) skewX(5deg);\n}\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-right\"] {\n  transform: translate3d(120%, 0, 0) skewX(5deg);\n}\n.swup-transition-overlay[data-direction=\"to-left\"] {\n  transform: translate3d(120%, 0, 0) skewX(-5deg);\n}\nhtml.is-animating .swup-transition-overlay[data-direction=\"to-left\"] {\n  transform: translate3d(0, 0, 0) skewX(-5deg);\n}\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-left\"] {\n  transform: translate3d(-120%, 0, 0) skewX(-5deg);\n}\n.swup-transition-overlay[data-direction=\"to-top\"],\n.swup-transition-overlay[data-direction=\"to-bottom\"] {\n  top: -10%;\n  bottom: -10%;\n  left: 0;\n  right: 0;\n  width: 100vw;\n  height: 120vh;\n}\n.swup-transition-overlay[data-direction=\"to-bottom\"] {\n  transform: translate3d(0, -120%, 0) skewY(5deg);\n}\nhtml.is-animating .swup-transition-overlay[data-direction=\"to-bottom\"] {\n  transform: translate3d(0, 0, 0) skewY(5deg);\n}\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-bottom\"] {\n  transform: translate3d(0, 120%, 0) skewY(5deg);\n}\n.swup-transition-overlay[data-direction=\"to-top\"] {\n  transform: translate3d(0, 120%, 0) skewY(-5deg);\n}\nhtml.is-animating .swup-transition-overlay[data-direction=\"to-top\"] {\n  transform: translate3d(0, 0, 0) skewY(-5deg);\n}\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-top\"] {\n  transform: translate3d(0, -120%, 0) skewY(-5deg);\n}\n", ""]);

      /***/
    }, /* 4 */
    /***/function (module, exports, __webpack_require__) {
      "use strict";

      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      module.exports = function (useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
              return '@media ' + item[2] + '{' + content + '}';
            } else {
              return content;
            }
          }).join('');
        }; // import a list of modules into the list

        list.i = function (modules, mediaQuery) {
          if (typeof modules === 'string') {
            modules = [[null, modules, '']];
          }
          var alreadyImportedModules = {};
          for (var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
          for (i = 0; i < modules.length; i++) {
            var item = modules[i]; // skip already imported module
            // this implementation is not 100% perfect for weird media query combinations
            // when a module is imported multiple times with different media queries.
            // I hope this will never occur (Hey this way we have smaller bundles)

            if (item[0] == null || !alreadyImportedModules[item[0]]) {
              if (mediaQuery && !item[2]) {
                item[2] = mediaQuery;
              } else if (mediaQuery) {
                item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
              }
              list.push(item);
            }
          }
        };
        return list;
      };
      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || '';
        var cssMapping = item[3];
        if (!cssMapping) {
          return content;
        }
        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
          });
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }
        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)

      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
        return '/*# ' + data + ' */';
      }

      /***/
    }
    /******/])
  );
});

/***/ }),

/***/ "./node_modules/@swup/slide-theme/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@swup/slide-theme/lib/index.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};
      /******/
      /******/ // The require function
      /******/
      function __nested_webpack_require_1079__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1079__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __nested_webpack_require_1079__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/
      __nested_webpack_require_1079__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/
      __nested_webpack_require_1079__.d = function (exports, name, getter) {
        /******/if (!__nested_webpack_require_1079__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/
      __nested_webpack_require_1079__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/
      __nested_webpack_require_1079__.t = function (value, mode) {
        /******/if (mode & 1) value = __nested_webpack_require_1079__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __nested_webpack_require_1079__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __nested_webpack_require_1079__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/
      __nested_webpack_require_1079__.n = function (module) {
        /******/var getter = module && module.__esModule ? /******/function getDefault() {
          return module['default'];
        } : /******/function getModuleExports() {
          return module;
        };
        /******/
        __nested_webpack_require_1079__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/
      __nested_webpack_require_1079__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/
      __nested_webpack_require_1079__.p = "";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/
      return __nested_webpack_require_1079__(__nested_webpack_require_1079__.s = 0);
      /******/
    }
    /************************************************************************/
    /******/([/* 0 */
    /***/function (module, exports, __nested_webpack_require_5415__) {
      "use strict";

      var _index = __nested_webpack_require_5415__(1);
      var _index2 = _interopRequireDefault(_index);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module.exports = _index2["default"]; // this is here for webpack to expose SwupTheme as window.SwupTheme

      /***/
    }, /* 1 */
    /***/function (module, exports, __nested_webpack_require_5865__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _theme = __nested_webpack_require_5865__(2);
      var _theme2 = _interopRequireDefault(_theme);
      var _index = __nested_webpack_require_5865__(3);
      var _index2 = _interopRequireDefault(_index);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var SlideTheme = function (_Theme) {
        _inherits(SlideTheme, _Theme);
        function SlideTheme(options) {
          _classCallCheck(this, SlideTheme);
          var _this = _possibleConstructorReturn(this, (SlideTheme.__proto__ || Object.getPrototypeOf(SlideTheme)).call(this));
          _this.name = 'SlideTheme';
          var defaultOptions = {
            mainElement: '#swup',
            reversed: false
          };
          _this.options = _extends({}, defaultOptions, options);
          return _this;
        }
        _createClass(SlideTheme, [{
          key: 'mount',
          value: function mount() {
            this.applyStyles(_index2["default"]);
            this.addClassName(this.options.mainElement, 'main');
            if (this.options.reversed) {
              document.documentElement.classList.add('swup-theme-reverse');
            }
          }
        }, {
          key: 'unmount',
          value: function unmount() {
            document.documentElement.classList.remove('swup-theme-reverse');
          }
        }]);
        return SlideTheme;
      }(_theme2["default"]);
      exports["default"] = SlideTheme;

      /***/
    }, /* 2 */
    /***/function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var Theme = function () {
        function Theme() {
          var _this = this;
          _classCallCheck(this, Theme);
          this._addedStyleElements = [];
          this._addedHTMLContent = [];
          this._classNameAddedToElements = [];
          this._addClassNameToElement = function () {
            _this._classNameAddedToElements.forEach(function (item) {
              var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
              elements.forEach(function (element) {
                element.classList.add('swup-transition-' + item.name);
              });
            });
          };
          this.isSwupPlugin = true;
        }
        _createClass(Theme, [{
          key: '_beforeMount',
          value: function _beforeMount() {
            // save original and replace animationSelector option
            this._originalAnimationSelectorOption = String(this.swup.options.animationSelector);
            this.swup.options.animationSelector = '[class*="swup-transition-"]';
          }
        }, {
          key: '_afterUnmount',
          value: function _afterUnmount() {
            // reset animationSelector option
            this.swup.options.animationSelector = this._originalAnimationSelectorOption;

            // remove added styles
            this._addedStyleElements.forEach(function (element) {
              element.outerHTML = '';
              element = null;
            });

            // remove added HTML
            this._addedHTMLContent.forEach(function (element) {
              element.outerHTML = '';
              element = null;
            });

            // remove added classnames
            this._classNameAddedToElements.forEach(function (item) {
              var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
              elements.forEach(function (element) {
                element.className.split(' ').forEach(function (classItem) {
                  if (new RegExp('^swup-transition-').test(classItem)) {
                    element.classList.remove(classItem);
                  }
                });
              });
            });
            this.swup.off('contentReplaced', this._addClassNameToElement);
          }
        }, {
          key: 'mount',
          value: function mount() {
            // this is mount method rewritten by class extending
            // and is executed when swup is enabled with theme
          }
        }, {
          key: 'unmount',
          value: function unmount() {
            // this is unmount method rewritten by class extending
            // and is executed when swup with theme is disabled
          }
        }, {
          key: 'applyStyles',
          value: function applyStyles(styles) {
            var head = document.head;
            var style = document.createElement('style');
            style.setAttribute('data-swup-theme', '');
            style.appendChild(document.createTextNode(styles));
            this._addedStyleElements.push(style);
            head.prepend(style);
          }
        }, {
          key: 'applyHTML',
          value: function applyHTML(content) {
            var element = document.createElement('div');
            element.innerHTML = content;
            this._addedHTMLContent.push(element);
            document.body.appendChild(element);
          }
        }, {
          key: 'addClassName',
          value: function addClassName(selector, name) {
            this._classNameAddedToElements.push({
              selector: selector,
              name: name
            });

            // save so it can be later removed
            this._addClassNameToElement();
            this.swup.on('contentReplaced', this._addClassNameToElement);
          }

          // this is here so we can tell if plugin was created by extending this class
        }]);

        return Theme;
      }();
      exports["default"] = Theme;

      /***/
    }, /* 3 */
    /***/function (module, exports, __nested_webpack_require_14813__) {
      exports = module.exports = __nested_webpack_require_14813__(4)(false);
      // Module
      exports.push([module.i, ".swup-transition-main {\n  opacity: 1;\n  transition: opacity 0.3s, transform 0.4s;\n  transform: translate3d(0, 0, 0);\n}\nhtml.is-animating .swup-transition-main {\n  opacity: 0;\n  transform: translate3d(0, -60px, 0);\n}\nhtml.is-animating.is-leaving .swup-transition-main {\n  opacity: 0;\n  transform: translate3d(0, 60px, 0);\n}\nhtml.is-animating.swup-theme-reverse .swup-transition-main {\n  opacity: 0;\n  transform: translate3d(0, 60px, 0);\n}\nhtml.is-animating.swup-theme-reverse.is-leaving .swup-transition-main {\n  opacity: 0;\n  transform: translate3d(0, -60px, 0);\n}\n", ""]);

      /***/
    }, /* 4 */
    /***/function (module, exports, __webpack_require__) {
      "use strict";

      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      module.exports = function (useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
              return '@media ' + item[2] + '{' + content + '}';
            } else {
              return content;
            }
          }).join('');
        }; // import a list of modules into the list

        list.i = function (modules, mediaQuery) {
          if (typeof modules === 'string') {
            modules = [[null, modules, '']];
          }
          var alreadyImportedModules = {};
          for (var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
          for (i = 0; i < modules.length; i++) {
            var item = modules[i]; // skip already imported module
            // this implementation is not 100% perfect for weird media query combinations
            // when a module is imported multiple times with different media queries.
            // I hope this will never occur (Hey this way we have smaller bundles)

            if (item[0] == null || !alreadyImportedModules[item[0]]) {
              if (mediaQuery && !item[2]) {
                item[2] = mediaQuery;
              } else if (mediaQuery) {
                item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
              }
              list.push(item);
            }
          }
        };
        return list;
      };
      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || '';
        var cssMapping = item[3];
        if (!cssMapping) {
          return content;
        }
        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
          });
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }
        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)

      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
        return '/*# ' + data + ' */';
      }

      /***/
    }
    /******/])
  );
});

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url["default"] : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/focus-options-polyfill/index.js":
/*!******************************************************!*\
  !*** ./node_modules/focus-options-polyfill/index.js ***!
  \******************************************************/
/***/ (() => {

// focus - focusOptions - preventScroll polyfill
(function () {
  if (typeof window === "undefined" || typeof document === "undefined" || typeof HTMLElement === "undefined") {
    return;
  }
  var supportsPreventScrollOption = false;
  try {
    var focusElem = document.createElement("div");
    focusElem.addEventListener("focus", function (event) {
      event.preventDefault();
      event.stopPropagation();
    }, true);
    focusElem.focus(Object.defineProperty({}, "preventScroll", {
      get: function get() {
        // Edge v18 gives a false positive for supporting inputs
        if (navigator && typeof navigator.userAgent !== 'undefined' && navigator.userAgent && navigator.userAgent.match(/Edge\/1[7-8]/)) {
          return supportsPreventScrollOption = false;
        }
        supportsPreventScrollOption = true;
      }
    }));
  } catch (e) {}
  if (HTMLElement.prototype.nativeFocus === undefined && !supportsPreventScrollOption) {
    HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;
    var calcScrollableElements = function calcScrollableElements(element) {
      var parent = element.parentNode;
      var scrollableElements = [];
      var rootScrollingElement = document.scrollingElement || document.documentElement;
      while (parent && parent !== rootScrollingElement) {
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
          scrollableElements.push([parent, parent.scrollTop, parent.scrollLeft]);
        }
        parent = parent.parentNode;
      }
      parent = rootScrollingElement;
      scrollableElements.push([parent, parent.scrollTop, parent.scrollLeft]);
      return scrollableElements;
    };
    var restoreScrollPosition = function restoreScrollPosition(scrollableElements) {
      for (var i = 0; i < scrollableElements.length; i++) {
        scrollableElements[i][0].scrollTop = scrollableElements[i][1];
        scrollableElements[i][0].scrollLeft = scrollableElements[i][2];
      }
      scrollableElements = [];
    };
    var patchedFocus = function patchedFocus(args) {
      if (args && args.preventScroll) {
        var evScrollableElements = calcScrollableElements(this);
        if (typeof setTimeout === 'function') {
          var thisElem = this;
          setTimeout(function () {
            thisElem.nativeFocus();
            restoreScrollPosition(evScrollableElements);
          }, 0);
        } else {
          this.nativeFocus();
          restoreScrollPosition(evScrollableElements);
        }
      } else {
        this.nativeFocus();
      }
    };
    HTMLElement.prototype.focus = patchedFocus;
  }
})();

/***/ }),

/***/ "./node_modules/on-demand-live-region/on-demand-live-region.js":
/*!*********************************************************************!*\
  !*** ./node_modules/on-demand-live-region/on-demand-live-region.js ***!
  \*********************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* global define */

(function (global) {
  'use strict';

  // Constructor
  function OnDemandLiveRegion(options) {
    options = options || {};

    // The default settings for the module.
    this.settings = {
      level: 'polite',
      parent: 'body',
      idPrefix: 'live-region-',
      delay: 0
    };

    // Overwrite defaults where they are provided in options
    for (var setting in options) {
      if (options.hasOwnProperty(setting)) {
        this.settings[setting] = options[setting];
      }
    }

    // Cast parent as DOM node
    this.settings.parent = document.querySelector(this.settings.parent);
  }

  // 'Say' method
  OnDemandLiveRegion.prototype.say = function (thingToSay, delay) {
    // Get rid of old live region if it exists
    var oldRegion = this.settings.parent.querySelector('[id^="' + this.settings.idPrefix + '"]') || false;
    if (oldRegion) {
      this.settings.parent.removeChild(oldRegion);
    }

    // Did an override level get set?
    delay = delay || this.settings.delay;

    // Create fresh live region
    this.currentRegion = document.createElement('span');
    this.currentRegion.id = this.settings.idPrefix + Math.floor(Math.random() * 10000);

    // Determine redundant role
    var role = this.settings.level !== 'assertive' ? 'status' : 'alert';

    // Add role and aria-live attribution
    this.currentRegion.setAttribute('aria-live', this.settings.level);
    this.currentRegion.setAttribute('role', role);

    // Hide live region element, but not from assistive technologies
    this.currentRegion.setAttribute('style', 'clip: rect(1px, 1px, 1px, 1px); height: 1px; overflow: hidden; position: absolute; white-space: nowrap; width: 1px');

    // Add live region to its designated parent
    this.settings.parent.appendChild(this.currentRegion);

    // Populate live region to trigger it
    window.setTimeout(function () {
      this.currentRegion.textContent = thingToSay;
    }.bind(this), delay);
    return this;
  };

  // Export OnDemandLiveRegion
  if ( true && typeof module.exports !== 'undefined') {
    module.exports = OnDemandLiveRegion;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return OnDemandLiveRegion;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);

/***/ }),

/***/ "./src/scripts/gallery.js":
/*!********************************!*\
  !*** ./src/scripts/gallery.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ galleryScript)
/* harmony export */ });
function galleryScript() {
  var htmlElement = document.querySelector("html");
  var totalRows = getComputedStyle(htmlElement).getPropertyValue("--number-of-gallery-columns"),
    itemCol = 0;
  for (var rowCount = 0; rowCount < totalRows; rowCount++) {
    var newCol = document.createElement("div");
    newCol.className = "column";
    document.getElementsByClassName("masonry-layout")[0].appendChild(newCol);
  }
  for (var itemCount = 0; itemCount < document.querySelectorAll(".masonry-layout .image").length; itemCount++) {
    document.getElementsByClassName("column")[itemCol].appendChild(document.querySelectorAll(".masonry-layout .image")[0]);
    if (itemCol < totalRows - 1) {
      itemCol++;
    } else {
      itemCol = 0;
    }
  }
  /* #endregion */

  /* #region  image pop up events */
  var allImages = document.querySelectorAll(".masonry-layout .image");
  var imagePopUpContainerElement = document.querySelector(".image-pop-up");
  var imgElement = imagePopUpContainerElement.querySelector("img");
  var highlightImagePopUp = function highlightImagePopUp(event) {
    imgElement.src = event.target.src;
    imagePopUpContainerElement.classList.remove("hidden");
    imagePopUpContainerElement.classList.add("active");
    imgElement.classList.add("animate");
    setTimeout(function () {
      imgElement.classList.remove("animate");
    }, 300);
  };
  var hideImagePopUp = function hideImagePopUp() {
    imagePopUpContainerElement.classList.remove("active");
    setTimeout(function () {
      return imagePopUpContainerElement.classList.add("hidden");
    }, 300);
  };
  allImages.forEach(function (image) {
    return image.addEventListener("click", highlightImagePopUp);
  });
  imagePopUpContainerElement.addEventListener("click", hideImagePopUp);
  setTimeout(function () {
    var websiteName = document.querySelector("#website-name").className;
    if (websiteName === "gallery") document.querySelector("#gallery").classList.remove("loading-images");
  }, 5000);
}

/***/ }),

/***/ "./src/scripts/headers.js":
/*!********************************!*\
  !*** ./src/scripts/headers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initHeaders: () => (/* binding */ initHeaders),
/* harmony export */   initSecondaryNavMenuAgain: () => (/* binding */ initSecondaryNavMenuAgain)
/* harmony export */ });
var htmlElement = document.querySelector("html");
var menuOpenerElement = document.querySelector("header nav .hamburger");
var closeNavMenuElement = document.querySelector(".menu-popup .close-button");
var headerElement = document.querySelector("header");
function initSecondaryNavMenu() {
  function openNavMenu() {
    var navMenuElement = document.querySelector(".menu-popup");
    navMenuElement.classList.remove("hidden");
    setTimeout(function () {
      return navMenuElement.classList.remove("hidden-content");
    }, 300);
  }
  function closeNavMenu() {
    var navMenuElement = document.querySelector(".menu-popup");
    navMenuElement.classList.add("hidden-content");
    setTimeout(function () {
      return navMenuElement.classList.add("hidden");
    }, 200);
  }
  var menuLinks = document.querySelectorAll(".menu-popup a, .menu-popup .btn");
  menuLinks.forEach(function (link) {
    return link.addEventListener("click", closeNavMenu);
  });
  menuOpenerElement.addEventListener("click", openNavMenu);
  closeNavMenuElement.addEventListener("click", closeNavMenu);
}
function minimizeHeaderOnScroll() {
  var checkForMinimizedHeader = function checkForMinimizedHeader() {
    if (window.scrollY == 0) {
      //user is at the top of the page; no need to show the back to top button
      headerElement.classList.remove("scroll");
    } else {
      headerElement.classList.add("scroll");
    }
  };
  checkForMinimizedHeader();
  window.addEventListener("scroll", checkForMinimizedHeader);
}
function initSecondaryNavMenuAgain() {
  var closeNavMenuElement = document.querySelector(".menu-popup .close-button");
  function closeNavMenu() {
    var navMenuElement = document.querySelector(".menu-popup");
    navMenuElement.classList.add("hidden-content");
    setTimeout(function () {
      return navMenuElement.classList.add("hidden");
    }, 200);
  }
  closeNavMenuElement.addEventListener("click", closeNavMenu);
}
function initHeaders() {
  initSecondaryNavMenu();
  minimizeHeaderOnScroll();
}

/***/ }),

/***/ "./src/scripts/menus.js":
/*!******************************!*\
  !*** ./src/scripts/menus.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menusScript)
/* harmony export */ });
function menusScript() {
  var menusNavElement = document.querySelector("main #website-name.menus ~ .section-1 nav");
  var selectMenu = function selectMenu(menu) {
    menusNavElement.className = "menu-nav";
    setTimeout(function () {
      return menusNavElement.classList.add(menu);
    }, 200);
  };
  menusNavElement.querySelector(".breakfast").addEventListener("click", function () {
    return selectMenu("breakfast");
  });
  menusNavElement.querySelector(".lunch").addEventListener("click", function () {
    return selectMenu("lunch");
  });
  menusNavElement.querySelector(".dinner").addEventListener("click", function () {
    return selectMenu("dinner");
  });
  menusNavElement.querySelector(".drinks").addEventListener("click", function () {
    return selectMenu("drinks");
  });
}

/***/ }),

/***/ "./src/scripts/navElementsHighlighting.js":
/*!************************************************!*\
  !*** ./src/scripts/navElementsHighlighting.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ selectCurrentNavElement)
/* harmony export */ });
var deselectAllNavElements = function deselectAllNavElements() {
  var allNavElements = document.querySelectorAll("nav .nav-section-element, nav ul li");
  allNavElements.forEach(function (navElement) {
    navElement.classList.remove("selected");
  });
};
function selectCurrentNavElement() {
  var websiteName = document.querySelector("#website-name").className;
  deselectAllNavElements();
  switch (websiteName) {
    case "home":
      document.querySelector(".nav-section-element.home").classList.add("selected");
      document.querySelector(".menu-popup nav ul li.home").classList.add("selected");
      break;
    case "about-us":
      document.querySelector(".nav-section-element.about-us").classList.add("selected");
      document.querySelector(".menu-popup nav ul li.about-us").classList.add("selected");
      break;
    case "menus":
      document.querySelector(".nav-section-element.menus").classList.add("selected");
      document.querySelector(".menu-popup nav ul li.menus").classList.add("selected");
      break;
    case "gallery":
      document.querySelector(".nav-section-element.gallery").classList.add("selected");
      document.querySelector(".menu-popup nav ul li.gallery").classList.add("selected");
      break;
    case "contact":
      document.querySelector(".nav-section-element.contact").classList.add("selected");
      document.querySelector(".menu-popup nav ul li.contact").classList.add("selected");
      break;
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/about-us-style.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/about-us-style.scss ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/about-us.jpg */ "./src/assets/images/about-us.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/image-8.jpg */ "./src/assets/images/image-8.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images//chef.jpg */ "./src/assets/images/chef.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "main #website-name.about-us ~ .top-section .background-image {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") !important;\n  background-size: cover !important;\n}\nmain #website-name.about-us ~ .section-1 .image {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") !important;\n  background-size: 130% !important;\n}\nmain #website-name.about-us ~ .section-2 {\n  background-color: #dadfe3 !important;\n  color: #212529 !important;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n}\nmain #website-name.about-us ~ .section-2 .quote-marks {\n  width: 100%;\n  font-size: 100px;\n  font-family: \"Secular One\";\n  text-align: center;\n  color: #faa836;\n}\nmain #website-name.about-us ~ .section-2 .quote {\n  font-size: 2rem;\n  text-align: center;\n  width: 80%;\n  transform: translate(0, -30px);\n}\nmain #website-name.about-us ~ .section-2 .quote-author {\n  font-size: 1.5rem;\n  opacity: 0.8;\n}\nmain #website-name.about-us ~ .section-3 {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n  color: var(--text-color);\n  background-color: var(--color1);\n}\nmain #website-name.about-us ~ .section-3 .header {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: center;\n  text-align: center;\n  width: 90%;\n}\nmain #website-name.about-us ~ .section-3 .header .title {\n  font-size: 2.5rem;\n  font-weight: 500;\n}\nmain #website-name.about-us ~ .section-3 .header .text {\n  font-size: 1.1rem;\n  opacity: 0.8;\n}\nmain #website-name.about-us ~ .section-3 .content {\n  display: flex;\n  flex-direction: column-reverse;\n  gap: 30px;\n  width: 90%;\n}\nmain #website-name.about-us ~ .section-3 .content {\n  display: flex;\n  flex-direction: column-reverse;\n  gap: 30px;\n  width: 90%;\n}\nmain #website-name.about-us ~ .section-3 .content .text h1 {\n  font-size: min(7vw, 2rem);\n  margin-bottom: 20px;\n}\nmain #website-name.about-us ~ .section-3 .content .text p {\n  font-size: 1.1rem;\n  opacity: 0.8;\n}\nmain #website-name.about-us ~ .section-3 .content .image {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-position: 20%;\n  width: 90vw;\n  aspect-ratio: 16/12;\n}\n\n@media only screen and (min-width: 800px) {\n  main #website-name.about-us ~ .section-2 .quote {\n    width: 60%;\n  }\n  main #website-name.about-us ~ .section-3 {\n    padding-bottom: 80px;\n  }\n  main #website-name.about-us ~ .section-3 .header {\n    width: 40%;\n  }\n  main #website-name.about-us ~ .section-3 .content {\n    flex-direction: row;\n    gap: 9vw;\n    justify-content: center;\n    align-items: center;\n  }\n  main #website-name.about-us ~ .section-3 .content .text,\n  main #website-name.about-us ~ .section-3 .content .image {\n    width: min(45%, 600px);\n  }\n  main #website-name.about-us ~ .section-3 .content .text p {\n    font-size: min(1.3vw, 1.5rem);\n  }\n  main #website-name.about-us ~ .section-3 .content .image {\n    box-shadow: 50px 40px 10px rgba(255, 255, 255, 0.6);\n  }\n}\n@media only screen and (min-width: 1200px) {\n  main #website-name.about-us ~ .top-section .slogan {\n    top: 20%;\n    left: 87%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/scss/about-us-style.scss"],"names":[],"mappings":"AACE;EACE,oEAAA;EACA,iCAAA;AAAJ;AAEE;EACE,oEAAA;EACA,gCAAA;AAAJ;AAEE;EACE,oCAAA;EACA,yBAAA;EACA,iBAAA;EACA,oBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;AADJ;AAGI;EACE,WAAA;EAEA,gBAAA;EACA,0BAAA;EACA,kBAAA;EAEA,cAAA;AAHN;AAKI;EACE,eAAA;EACA,kBAAA;EAEA,UAAA;EACA,8BAAA;AAJN;AAMI;EACE,iBAAA;EACA,YAAA;AAJN;AAOE;EACE,iBAAA;EACA,oBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EAEA,wBAAA;EACA,+BAAA;AAPJ;AASI;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;AAPN;AASM;EACE,iBAAA;EACA,gBAAA;AAPR;AASM;EACE,iBAAA;EACA,YAAA;AAPR;AAUI;EACE,aAAA;EACA,8BAAA;EACA,SAAA;EACA,UAAA;AARN;AAWE;EACE,aAAA;EACA,8BAAA;EACA,SAAA;EACA,UAAA;AATJ;AAWM;EACE,yBAAA;EACA,mBAAA;AATR;AAWM;EACE,iBAAA;EACA,YAAA;AATR;AAYI;EACE,yDAAA;EACA,sBAAA;EACA,wBAAA;EACA,WAAA;EACA,mBAAA;AAVN;;AAcA;EAEI;IACE,UAAA;EAZJ;EAcE;IACE,oBAAA;EAZJ;EAaI;IACE,UAAA;EAXN;EAaI;IACE,mBAAA;IACA,QAAA;IACA,uBAAA;IACA,mBAAA;EAXN;EAYM;;IAEE,sBAAA;EAVR;EAYM;IACE,6BAAA;EAVR;EAYM;IACE,mDAAA;EAVR;AACF;AAeA;EAEI;IACE,QAAA;IACA,SAAA;EAdJ;AACF","sourcesContent":["main #website-name.about-us {\n  & ~ .top-section .background-image {\n    background-image: url(../../assets/images/about-us.jpg) !important;\n    background-size: cover !important;\n  }\n  & ~ .section-1 .image {\n    background-image: url(../../assets/images/image-8.jpg) !important;\n    background-size: 130% !important;\n  }\n  & ~ .section-2 {\n    background-color: #dadfe3 !important;\n    color: #212529 !important;\n    padding-top: 40px;\n    padding-bottom: 40px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n\n    .quote-marks {\n      width: 100%;\n\n      font-size: 100px;\n      font-family: \"Secular One\";\n      text-align: center;\n\n      color: #faa836;\n    }\n    .quote {\n      font-size: 2rem;\n      text-align: center;\n\n      width: 80%;\n      transform: translate(0, -30px);\n    }\n    .quote-author {\n      font-size: 1.5rem;\n      opacity: 0.8;\n    }\n  }\n  & ~ .section-3 {\n    padding-top: 40px;\n    padding-bottom: 40px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n\n    color: var(--text-color);\n    background-color: var(--color1);\n\n    .header {\n      display: flex;\n      flex-direction: column;\n      gap: 15px;\n      align-items: center;\n      text-align: center;\n      width: 90%;\n\n      .title {\n        font-size: 2.5rem;\n        font-weight: 500;\n      }\n      .text {\n        font-size: 1.1rem;\n        opacity: 0.8;\n      }\n    }\n    .content {\n      display: flex;\n      flex-direction: column-reverse;\n      gap: 30px;\n      width: 90%;\n    }\n  }\n  & ~ .section-3 .content {\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 30px;\n    width: 90%;\n    .text {\n      h1 {\n        font-size: min(7vw, 2rem);\n        margin-bottom: 20px;\n      }\n      p {\n        font-size: 1.1rem;\n        opacity: 0.8;\n      }\n    }\n    .image {\n      background-image: url(../../assets/images//chef.jpg);\n      background-size: cover;\n      background-position: 20%;\n      width: 90vw;\n      aspect-ratio: 16/12;\n    }\n  }\n}\n@media only screen and (min-width: 800px) {\n  main #website-name.about-us {\n    & ~ .section-2 .quote {\n      width: 60%;\n    }\n    & ~ .section-3 {\n      padding-bottom: 80px;\n      .header {\n        width: 40%;\n      }\n      .content {\n        flex-direction: row;\n        gap: 9vw;\n        justify-content: center;\n        align-items: center;\n        .text,\n        .image {\n          width: min(45%, 600px);\n        }\n        .text p {\n          font-size: min(1.3vw, 1.5rem);\n        }\n        .image {\n          box-shadow: 50px 40px 10px rgba(255, 255, 255, 0.6);\n        }\n      }\n    }\n  }\n}\n@media only screen and (min-width: 1200px) {\n  main #website-name.about-us {\n    & ~ .top-section .slogan {\n      top: 20%;\n      left: 87%;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/contact-style.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/contact-style.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/contact.jpg */ "./src/assets/images/contact.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "main #website-name.contact ~ .top-section .background-image {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: 30%;\n  background-position-x: 20%;\n}\nmain #website-name.contact ~ .section-1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  background-color: #e2dbd2;\n  color: #212529;\n}\nmain #website-name.contact ~ .section-1 .header {\n  text-align: center;\n}\nmain #website-name.contact ~ .section-1 .header .title {\n  font-size: 2rem;\n  margin-bottom: 10px;\n}\nmain #website-name.contact ~ .section-1 .header .text {\n  font-size: 1.1rem;\n  opacity: 0.6;\n}\nmain #website-name.contact ~ .section-1 .content {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\nmain #website-name.contact ~ .section-1 .content .contact-info {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\nmain #website-name.contact ~ .section-1 .content .contact-info .title {\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\nmain #website-name.contact ~ .section-1 .content .contact-info a {\n  color: #3952a4;\n  text-decoration: underline;\n}\nmain #website-name.contact ~ .section-1 .content .contact-info .address {\n  opacity: 0.6;\n}\nmain #website-name.contact ~ .section-1 .content form {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 100%;\n}\nmain #website-name.contact ~ .section-1 .content form .hidden {\n  width: 0;\n  overflow: hidden;\n  position: absolute;\n}\nmain #website-name.contact ~ .section-1 .content form .form-element {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 15px;\n  border-radius: 0;\n  border: 2px solid #8c8e9a;\n  background-color: transparent;\n  outline: none;\n  font-size: 1.5rem;\n}\nmain #website-name.contact ~ .section-1 .content form .form-element:focus-visible {\n  border-color: black;\n}\nmain #website-name.contact ~ .section-1 .content form input {\n  height: 50px;\n}\nmain #website-name.contact ~ .section-1 .content form textarea {\n  height: 300px;\n  margin-bottom: 10px;\n}\nmain #website-name.contact ~ .section-1 .content form .btn {\n  color: #171719;\n  border-color: #171719;\n  cursor: pointer;\n}\nmain #website-name.contact ~ .section-1 .content form .btn:hover {\n  color: white;\n}\nmain #website-name.contact ~ .section-1 .content form .btn::before {\n  background-color: #171719;\n}\nmain #website-name.contact ~ section#book-a-table {\n  display: flex;\n  flex-direction: column;\n  gap: 60px;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 60px;\n  background-color: hsl(200, 5%, 7%);\n  color: var(--text-color);\n}\nmain #website-name.contact ~ section#book-a-table .header {\n  text-align: center;\n  width: 85%;\n}\nmain #website-name.contact ~ section#book-a-table .header .title {\n  font-size: 2rem;\n  margin-bottom: 10px;\n}\nmain #website-name.contact ~ section#book-a-table .header .text {\n  font-size: 1.1rem;\n  opacity: 0.8;\n}\nmain #website-name.contact ~ section#book-a-table form {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  width: 90%;\n}\nmain #website-name.contact ~ section#book-a-table form .hidden {\n  width: 0;\n  overflow: hidden;\n  position: absolute;\n}\nmain #website-name.contact ~ section#book-a-table form .form-element {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 15px;\n  border-radius: 0;\n  border: 1px solid #8c8e9a;\n  background-color: #171719;\n  color: var(--text-color);\n  outline: none;\n  font-size: 1.5rem;\n}\nmain #website-name.contact ~ section#book-a-table form .form-element:focus-visible {\n  border-color: white;\n}\nmain #website-name.contact ~ section#book-a-table form .btn {\n  grid-column: 1/-1;\n  margin-top: 10px;\n  height: 60px;\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n\n@media only screen and (min-width: 800px) {\n  main #website-name.contact ~ .top-section .slogan {\n    top: 20%;\n  }\n  main #website-name.contact ~ .section-1 {\n    gap: 60px;\n    padding-bottom: 60px;\n  }\n  main #website-name.contact ~ .section-1 .content {\n    flex-direction: row-reverse;\n    gap: 40px;\n    width: 80%;\n  }\n  main #website-name.contact ~ .section-1 .content .contact-info {\n    gap: 40px;\n  }\n  main #website-name.contact ~ .section-1 .content form .btn {\n    width: calc(150px + 18vw);\n    height: 50px;\n    font-size: 1.1rem;\n    margin-top: 10px;\n  }\n  main #website-name.contact ~ section#book-a-table form {\n    width: min(85vw, 1700px);\n    grid-template-columns: 1fr 1fr;\n  }\n  main #website-name.contact ~ section#book-a-table form .btn {\n    width: 600px;\n    justify-self: center;\n    margin-top: 20px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/scss/contact-style.scss"],"names":[],"mappings":"AAeI;EACE,yDAAA;EACA,wBAAA;EACA,0BAAA;AAdN;AAiBE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;EACA,yBArBiB;EAsBjB,cA3BM;AAYV;AAgBI;EACE,kBAAA;AAdN;AAeM;EACE,eAAA;EACA,mBAAA;AAbR;AAeM;EACE,iBAAA;EACA,YAAA;AAbR;AAgBI;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAdN;AAeM;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAbR;AAcQ;EACE,yBAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AAZV;AAcQ;EACE,cArDA;EAsDA,0BAAA;AAZV;AAcQ;EACE,YAAA;AAZV;AAeM;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,WAAA;AAbR;AAcQ;EACE,QAAA;EACA,gBAAA;EACA,kBAAA;AAZV;AAcQ;EACE,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,aAAA;EACA,gBAAA;EACA,yBAAA;EACA,6BAzEW;EA0EX,aAAA;EACA,iBAAA;AAZV;AAaU;EACE,mBA1EK;AA+DjB;AAcQ;EACE,YAAA;AAZV;AAcQ;EACE,aAAA;EACA,mBAAA;AAZV;AAcQ;EACE,cA5FA;EA6FA,qBArFO;EAsFP,eAAA;AAZV;AAaU;EACE,YA/FF;AAoFV;AAaU;EACE,yBA9FS;AAmFrB;AAiBE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;EACA,kCA1GiB;EA2GjB,wBA/GM;AAgGV;AAgBI;EACE,kBAAA;EACA,UAAA;AAdN;AAeM;EACE,eAAA;EACA,mBAAA;AAbR;AAeM;EACE,iBAAA;EACA,YAAA;AAbR;AAgBI;EACE,kBAAA;EACA,aAAA;EACA,0BAAA;EACA,SAAA;EACA,UAAA;AAdN;AAeM;EACE,QAAA;EACA,gBAAA;EACA,kBAAA;AAbR;AAeM;EACE,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,aAAA;EACA,gBAAA;EACA,yBAAA;EACA,yBA3Ia;EA4Ib,wBA/IE;EAgJF,aAAA;EACA,iBAAA;AAbR;AAcQ;EACE,mBA5IO;AAgIjB;AAeM;EACE,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;AAbR;;AAmBA;EAGM;IACE,QAAA;EAlBN;EAqBE;IACE,SAAA;IACA,oBAAA;EAnBJ;EAoBI;IACE,2BAAA;IACA,SAAA;IACA,UAAA;EAlBN;EAmBM;IACE,SAAA;EAjBR;EAoBQ;IACE,yBAAA;IACA,YAAA;IACA,iBAAA;IACA,gBAAA;EAlBV;EAwBI;IACE,wBAAA;IACA,8BAAA;EAtBN;EAuBM;IACE,YAAA;IACA,oBAAA;IACA,gBAAA;EArBR;AACF","sourcesContent":["$color_1: #212529;\n$color_2: #3952a4;\n$color_3: #171719;\n$color_4: white;\n$color_5: var(--text-color);\n$background-color_1: #e2dbd2;\n$background-color_2: transparent;\n$background-color_3: #171719;\n$background-color_4: hsl(200, 5%, 7%);\n$border-color_1: black;\n$border-color_2: #171719;\n$border-color_3: white;\n\nmain #website-name.contact ~ {\n  .top-section {\n    .background-image {\n      background-image: url(../../assets/images/contact.jpg);\n      background-position: 30%;\n      background-position-x: 20%;\n    }\n  }\n  .section-1 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n    background-color: $background-color_1;\n    color: $color_1;\n    .header {\n      text-align: center;\n      .title {\n        font-size: 2rem;\n        margin-bottom: 10px;\n      }\n      .text {\n        font-size: 1.1rem;\n        opacity: 0.6;\n      }\n    }\n    .content {\n      display: flex;\n      flex-direction: column;\n      gap: 30px;\n      .contact-info {\n        display: flex;\n        flex-direction: column;\n        gap: 20px;\n        .title {\n          text-transform: uppercase;\n          font-size: 1.2rem;\n          font-weight: 500;\n          margin-bottom: 5px;\n        }\n        a {\n          color: $color_2;\n          text-decoration: underline;\n        }\n        .address {\n          opacity: 0.6;\n        }\n      }\n      form {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        gap: 20px;\n        width: 100%;\n        .hidden {\n          width: 0;\n          overflow: hidden;\n          position: absolute;\n        }\n        .form-element {\n          position: relative;\n          box-sizing: border-box;\n          width: 100%;\n          padding: 15px;\n          border-radius: 0;\n          border: 2px solid #8c8e9a;\n          background-color: $background-color_2;\n          outline: none;\n          font-size: 1.5rem;\n          &:focus-visible {\n            border-color: $border-color_1;\n          }\n        }\n        input {\n          height: 50px;\n        }\n        textarea {\n          height: 300px;\n          margin-bottom: 10px;\n        }\n        .btn {\n          color: $color_3;\n          border-color: $border-color_2;\n          cursor: pointer;\n          &:hover {\n            color: $color_4;\n          }\n          &::before {\n            background-color: $background-color_3;\n          }\n        }\n      }\n    }\n  }\n  section#book-a-table {\n    display: flex;\n    flex-direction: column;\n    gap: 60px;\n    align-items: center;\n    padding-top: 40px;\n    padding-bottom: 60px;\n    background-color: $background-color_4;\n    color: $color_5;\n    .header {\n      text-align: center;\n      width: 85%;\n      .title {\n        font-size: 2rem;\n        margin-bottom: 10px;\n      }\n      .text {\n        font-size: 1.1rem;\n        opacity: 0.8;\n      }\n    }\n    form {\n      position: relative;\n      display: grid;\n      grid-template-columns: 1fr;\n      gap: 20px;\n      width: 90%;\n      .hidden {\n        width: 0;\n        overflow: hidden;\n        position: absolute;\n      }\n      .form-element {\n        position: relative;\n        box-sizing: border-box;\n        width: 100%;\n        padding: 15px;\n        border-radius: 0;\n        border: 1px solid #8c8e9a;\n        background-color: $background-color_3;\n        color: $color_5;\n        outline: none;\n        font-size: 1.5rem;\n        &:focus-visible {\n          border-color: $border-color_3;\n        }\n      }\n      .btn {\n        grid-column: 1 / -1;\n        margin-top: 10px;\n        height: 60px;\n        font-size: 1.1rem;\n        cursor: pointer;\n      }\n    }\n  }\n}\n\n@media only screen and (min-width: 800px) {\n  main #website-name.contact ~ {\n    .top-section {\n      .slogan {\n        top: 20%;\n      }\n    }\n    .section-1 {\n      gap: 60px;\n      padding-bottom: 60px;\n      .content {\n        flex-direction: row-reverse;\n        gap: 40px;\n        width: 80%;\n        .contact-info {\n          gap: 40px;\n        }\n        form {\n          .btn {\n            width: calc(150px + 18vw);\n            height: 50px;\n            font-size: 1.1rem;\n            margin-top: 10px;\n          }\n        }\n      }\n    }\n    section#book-a-table {\n      form {\n        width: min(85vw, 1700px);\n        grid-template-columns: 1fr 1fr;\n        .btn {\n          width: 600px;\n          justify-self: center;\n          margin-top: 20px;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/gallery-style.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/gallery-style.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/gallery.jpg */ "./src/assets/images/gallery.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes loading-animation {\n  0% {\n    left: -50%;\n  }\n  100% {\n    left: 150%;\n  }\n}\nhtml {\n  --number-of-gallery-columns: 2;\n}\n\nmain #website-name.gallery ~ .top-section .background-image {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\nmain #website-name.gallery ~ .section-1 {\n  gap: 0px;\n}\nmain #website-name.gallery ~ #gallery {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #c6ccc8;\n  color: #090a0b;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 5vw;\n  padding-right: 5vw;\n}\nmain #website-name.gallery ~ #gallery .header {\n  text-align: center;\n}\nmain #website-name.gallery ~ #gallery .header .title {\n  font-size: 2.5rem;\n  font-weight: 300;\n  margin-bottom: 20px;\n}\nmain #website-name.gallery ~ #gallery .header .text {\n  font-size: 1.2rem;\n  opacity: 0.7;\n  margin-bottom: 60px;\n}\nmain #website-name.gallery ~ #gallery .masonry-layout {\n  width: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 10px;\n}\nmain #website-name.gallery ~ #gallery .masonry-layout .column {\n  float: left;\n  width: calc(100% / var(--number-of-gallery-columns));\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\nmain #website-name.gallery ~ #gallery:not(.loading-images) .loading {\n  display: none;\n}\nmain #website-name.gallery ~ #gallery.loading-images .masonry-layout {\n  display: none !important;\n}\n\n.loading {\n  text-align: center;\n  width: min-content;\n}\n\n.loading__text {\n  font-weight: 500;\n  font-size: 2rem;\n  margin-bottom: 10px;\n}\n\n.loading__bar {\n  position: relative;\n  height: 5px;\n  width: 12rem;\n  background-color: rgb(169, 169, 169);\n  border-radius: 1em;\n  overflow: hidden;\n}\n.loading__bar::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  width: 50%;\n  height: 100%;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.3333333333), rgba(230, 230, 230, 0.891));\n  animation: loading-animation 1.3s infinite;\n  border-radius: 1em;\n}\n\nimg {\n  width: 100%;\n  aspect-ratio: auto;\n}\n\n.image-pop-up {\n  box-sizing: border-box;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  opacity: 0;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(0, 0, 0, 0.7);\n  object-fit: cover;\n  object-position: center;\n  transition: opacity 0.3s ease-out;\n  z-index: 11000;\n}\n.image-pop-up img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  object-fit: cover;\n  object-position: center;\n  max-width: 96%;\n  max-height: 96%;\n}\n\n.image-pop-up.hidden {\n  height: 0;\n}\n\n.image-pop-up.active {\n  padding-top: 30vh;\n  padding-bottom: 30vh;\n  opacity: 1;\n}\n\n@media only screen and (min-width: 800px) {\n  html {\n    --number-of-gallery-columns: 3;\n  }\n  main #website-name.gallery ~ #gallery {\n    padding-bottom: 80px;\n  }\n  main #website-name.gallery ~ #gallery .masonry-layout .column {\n    width: calc(80% / var(--number-of-gallery-columns));\n  }\n  main #website-name.gallery ~ #gallery .masonry-layout .column .image-1,\n  main #website-name.gallery ~ #gallery .masonry-layout .column .image-7,\n  main #website-name.gallery ~ #gallery .masonry-layout .column .image-25 {\n    aspect-ratio: 1;\n    object-fit: cover;\n  }\n  .image-pop-up img {\n    max-height: 50%;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  main #website-name.gallery ~ #gallery .header .title {\n    font-size: 4rem;\n  }\n  main #website-name.gallery ~ #gallery .header .text {\n    font-size: 2rem;\n  }\n  .image-pop-up img {\n    max-height: 70%;\n    max-width: 50%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/scss/gallery-style.scss"],"names":[],"mappings":"AAIA;EACE;IACE,UAAA;EAHF;EAKA;IACE,UAAA;EAHF;AACF;AAKA;EACE,8BAAA;AAHF;;AASQ;EACE,yDAAA;AANV;AASM;EACE,QAAA;AAPR;AASM;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBA7Ba;EA8Bb,cA/BE;EAgCF,iBAAA;EACA,oBAAA;EACA,iBAAA;EACA,kBAAA;AAPR;AAQQ;EACE,kBAAA;AANV;AAOU;EACE,iBAAA;EACA,gBAAA;EACA,mBAAA;AALZ;AAOU;EACE,iBAAA;EACA,YAAA;EACA,mBAAA;AALZ;AAQQ;EACE,WAAA;EACA,cAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AANV;AAOU;EACE,WAAA;EACA,oDAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AALZ;AASU;EACE,aAAA;AAPZ;AAYQ;EACE,wBAAA;AAVV;;AAgBA;EACE,kBAAA;EACA,kBAAA;AAbF;;AAeA;EACE,gBAAA;EACA,eAAA;EACA,mBAAA;AAZF;;AAcA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,oCA1FmB;EA2FnB,kBAAA;EACA,gBAAA;AAXF;AAYE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,iGAAA;EACA,0CAAA;EACA,kBAAA;AAVJ;;AAaA;EACE,WAAA;EACA,kBAAA;AAVF;;AAYA;EACE,sBAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,oCAtHmB;EAuHnB,iBAAA;EACA,uBAAA;EACA,iCAAA;EACA,cAAA;AATF;AAUE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,iBAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;AARJ;;AAWA;EACE,SAAA;AARF;;AAUA;EACE,iBAAA;EACA,oBAAA;EACA,UAAA;AAPF;;AASA;EACE;IACE,8BAAA;EANF;EASE;IACE,oBAAA;EAPJ;EASM;IACE,mDAAA;EAPR;EAQQ;;;IAGE,eAAA;IACA,iBAAA;EANV;EAcE;IACE,eAAA;EAZJ;AACF;AAeA;EAMY;IACE,eAAA;EAlBZ;EAoBU;IACE,eAAA;EAlBZ;EA0BE;IACE,eAAA;IACA,cAAA;EAxBJ;AACF","sourcesContent":["$color_1: #090a0b;\n$background-color_1: #c6ccc8;\n$background-color_2: rgb(169, 169, 169);\n$background-color_3: rgba(0, 0, 0, 0.7);\n@keyframes loading-animation {\n  0% {\n    left: -50%;\n  }\n  100% {\n    left: 150%;\n  }\n}\nhtml {\n  --number-of-gallery-columns: 2;\n}\nmain {\n  #website-name.gallery {\n    ~ {\n      .top-section {\n        .background-image {\n          background-image: url(../../assets/images/gallery.jpg);\n        }\n      }\n      .section-1 {\n        gap: 0px;\n      }\n      #gallery {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        background-color: $background-color_1;\n        color: $color_1;\n        padding-top: 30px;\n        padding-bottom: 30px;\n        padding-left: 5vw;\n        padding-right: 5vw;\n        .header {\n          text-align: center;\n          .title {\n            font-size: 2.5rem;\n            font-weight: 300;\n            margin-bottom: 20px;\n          }\n          .text {\n            font-size: 1.2rem;\n            opacity: 0.7;\n            margin-bottom: 60px;\n          }\n        }\n        .masonry-layout {\n          width: 100%;\n          margin: 0 auto;\n          overflow: hidden;\n          display: flex;\n          flex-direction: row;\n          justify-content: center;\n          gap: 10px;\n          .column {\n            float: left;\n            width: calc(100% / var(--number-of-gallery-columns));\n            display: flex;\n            flex-direction: column;\n            gap: 20px;\n          }\n        }\n        &:not(.loading-images) {\n          .loading {\n            display: none;\n          }\n        }\n      }\n      #gallery.loading-images {\n        .masonry-layout {\n          display: none !important;\n        }\n      }\n    }\n  }\n}\n.loading {\n  text-align: center;\n  width: min-content;\n}\n.loading__text {\n  font-weight: 500;\n  font-size: 2rem;\n  margin-bottom: 10px;\n}\n.loading__bar {\n  position: relative;\n  height: 5px;\n  width: 12rem;\n  background-color: $background-color_2;\n  border-radius: 1em;\n  overflow: hidden;\n  &::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: \"\";\n    width: 50%;\n    height: 100%;\n    background: linear-gradient(90deg, #fff5, rgba(230, 230, 230, 0.891));\n    animation: loading-animation 1.3s infinite;\n    border-radius: 1em;\n  }\n}\nimg {\n  width: 100%;\n  aspect-ratio: auto;\n}\n.image-pop-up {\n  box-sizing: border-box;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  opacity: 0;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: $background-color_3;\n  object-fit: cover;\n  object-position: center;\n  transition: opacity 0.3s ease-out;\n  z-index: 11000;\n  img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    object-fit: cover;\n    object-position: center;\n    max-width: 96%;\n    max-height: 96%;\n  }\n}\n.image-pop-up.hidden {\n  height: 0;\n}\n.image-pop-up.active {\n  padding-top: calc(30vh);\n  padding-bottom: calc(30vh);\n  opacity: 1;\n}\n@media only screen and (min-width: 800px) {\n  html {\n    --number-of-gallery-columns: 3;\n  }\n  main #website-name.gallery ~ {\n    #gallery {\n      padding-bottom: 80px;\n      .masonry-layout {\n        .column {\n          width: calc(80% / var(--number-of-gallery-columns));\n          .image-1,\n          .image-7,\n          .image-25 {\n            aspect-ratio: 1;\n            object-fit: cover;\n          }\n        }\n      }\n    }\n  }\n\n  .image-pop-up {\n    img {\n      max-height: 50%;\n    }\n  }\n}\n@media only screen and (min-width: 1200px) {\n  main {\n    #website-name.gallery {\n      ~ {\n        #gallery {\n          .header {\n            .title {\n              font-size: 4rem;\n            }\n            .text {\n              font-size: 2rem;\n            }\n          }\n        }\n      }\n    }\n  }\n  .image-pop-up {\n    img {\n      max-height: 70%;\n      max-width: 50%;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/menus-style.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/menus-style.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/menu.jpg */ "./src/assets/images/menu.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 500px) {\n  main #website-name.menus ~ .top-section .slogan .text {\n    font-size: 2.5rem;\n  }\n}\nmain #website-name.menus ~ .top-section .background-image {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\nmain #website-name.menus ~ .section-1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  background-color: #bdb8be;\n  color: #212529;\n}\nmain #website-name.menus ~ .section-1 .header {\n  text-align: center;\n}\nmain #website-name.menus ~ .section-1 .header .title {\n  font-size: 2rem;\n  margin-bottom: 10px;\n}\nmain #website-name.menus ~ .section-1 .header .text {\n  font-size: 1.3rem;\n  opacity: 0.6;\n}\nmain #website-name.menus ~ .section-1 nav ul {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  font-weight: 600;\n}\nmain #website-name.menus ~ .section-1 nav ul li {\n  position: relative;\n  cursor: pointer;\n}\nmain #website-name.menus ~ .section-1 nav ul li::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  height: 4px;\n  transform: translate(0, 5px);\n  background-color: currentColor;\n  transition: all 0.2s ease-out;\n}\nmain #website-name.menus ~ .section-1 nav ul li:hover::after {\n  width: 100%;\n}\nmain #website-name.menus ~ .section-1 nav.breakfast ul li.breakfast::after {\n  width: 100%;\n}\nmain #website-name.menus ~ .section-1 nav.breakfast + .dishes-grid .dishes-section.breakfast {\n  height: 500px;\n  opacity: 1;\n}\nmain #website-name.menus ~ .section-1 nav.lunch ul li.lunch::after {\n  width: 100%;\n}\nmain #website-name.menus ~ .section-1 nav.lunch + .dishes-grid .dishes-section.lunch {\n  height: 500px;\n  opacity: 1;\n}\nmain #website-name.menus ~ .section-1 nav.dinner ul li.dinner::after {\n  width: 100%;\n}\nmain #website-name.menus ~ .section-1 nav.dinner + .dishes-grid .dishes-section.dinner {\n  height: 500px;\n  opacity: 1;\n}\nmain #website-name.menus ~ .section-1 nav.drinks ul li.drinks::after {\n  width: 100%;\n}\nmain #website-name.menus ~ .section-1 nav.drinks + .dishes-grid .dishes-section.drinks {\n  height: 500px;\n  opacity: 1;\n}\nmain #website-name.menus ~ .section-1 .dishes-grid {\n  height: 1100px;\n  width: 100%;\n  overflow: hidden;\n}\nmain #website-name.menus ~ .section-1 .dishes-grid .dishes-section {\n  height: 0;\n  width: 100%;\n  opacity: 0;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-content: start;\n  gap: 20px;\n  transition: opacity 0.2s ease-out;\n}\nmain #website-name.menus ~ .section-1 .dishes-grid .dishes-section .dish {\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  align-items: center;\n  text-transform: capitalize;\n  font-size: 1.3rem;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #212529;\n  z-index: 500;\n}\nmain #website-name.menus ~ .section-1 .dishes-grid .dishes-section .dish .image {\n  object-fit: cover;\n  object-position: center;\n  height: 80px;\n  width: 80px;\n  border-radius: 4px;\n}\nmain #website-name.menus ~ .section-1 .dishes-grid .dishes-section .dish .price {\n  margin-left: auto;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\nmain #website-name.menus ~ .section-1 .dishes-grid .dishes-section .dish:hover .price {\n  animation: jiggle forwards ease-out 0.2s;\n}\n\n@media only screen and (min-width: 800px) {\n  main #website-name.menus ~ .section-1 {\n    gap: 100px;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  main #website-name.menus ~ .section-1 nav ul {\n    gap: 50px;\n    font-size: 1.5rem;\n  }\n  main #website-name.menus ~ .section-1 nav ul li::after {\n    transform: translate(0, 7.5px);\n  }\n  main #website-name.menus ~ .section-1 .dishes-grid {\n    height: 800px;\n  }\n  main #website-name.menus ~ .section-1 .dishes-grid .dishes-section {\n    grid-template-columns: 1fr 1fr;\n    gap: 40px 60px;\n  }\n  main #website-name.menus ~ .section-1 .dishes-grid .dishes-section .dish .image {\n    background-size: cover;\n    background-position: center;\n    height: 120px;\n    width: 120px;\n    border-radius: 4px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/scss/menus-style.scss"],"names":[],"mappings":"AAIA;EACE;IACE,iBAAA;EAHF;AACF;AAOI;EACE,yDAAA;AALN;AAOI;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;EACA,yBAlBe;EAmBf,cApBI;AAeV;AAMM;EACE,kBAAA;AAJR;AAKQ;EACE,eAAA;EACA,mBAAA;AAHV;AAKQ;EACE,iBAAA;EACA,YAAA;AAHV;AAOQ;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;EACA,gBAAA;AALV;AAMU;EACE,kBAAA;EACA,eAAA;AAJZ;AAKY;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,4BAAA;EACA,8BAjDO;EAkDP,6BAAA;AAHd;AAMc;EACE,WAAA;AAJhB;AAaY;EACE,WAAA;AAXd;AAiBY;EACE,aAAA;EACA,UAAA;AAfd;AAuBY;EACE,WAAA;AArBd;AA2BY;EACE,aAAA;EACA,UAAA;AAzBd;AAiCY;EACE,WAAA;AA/Bd;AAqCY;EACE,aAAA;EACA,UAAA;AAnCd;AA2CY;EACE,WAAA;AAzCd;AA+CY;EACE,aAAA;EACA,UAAA;AA7Cd;AAkDM;EACE,cAAA;EACA,WAAA;EACA,gBAAA;AAhDR;AAiDQ;EACE,SAAA;EACA,WAAA;EACA,UAAA;EACA,aAAA;EACA,0BAAA;EACA,uBAAA;EACA,oBAAA;EACA,SAAA;EACA,iCAAA;AA/CV;AAgDU;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,mBAAA;EACA,0BAAA;EACA,iBAAA;EACA,oBAAA;EACA,gCAAA;EACA,YAAA;AA9CZ;AA+CY;EACE,iBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;AA7Cd;AA+CY;EACE,iBAAA;EACA,iBAAA;EACA,iBAAA;AA7Cd;AAgDc;EACE,wCAAA;AA9ChB;;AAuDA;EAIQ;IACE,UAAA;EAvDR;AACF;AA4DA;EAGM;IACE,SAAA;IACA,iBAAA;EA5DN;EA8DQ;IACE,8BAAA;EA5DV;EAiEI;IACE,aAAA;EA/DN;EAgEM;IACE,8BAAA;IACA,cAAA;EA9DR;EAgEU;IACE,sBAAA;IACA,2BAAA;IACA,aAAA;IACA,YAAA;IACA,kBAAA;EA9DZ;AACF","sourcesContent":["$color_1: #212529;\n$background-color_1: #bdb8be;\n$background-color_2: currentColor;\n\n@media only screen and (max-width: 500px) {\n  main #website-name.menus ~ .top-section .slogan .text {\n    font-size: 2.5rem;\n  }\n}\nmain {\n  #website-name.menus ~ {\n    .top-section .background-image {\n      background-image: url(../../assets/images/menu.jpg);\n    }\n    .section-1 {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: start;\n      background-color: $background-color_1;\n      color: $color_1;\n      .header {\n        text-align: center;\n        .title {\n          font-size: 2rem;\n          margin-bottom: 10px;\n        }\n        .text {\n          font-size: 1.3rem;\n          opacity: 0.6;\n        }\n      }\n      nav {\n        ul {\n          display: flex;\n          flex-direction: row;\n          justify-content: space-between;\n          align-items: center;\n          gap: 20px;\n          font-weight: 600;\n          li {\n            position: relative;\n            cursor: pointer;\n            &::after {\n              content: \"\";\n              position: absolute;\n              bottom: 0;\n              left: 0;\n              width: 0;\n              height: 4px;\n              transform: translate(0, 5px);\n              background-color: $background-color_2;\n              transition: all 0.2s ease-out;\n            }\n            &:hover {\n              &::after {\n                width: 100%;\n              }\n            }\n          }\n        }\n      }\n      nav.breakfast {\n        ul {\n          li.breakfast {\n            &::after {\n              width: 100%;\n            }\n          }\n        }\n        + {\n          .dishes-grid {\n            .dishes-section.breakfast {\n              height: 500px;\n              opacity: 1;\n            }\n          }\n        }\n      }\n      nav.lunch {\n        ul {\n          li.lunch {\n            &::after {\n              width: 100%;\n            }\n          }\n        }\n        + {\n          .dishes-grid {\n            .dishes-section.lunch {\n              height: 500px;\n              opacity: 1;\n            }\n          }\n        }\n      }\n      nav.dinner {\n        ul {\n          li.dinner {\n            &::after {\n              width: 100%;\n            }\n          }\n        }\n        + {\n          .dishes-grid {\n            .dishes-section.dinner {\n              height: 500px;\n              opacity: 1;\n            }\n          }\n        }\n      }\n      nav.drinks {\n        ul {\n          li.drinks {\n            &::after {\n              width: 100%;\n            }\n          }\n        }\n        + {\n          .dishes-grid {\n            .dishes-section.drinks {\n              height: 500px;\n              opacity: 1;\n            }\n          }\n        }\n      }\n      .dishes-grid {\n        height: 1100px;\n        width: 100%;\n        overflow: hidden;\n        .dishes-section {\n          height: 0;\n          width: 100%;\n          opacity: 0;\n          display: grid;\n          grid-template-columns: 1fr;\n          justify-content: center;\n          align-content: start;\n          gap: 20px;\n          transition: opacity 0.2s ease-out;\n          .dish {\n            display: flex;\n            flex-direction: row;\n            gap: 15px;\n            align-items: center;\n            text-transform: capitalize;\n            font-size: 1.3rem;\n            padding-bottom: 15px;\n            border-bottom: 1px solid #212529;\n            z-index: 500;\n            .image {\n              object-fit: cover;\n              object-position: center;\n              height: 80px;\n              width: 80px;\n              border-radius: 4px;\n            }\n            .price {\n              margin-left: auto;\n              font-size: 1.5rem;\n              font-weight: bold;\n            }\n            &:hover {\n              .price {\n                animation: jiggle forwards ease-out 0.2s;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n@media only screen and (min-width: 800px) {\n  main {\n    #website-name.menus {\n      ~ {\n        .section-1 {\n          gap: 100px;\n        }\n      }\n    }\n  }\n}\n@media only screen and (min-width: 1200px) {\n  main #website-name.menus ~ {\n    .section-1 {\n      nav ul {\n        gap: 50px;\n        font-size: 1.5rem;\n        li {\n          &::after {\n            transform: translate(0, 7.5px);\n          }\n        }\n      }\n\n      .dishes-grid {\n        height: 800px;\n        .dishes-section {\n          grid-template-columns: 1fr 1fr;\n          gap: 40px 60px;\n          .dish {\n            .image {\n              background-size: cover;\n              background-position: center;\n              height: 120px;\n              width: 120px;\n              border-radius: 4px;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/style.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/restaurant-image-landscape.jpg */ "./src/assets/images/restaurant-image-landscape.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/image-1.jpg */ "./src/assets/images/image-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/image-12.jpg */ "./src/assets/images/image-12.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/image-6.jpg */ "./src/assets/images/image-6.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: black;\n  width: 100vw;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n  --header-color: #050506;\n  --text-color: #dadfe3;\n  --color1: #233040;\n  --color2: #7a5e40;\n}\n\n/* #region consider header for scroll anchors */\n#menu,\n#gallery,\n#get-in-touch,\n#book-a-table {\n  scroll-margin-top: 100px;\n}\n\n/* #endregion */\n/* #region reset styling */\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nul,\nli,\na {\n  text-decoration: none;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n:is(header, .menu-popup) nav a {\n  color: var(--text-color);\n}\n\nh1,\np {\n  margin: 0;\n  padding: 0;\n}\n\n/* #endregion */\n/* #region swup */\nbody {\n  background-image: linear-gradient(to right, #141e30, #243b55);\n}\n\n.swup-progress-bar {\n  height: 5px;\n  background-color: #3487c1;\n}\n\n.swup-transition-main {\n  transition: opacity 0.4s;\n}\n\n/* #endregion */\n.btn {\n  display: inline-block;\n  padding: 13px 20px;\n  color: #fff;\n  text-decoration: none;\n  position: relative;\n  background: transparent;\n  border: 1px solid #e1e1e1;\n  font: 12px/1.2 \"Oswald\", sans-serif;\n  letter-spacing: 0.4em;\n  text-align: center;\n  text-indent: 2px;\n  text-transform: uppercase;\n  transition: color 0.1s linear 0.05s;\n}\n.btn .btn-inner {\n  position: relative;\n  z-index: 2;\n}\n.btn::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #e1e1e1;\n  z-index: 1;\n  opacity: 0;\n  transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0.2s;\n}\n.btn:hover {\n  color: #373737;\n  transition: color 0.1s linear 0s;\n}\n.btn:hover::before {\n  top: 0;\n  height: 100%;\n  opacity: 1;\n  transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0s;\n}\n\n/* #region social media icons */\n.social-media-icon {\n  height: 35px;\n  width: 35px;\n  color: white;\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n}\n\n.facebook-icon:hover {\n  color: hsl(221, 70%, 70%);\n}\n\n.twitter-icon:hover {\n  color: #5dbced;\n}\n\n.instagram-icon:hover {\n  color: #c32aa3;\n}\n\n/* #endregion */\n@keyframes zoom-in-out {\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\nheader {\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 170px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 50px;\n  padding-right: 50px;\n  background-color: var(--header-color);\n  color: var(--text-color);\n}\nheader .title {\n  text-transform: uppercase;\n  font-size: min(10.65vw, 2.5rem);\n  font-weight: 300;\n  letter-spacing: 0.4rem;\n}\nheader nav {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\nheader nav .nav-section-element {\n  display: none;\n}\nheader nav .phone {\n  position: relative;\n  width: 35px;\n  opacity: 0.5;\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n}\nheader nav .phone:hover {\n  opacity: 1;\n  animation: zoom-in-out forwards ease-out 0.2s;\n}\nheader nav .phone .phone-link {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n}\nheader nav .hamburger {\n  position: relative;\n  height: 22px;\n  width: 50px;\n  cursor: pointer;\n}\nheader nav .hamburger span {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 0);\n  width: 100%;\n  height: 2px;\n  background-color: var(--text-color);\n  opacity: 0.5;\n  transition: all 0.2s ease-out;\n}\nheader nav .hamburger span:first-child, header nav .hamburger span:last-child {\n  width: 75%;\n}\nheader nav .hamburger span:first-child {\n  top: 0;\n}\nheader nav .hamburger span:nth-child(2) {\n  top: 10px;\n}\nheader nav .hamburger span:last-child {\n  bottom: 0;\n}\nheader nav .hamburger:hover span {\n  opacity: 1;\n}\nheader nav .hamburger:hover span:first-child {\n  top: calc(100% - 2px);\n}\nheader nav .hamburger:hover span:last-child {\n  bottom: calc(100% - 2px);\n}\n\n/* #region menu-popup */\n.menu-popup {\n  position: fixed;\n  right: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  gap: 80px;\n  box-sizing: border-box;\n  height: 100vh;\n  width: 100vw;\n  padding-top: 25vh;\n  padding-left: 20vw;\n  padding-right: 20vw;\n  background-color: #0d1013;\n  color: var(--text-color);\n  z-index: 10000;\n  overflow: hidden;\n  transition: all 0.3s ease-out;\n  transition: all 0.2s ease-out;\n}\n.menu-popup.hidden {\n  height: 0;\n  padding: 0;\n}\n.menu-popup.hidden-content > * {\n  opacity: 0;\n}\n.menu-popup .close-button {\n  position: absolute;\n  right: 10vw;\n  top: 30px;\n  height: 40px;\n  width: 40px;\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n}\n.menu-popup .close-button:hover {\n  animation: zoom-in-out forwards ease-out 0.2s;\n}\n.menu-popup ul {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  gap: 20px;\n}\n.menu-popup ul li {\n  position: relative;\n  font-size: 1.5rem;\n  font-weight: 300;\n  cursor: pointer;\n}\n.menu-popup ul li::after {\n  content: \"\";\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  left: 0;\n  transform: translate(0, 7px);\n  width: 0;\n  height: 2px;\n  background-color: currentColor;\n  transition: all 0.2s ease-out;\n}\n.menu-popup ul li:hover::after, .menu-popup ul li.selected::after {\n  width: 100%;\n}\n.menu-popup .contact-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  gap: 40px;\n}\n.menu-popup .contact-info .phone-number {\n  font-size: 2rem;\n  font-weight: 300;\n  color: #8b59ff;\n  cursor: pointer;\n}\n.menu-popup .contact-info .btn {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 25px;\n  padding-right: 25px;\n  font-size: 1rem;\n}\n\n/* #endregion */\n/* #region top-section */\n.top-section {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 170px);\n  aspect-ratio: 9/16;\n}\n.top-section .background-image {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n.top-section .slogan {\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  width: 80vw;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-transform: uppercase;\n  text-align: center;\n  color: var(--text-color);\n}\n.top-section .slogan .text {\n  font-size: 3rem;\n  font-weight: 500;\n  margin-bottom: 30px;\n}\n.top-section .slogan .btn {\n  font-size: 14px;\n}\n.top-section .general-contact {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  color: var(--text-color);\n  backdrop-filter: blur(2px);\n}\n.top-section .general-contact .social-media {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n}\n.top-section .general-contact .location {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  font-size: 1.2rem;\n}\n.top-section .general-contact .location .location-data {\n  position: relative;\n  text-align: center;\n  opacity: 1;\n  color: white;\n}\n.top-section .general-contact .location .map-marker {\n  position: absolute;\n  height: 1.5rem;\n  width: 1.5rem;\n  transform: translate(max(-7vw, -30px), 0px);\n  color: #f5a637;\n}\n\n.section-1 {\n  position: relative;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  padding-left: 7vw;\n  padding-right: 7vw;\n  display: flex;\n  flex-direction: column;\n  gap: 60px;\n  background-color: var(--color1);\n  color: var(--text-color);\n}\n.section-1 .part {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n.section-1 .part .heading .decoration {\n  width: 40px;\n  height: 4px;\n  background-color: var(--color2);\n  margin-bottom: 20px;\n}\n.section-1 .part .heading .text {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.section-1 .part .heading .btn {\n  display: none;\n}\n.section-1 .part .description em:hover {\n  color: var(--color2);\n  transition: all 0.2s ease-out;\n}\n.section-1 .part .description h1 {\n  font-size: min(7.5vw, 2rem);\n  margin-bottom: 20px;\n}\n.section-1 .part .description p {\n  font-size: 1.1rem;\n  opacity: 0.8;\n}\n.section-1 .part:first-child .image {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 160%;\n  background-position: 60%;\n  width: 100%;\n  aspect-ratio: 1;\n}\n.section-1 .part:nth-child(2) .image {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 160%;\n  background-position: 60%;\n  width: 100%;\n  aspect-ratio: 1;\n}\n.section-1 .part:last-child .image {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 160%;\n  background-position: 60%;\n  width: 100%;\n  aspect-ratio: 1;\n}\n\n.section-2 .map {\n  filter: grayscale(30%) invert(92%) contrast(83%);\n}\n\nfooter {\n  height: 270px;\n  padding-left: 5vw;\n  padding-right: 5vw;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  font-size: 1rem;\n  color: var(--text-color);\n  background-color: #090a0b;\n}\nfooter .social-media-icons {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  gap: 60px;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n}\nfooter .general-info {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\nfooter br {\n  margin-bottom: 5px;\n}\n\n@media only screen and (min-width: 800px) {\n  /* #region section-1 */\n  .section-1 {\n    padding-left: calc(11vw + 5px);\n    padding-right: 11vw;\n    gap: 200px;\n    padding-bottom: 130px;\n  }\n  .section-1 .part {\n    position: relative;\n    flex-direction: row;\n    align-items: stretch;\n    gap: 0px;\n  }\n  .section-1 .part .description {\n    align-self: center;\n    transform: translate(0, 20px);\n    max-width: 30vw;\n  }\n  .section-1 .part .description h1 {\n    font-size: min(2.5vw, 3rem);\n    margin-bottom: 30px;\n  }\n  .section-1 .part .description p {\n    font-size: min(1.3vw, 1.5rem);\n  }\n  .section-1 .part .heading {\n    position: relative;\n    transform: translate(0, 60px);\n  }\n  .section-1 .part .heading .decoration {\n    width: 50px;\n    height: 7px;\n  }\n  .section-1 .part .heading .text {\n    font-size: min(3rem, 2vw);\n  }\n  .section-1 .part .heading .btn {\n    display: block;\n    position: absolute;\n    bottom: 13vw;\n    padding-left: min(50px, 2.5vw);\n    padding-right: min(50px, 2.5vw);\n    padding-top: min(20px, 1vw);\n    padding-bottom: min(20px, 1vw);\n    font-size: min(1.2rem, 1vw);\n  }\n  .section-1 .part:first-child .image, .section-1 .part:last-child .image {\n    aspect-ratio: 9/16;\n    width: 20vw;\n    background-size: 270%;\n    background-position-x: 70%;\n    box-shadow: 50px 40px 10px rgba(255, 255, 255, 0.6);\n    margin-left: 50px;\n    margin-right: 100px;\n    flex: 0 0 auto;\n  }\n  .section-1 .part:nth-child(2) {\n    flex-direction: row-reverse;\n  }\n  .section-1 .part:nth-child(2) .image {\n    aspect-ratio: 11/16;\n    width: 22vw;\n    background-size: 270%;\n    background-position-x: 70%;\n    box-shadow: -50px 40px 10px rgba(255, 255, 255, 0.2);\n    margin-left: 100px;\n    margin-right: 50px;\n    flex: 0 0 auto;\n  }\n  .section-1 .part:nth-child(2) .description {\n    transform: translate(0, -5vw);\n  }\n  .section-1 .part:nth-child(2) .heading {\n    transform: translate(0, 20vw);\n  }\n  .section-1 .part > .btn {\n    display: none;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  /* #region header */\n  header {\n    position: fixed;\n    flex-direction: row;\n    justify-content: space-between;\n    height: 120px;\n    padding-left: min(150px, 8vw);\n    padding-right: min(150px, 8vw);\n    border-bottom: 1px solid grey;\n    backdrop-filter: brightness(40%);\n    transition: all 0.3s ease-out;\n  }\n  header:not(.scroll) {\n    background-color: transparent;\n  }\n  header.scroll {\n    background-color: var(--header-color);\n    height: 100px;\n  }\n  header .title {\n    min-width: 350px;\n  }\n  header .nav {\n    width: 800px;\n  }\n  header nav .nav-section-element {\n    display: block;\n    position: relative;\n    text-transform: uppercase;\n    letter-spacing: 0.1rem;\n    cursor: pointer;\n  }\n  header nav .nav-section-element::after {\n    content: \"\";\n    position: absolute;\n    top: auto;\n    bottom: 0;\n    left: 0;\n    transform: translate(0, 10px);\n    width: 0;\n    height: 2px;\n    background-color: white;\n    transition: all 0.2s ease-out;\n  }\n  header nav .nav-section-element:hover::after, header nav .nav-section-element.selected::after {\n    width: 100%;\n  }\n  .menu-popup {\n    height: 100vh;\n    width: min(22vw, 500px);\n    padding-top: 25vh;\n    padding-left: 3vw;\n    padding-right: 3vw;\n  }\n  .menu-popup .close-button {\n    right: 2vw;\n  }\n  .top-section {\n    height: 100vh;\n  }\n  .top-section .slogan {\n    left: 32%;\n    top: 30%;\n    transform: translate(-50%);\n    text-align: left;\n    align-items: start;\n    width: 40vw;\n    height: 500px;\n  }\n  .top-section .slogan .text {\n    font-size: 4.5rem;\n  }\n  .top-section .slogan .btn {\n    width: 350px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n    font-size: 1.4rem;\n  }\n  .top-section .general-contact {\n    flex-direction: row;\n  }\n  .top-section .general-contact .social-media {\n    justify-content: start;\n    padding-left: 11vw;\n    gap: 80px;\n  }\n  .top-section .general-contact .social-media .social-media-icon {\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.6);\n    border-radius: 1000px;\n  }\n  .top-section .general-contact .location {\n    font-size: 2rem;\n    font-weight: 300;\n    padding-right: 70px;\n  }\n  .top-section .general-contact .location .map-marker {\n    height: 2.2rem;\n    width: 2.2rem;\n    transform: translate(max(-3vw, -40px), 2px);\n  }\n  .section-1 .part .heading .btn {\n    top: 10vw;\n    bottom: auto;\n  }\n  footer {\n    gap: 40px;\n  }\n  footer .general-info {\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 100px;\n    line-height: 1.5rem;\n  }\n  footer .general-info .address-info {\n    width: 150px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/scss/style.scss"],"names":[],"mappings":"AAAA;EACE,mJAAA;EAEA,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,uBAAA;EAEA,uBAAA;EACA,qBAAA;EACA,iBAAA;EACA,iBAAA;AADF;;AAGA,+CAAA;AACA;;;;EAIE,wBAAA;AAAF;;AAEA,eAAA;AACA,0BAAA;AACA;EACE,SAAA;EACA,UAAA;AACF;;AACA;;;EAGE,qBAAA;EACA,qBAAA;EACA,SAAA;EACA,UAAA;EACA,yBAAA;EACA,kBAAA;AAEF;;AAAA;EACE,wBAAA;AAGF;;AADA;;EAEE,SAAA;EACA,UAAA;AAIF;;AAFA,eAAA;AACA,iBAAA;AACA;EACE,6DAAA;AAKF;;AAHA;EACE,WAAA;EACA,yBAAA;AAMF;;AAJA;EACE,wBAAA;AAOF;;AAJA,eAAA;AACA;EACE,qBAAA;EACA,kBAAA;EACA,WAAA;EACA,qBAAA;EACA,kBAAA;EACA,uBAAA;EACA,yBAAA;EACA,mCAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;EACA,mCAAA;AAOF;AALE;EACE,kBAAA;EACA,UAAA;AAOJ;AAJE;EACE,WAAA;EACA,cAAA;EACA,kBAAA;EACA,QAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;EACA,UAAA;EACA,mEAAA;AAMJ;AAJE;EACE,cAAA;EACA,gCAAA;AAMJ;AAJI;EACE,MAAA;EACA,YAAA;EACA,UAAA;EACA,iEAAA;AAMN;;AAFA,+BAAA;AACA;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,6BAAA;EACA,eAAA;AAKF;;AAHA;EACE,yBAAA;AAMF;;AAJA;EACE,cAAA;AAOF;;AALA;EACE,cAAA;AAQF;;AANA,eAAA;AACA;EAGE;IACE,qBAAA;EAOF;EALA;IACE,mBAAA;EAOF;AACF;AALA;EACE,aAAA;EAEA,aAAA;EACA,sBAAA;EAEA,mBAAA;EACA,SAAA;EAEA,sBAAA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;EAEA,qCAAA;EACA,wBAAA;AAGF;AADE;EACE,yBAAA;EACA,+BAAA;EACA,gBAAA;EACA,sBAAA;AAGJ;AADE;EACE,WAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;AAGJ;AADI;EACE,aAAA;AAGN;AADI;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,6BAAA;EACA,eAAA;AAGN;AADM;EACE,UAAA;EACA,6CAAA;AAGR;AAAM;EACE,kBAAA;EACA,OAAA;EACA,MAAA;EACA,YAAA;EACA,WAAA;AAER;AACI;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;AACN;AACM;EACE,kBAAA;EACA,SAAA;EACA,6BAAA;EACA,WAAA;EACA,WAAA;EAEA,mCAAA;EACA,YAAA;EAEA,6BAAA;AADR;AAGQ;EAEE,UAAA;AAFV;AAIQ;EACE,MAAA;AAFV;AAIQ;EACE,SAAA;AAFV;AAIQ;EACE,SAAA;AAFV;AAKM;EACE,UAAA;AAHR;AAKQ;EACE,qBAAA;AAHV;AAKQ;EACE,wBAAA;AAHV;;AASA,uBAAA;AACA;EACE,eAAA;EACA,QAAA;EACA,MAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;EACA,SAAA;EAEA,sBAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EAEA,yBAAA;EACA,wBAAA;EACA,cAAA;EAEA,gBAAA;EAEA,6BAAA;EAWA,6BAAA;AArBF;AAYE;EACE,SAAA;EACA,UAAA;AAVJ;AAcE;EACE,UAAA;AAZJ;AAgBE;EACE,kBAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EAEA,6BAAA;EACA,eAAA;AAfJ;AAiBI;EACE,6CAAA;AAfN;AAkBE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;EACA,SAAA;AAhBJ;AAkBI;EACE,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;AAhBN;AAkBM;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,OAAA;EACA,4BAAA;EACA,QAAA;EACA,WAAA;EAEA,8BAAA;EACA,6BAAA;AAjBR;AAmBM;EAEE,WAAA;AAlBR;AAsBE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;EACA,SAAA;AApBJ;AAsBI;EACE,eAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;AApBN;AAsBI;EACE,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;AApBN;;AAwBA,eAAA;AACA,wBAAA;AACA;EACE,kBAAA;EACA,WAAA;EACA,2BAAA;EACA,kBAAA;AArBF;AAuBE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,yDAAA;EACA,sBAAA;AArBJ;AAuBE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,6BAAA;EACA,WAAA;EACA,gBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,yBAAA;EACA,kBAAA;EACA,wBAAA;AAvBJ;AAyBI;EACE,eAAA;EACA,gBAAA;EACA,mBAAA;AAvBN;AAyBI;EACE,eAAA;AAvBN;AA0BE;EACE,kBAAA;EACA,SAAA;EACA,SAAA;EACA,WAAA;EACA,iBAAA;EACA,oBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EAEA,wBAAA;EACA,0BAAA;AA1BJ;AA4BI;EACE,WAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AA1BN;AA4BI;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,iBAAA;AA1BN;AA4BM;EACE,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;AA1BR;AA4BM;EACE,kBAAA;EACA,cAAA;EACA,aAAA;EACA,2CAAA;EACA,cAAA;AA1BR;;AA+BA;EACE,kBAAA;EACA,iBAAA;EACA,oBAAA;EACA,iBAAA;EACA,kBAAA;EAEA,aAAA;EACA,sBAAA;EACA,SAAA;EAEA,+BAAA;EACA,wBAAA;AA9BF;AAgCE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AA9BJ;AAiCM;EACE,WAAA;EACA,WAAA;EACA,+BAAA;EACA,mBAAA;AA/BR;AAiCM;EACE,kBAAA;EACA,gBAAA;AA/BR;AAiCM;EACE,aAAA;AA/BR;AAmCM;EACE,oBAAA;EACA,6BAAA;AAjCR;AAmCM;EACE,2BAAA;EACA,mBAAA;AAjCR;AAmCM;EACE,iBAAA;EACA,YAAA;AAjCR;AAoCI;EACE,yDAAA;EACA,qBAAA;EACA,wBAAA;EACA,WAAA;EACA,eAAA;AAlCN;AAoCI;EACE,yDAAA;EACA,qBAAA;EACA,wBAAA;EACA,WAAA;EACA,eAAA;AAlCN;AAoCI;EACE,yDAAA;EACA,qBAAA;EACA,wBAAA;EACA,WAAA;EACA,eAAA;AAlCN;;AAsCA;EACE,gDAAA;AAnCF;;AAqCA;EACE,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EAEA,aAAA;EACA,sBAAA;EACA,SAAA;EAEA,eAAA;EACA,wBAAA;EACA,yBAAA;AApCF;AAsCE;EACE,WAAA;EAEA,aAAA;EACA,mBAAA;EACA,SAAA;EACA,mBAAA;EACA,uBAAA;EAEA,mBAAA;AAtCJ;AAwCE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAtCJ;AAwCE;EACE,kBAAA;AAtCJ;;AAyCA;EACE,sBAAA;EACA;IACE,8BAAA;IACA,mBAAA;IACA,UAAA;IACA,qBAAA;EAtCF;EAwCE;IACE,kBAAA;IACA,mBAAA;IACA,oBAAA;IACA,QAAA;EAtCJ;EAuCI;IACE,kBAAA;IACA,6BAAA;IACA,eAAA;EArCN;EAsCM;IACE,2BAAA;IACA,mBAAA;EApCR;EAsCM;IACE,6BAAA;EApCR;EAuCI;IACE,kBAAA;IACA,6BAAA;EArCN;EAsCM;IACE,WAAA;IACA,WAAA;EApCR;EAsCM;IACE,yBAAA;EApCR;EAsCM;IACE,cAAA;IACA,kBAAA;IACA,YAAA;IACA,8BAAA;IACA,+BAAA;IACA,2BAAA;IACA,8BAAA;IACA,2BAAA;EApCR;EAuCI;IAEE,kBAAA;IACA,WAAA;IACA,qBAAA;IACA,0BAAA;IACA,mDAAA;IACA,iBAAA;IACA,mBAAA;IACA,cAAA;EAtCN;EAwCI;IACE,2BAAA;EAtCN;EAuCM;IACE,mBAAA;IACA,WAAA;IACA,qBAAA;IACA,0BAAA;IACA,oDAAA;IACA,kBAAA;IACA,kBAAA;IACA,cAAA;EArCR;EAuCM;IACE,6BAAA;EArCR;EAuCM;IACE,6BAAA;EArCR;EAwCI;IACE,aAAA;EAtCN;AACF;AA0CA;EACE,mBAAA;EACA;IACE,eAAA;IACA,mBAAA;IACA,8BAAA;IAEA,aAAA;IACA,6BAAA;IACA,8BAAA;IACA,6BAAA;IAEA,gCAAA;IAEA,6BAAA;EA3CF;EA4CE;IACE,6BAAA;EA1CJ;EA4CE;IACE,qCAAA;IACA,aAAA;EA1CJ;EA4CE;IACE,gBAAA;EA1CJ;EA4CE;IACE,YAAA;EA1CJ;EA4CE;IACE,cAAA;IACA,kBAAA;IACA,yBAAA;IACA,sBAAA;IACA,eAAA;EA1CJ;EA2CI;IACE,WAAA;IACA,kBAAA;IACA,SAAA;IACA,SAAA;IACA,OAAA;IACA,6BAAA;IACA,QAAA;IACA,WAAA;IACA,uBAAA;IACA,6BAAA;EAzCN;EA2CI;IAEE,WAAA;EA1CN;EA8CA;IACE,aAAA;IACA,uBAAA;IACA,iBAAA;IACA,iBAAA;IACA,kBAAA;EA5CF;EA6CE;IACE,UAAA;EA3CJ;EA8CA;IACE,aAAA;EA5CF;EA6CE;IACE,SAAA;IACA,QAAA;IACA,0BAAA;IACA,gBAAA;IACA,kBAAA;IACA,WAAA;IACA,aAAA;EA3CJ;EA4CI;IACE,iBAAA;EA1CN;EA4CI;IACE,YAAA;IACA,iBAAA;IACA,oBAAA;IACA,iBAAA;EA1CN;EA6CE;IACE,mBAAA;EA3CJ;EA4CI;IACE,sBAAA;IACA,kBAAA;IACA,SAAA;EA1CN;EA2CM;IACE,aAAA;IACA,oCAAA;IACA,qBAAA;EAzCR;EA4CI;IACE,eAAA;IACA,gBAAA;IACA,mBAAA;EA1CN;EA2CM;IACE,cAAA;IACA,aAAA;IACA,2CAAA;EAzCR;EA8CA;IACE,SAAA;IACA,YAAA;EA5CF;EA8CA;IACE,SAAA;EA5CF;EA6CE;IACE,mBAAA;IACA,mBAAA;IACA,uBAAA;IACA,UAAA;IACA,mBAAA;EA3CJ;EA4CI;IACE,YAAA;EA1CN;AACF","sourcesContent":["html {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: black;\n  width: 100vw;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n\n  --header-color: #050506;\n  --text-color: #dadfe3;\n  --color1: #233040;\n  --color2: #7a5e40;\n}\n/* #region consider header for scroll anchors */\n#menu,\n#gallery,\n#get-in-touch,\n#book-a-table {\n  scroll-margin-top: 100px;\n}\n/* #endregion */\n/* #region reset styling */\nbody {\n  margin: 0;\n  padding: 0;\n}\nul,\nli,\na {\n  text-decoration: none;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  text-transform: uppercase;\n  text-align: center;\n}\n:is(header, .menu-popup) nav a {\n  color: var(--text-color);\n}\nh1,\np {\n  margin: 0;\n  padding: 0;\n}\n/* #endregion */\n/* #region swup */\nbody {\n  background-image: linear-gradient(to right, #141e30, #243b55);\n}\n.swup-progress-bar {\n  height: 5px;\n  background-color: #3487c1;\n}\n.swup-transition-main {\n  transition: opacity 0.4s;\n}\n\n/* #endregion */\n.btn {\n  display: inline-block;\n  padding: 13px 20px;\n  color: #fff;\n  text-decoration: none;\n  position: relative;\n  background: transparent;\n  border: 1px solid #e1e1e1;\n  font: 12px/1.2 \"Oswald\", sans-serif;\n  letter-spacing: 0.4em;\n  text-align: center;\n  text-indent: 2px;\n  text-transform: uppercase;\n  transition: color 0.1s linear 0.05s;\n\n  .btn-inner {\n    position: relative;\n    z-index: 2;\n  }\n\n  &::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background: #e1e1e1;\n    z-index: 1;\n    opacity: 0;\n    transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0.2s;\n  }\n  &:hover {\n    color: #373737;\n    transition: color 0.1s linear 0s;\n\n    &::before {\n      top: 0;\n      height: 100%;\n      opacity: 1;\n      transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0s;\n    }\n  }\n}\n/* #region social media icons */\n.social-media-icon {\n  height: 35px;\n  width: 35px;\n  color: white;\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n}\n.facebook-icon:hover {\n  color: hsl(221, 70%, 70%);\n}\n.twitter-icon:hover {\n  color: #5dbced;\n}\n.instagram-icon:hover {\n  color: #c32aa3;\n}\n/* #endregion */\n@keyframes zoom-in-out {\n  0% {\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\nheader {\n  z-index: 1000;\n\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  gap: 30px;\n\n  box-sizing: border-box;\n  width: 100%;\n  height: 170px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 50px;\n  padding-right: 50px;\n\n  background-color: var(--header-color);\n  color: var(--text-color);\n\n  .title {\n    text-transform: uppercase;\n    font-size: min(10.65vw, 2.5rem);\n    font-weight: 300;\n    letter-spacing: 0.4rem;\n  }\n  nav {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n\n    .nav-section-element {\n      display: none;\n    }\n    .phone {\n      position: relative;\n      width: 35px;\n      opacity: 0.5;\n      transition: all 0.2s ease-out;\n      cursor: pointer;\n\n      &:hover {\n        opacity: 1;\n        animation: zoom-in-out forwards ease-out 0.2s;\n      }\n\n      .phone-link {\n        position: absolute;\n        left: 0;\n        top: 0;\n        height: 100%;\n        width: 100%;\n      }\n    }\n    .hamburger {\n      position: relative;\n      height: 22px;\n      width: 50px;\n      cursor: pointer;\n\n      span {\n        position: absolute;\n        left: 50%;\n        transform: translate(-50%, 0);\n        width: 100%;\n        height: 2px;\n\n        background-color: var(--text-color);\n        opacity: 0.5;\n\n        transition: all 0.2s ease-out;\n\n        &:first-child,\n        &:last-child {\n          width: 75%;\n        }\n        &:first-child {\n          top: 0;\n        }\n        &:nth-child(2) {\n          top: 10px;\n        }\n        &:last-child {\n          bottom: 0;\n        }\n      }\n      &:hover span {\n        opacity: 1;\n\n        &:first-child {\n          top: calc(100% - 2px);\n        }\n        &:last-child {\n          bottom: calc(100% - 2px);\n        }\n      }\n    }\n  }\n}\n/* #region menu-popup */\n.menu-popup {\n  position: fixed;\n  right: 0;\n  top: 0;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  gap: 80px;\n\n  box-sizing: border-box;\n  height: 100vh;\n  width: 100vw;\n  padding-top: 25vh;\n  padding-left: 20vw;\n  padding-right: 20vw;\n\n  background-color: #0d1013;\n  color: var(--text-color);\n  z-index: 10000;\n\n  overflow: hidden;\n\n  transition: all 0.3s ease-out;\n\n  &.hidden {\n    height: 0;\n    padding: 0;\n  }\n  & > * {\n  }\n  &.hidden-content > * {\n    opacity: 0;\n  }\n  transition: all 0.2s ease-out;\n\n  .close-button {\n    position: absolute;\n    right: 10vw;\n    top: 30px;\n    height: 40px;\n    width: 40px;\n\n    transition: all 0.2s ease-out;\n    cursor: pointer;\n\n    &:hover {\n      animation: zoom-in-out forwards ease-out 0.2s;\n    }\n  }\n  ul {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n    gap: 20px;\n\n    li {\n      position: relative;\n      font-size: 1.5rem;\n      font-weight: 300;\n      cursor: pointer;\n\n      &::after {\n        content: \"\";\n        position: absolute;\n        top: auto;\n        bottom: 0;\n        left: 0;\n        transform: translate(0, 7px);\n        width: 0;\n        height: 2px;\n\n        background-color: currentColor;\n        transition: all 0.2s ease-out;\n      }\n      &:hover::after,\n      &.selected::after {\n        width: 100%;\n      }\n    }\n  }\n  .contact-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n    gap: 40px;\n\n    .phone-number {\n      font-size: 2rem;\n      font-weight: 300;\n      color: #8b59ff;\n      cursor: pointer;\n    }\n    .btn {\n      padding-top: 20px;\n      padding-bottom: 20px;\n      padding-left: 25px;\n      padding-right: 25px;\n      font-size: 1rem;\n    }\n  }\n}\n/* #endregion */\n/* #region top-section */\n.top-section {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 170px);\n  aspect-ratio: 9/16;\n\n  .background-image {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: url(../../assets/images/restaurant-image-landscape.jpg);\n    background-size: cover;\n  }\n  .slogan {\n    position: absolute;\n    top: 25%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    width: 80vw;\n    overflow: hidden;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    text-transform: uppercase;\n    text-align: center;\n    color: var(--text-color);\n\n    .text {\n      font-size: 3rem;\n      font-weight: 500;\n      margin-bottom: 30px;\n    }\n    .btn {\n      font-size: 14px;\n    }\n  }\n  .general-contact {\n    position: absolute;\n    top: auto;\n    bottom: 0;\n    width: 100%;\n    padding-top: 10px;\n    padding-bottom: 40px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n\n    color: var(--text-color);\n    backdrop-filter: blur(2px);\n\n    .social-media {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      gap: 40px;\n    }\n    .location {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 80%;\n      font-size: 1.2rem;\n\n      .location-data {\n        position: relative;\n        text-align: center;\n        opacity: 1;\n        color: white;\n      }\n      .map-marker {\n        position: absolute;\n        height: 1.5rem;\n        width: 1.5rem;\n        transform: translate(max(-7vw, -30px), 0px);\n        color: #f5a637;\n      }\n    }\n  }\n}\n.section-1 {\n  position: relative;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  padding-left: 7vw;\n  padding-right: 7vw;\n\n  display: flex;\n  flex-direction: column;\n  gap: 60px;\n\n  background-color: var(--color1);\n  color: var(--text-color);\n\n  .part {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n\n    .heading {\n      .decoration {\n        width: 40px;\n        height: 4px;\n        background-color: var(--color2);\n        margin-bottom: 20px;\n      }\n      .text {\n        font-size: 1.25rem;\n        font-weight: 600;\n      }\n      .btn {\n        display: none;\n      }\n    }\n    .description {\n      em:hover {\n        color: var(--color2);\n        transition: all 0.2s ease-out;\n      }\n      h1 {\n        font-size: min(7.5vw, 2rem);\n        margin-bottom: 20px;\n      }\n      p {\n        font-size: 1.1rem;\n        opacity: 0.8;\n      }\n    }\n    &:first-child .image {\n      background-image: url(../../assets/images/image-1.jpg);\n      background-size: 160%;\n      background-position: 60%;\n      width: 100%;\n      aspect-ratio: 1;\n    }\n    &:nth-child(2) .image {\n      background-image: url(../../assets/images/image-12.jpg);\n      background-size: 160%;\n      background-position: 60%;\n      width: 100%;\n      aspect-ratio: 1;\n    }\n    &:last-child .image {\n      background-image: url(../../assets/images/image-6.jpg);\n      background-size: 160%;\n      background-position: 60%;\n      width: 100%;\n      aspect-ratio: 1;\n    }\n  }\n}\n.section-2 .map {\n  filter: grayscale(30%) invert(92%) contrast(83%);\n}\nfooter {\n  height: 270px;\n  padding-left: 5vw;\n  padding-right: 5vw;\n  padding-top: 20px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  font-size: 1rem;\n  color: var(--text-color);\n  background-color: #090a0b;\n\n  .social-media-icons {\n    width: 100%;\n\n    display: flex;\n    flex-direction: row;\n    gap: 60px;\n    align-items: center;\n    justify-content: center;\n\n    margin-bottom: 10px;\n  }\n  .general-info {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n  }\n  br {\n    margin-bottom: 5px;\n  }\n}\n@media only screen and (min-width: 800px) {\n  /* #region section-1 */\n  .section-1 {\n    padding-left: calc(11vw + 5px);\n    padding-right: 11vw;\n    gap: 200px;\n    padding-bottom: 130px;\n\n    .part {\n      position: relative;\n      flex-direction: row;\n      align-items: stretch;\n      gap: 0px;\n      .description {\n        align-self: center;\n        transform: translate(0, 20px);\n        max-width: 30vw;\n        h1 {\n          font-size: min(2.5vw, 3rem);\n          margin-bottom: 30px;\n        }\n        p {\n          font-size: min(1.3vw, 1.5rem);\n        }\n      }\n      .heading {\n        position: relative;\n        transform: translate(0, 60px);\n        .decoration {\n          width: 50px;\n          height: 7px;\n        }\n        .text {\n          font-size: min(3rem, 2vw);\n        }\n        .btn {\n          display: block;\n          position: absolute;\n          bottom: 13vw;\n          padding-left: min(50px, 2.5vw);\n          padding-right: min(50px, 2.5vw);\n          padding-top: min(20px, 1vw);\n          padding-bottom: min(20px, 1vw);\n          font-size: min(1.2rem, 1vw);\n        }\n      }\n      &:first-child .image,\n      &:last-child .image {\n        aspect-ratio: 9/16;\n        width: 20vw;\n        background-size: 270%;\n        background-position-x: 70%;\n        box-shadow: 50px 40px 10px rgba(255, 255, 255, 0.6);\n        margin-left: 50px;\n        margin-right: 100px;\n        flex: 0 0 auto;\n      }\n      &:nth-child(2) {\n        flex-direction: row-reverse;\n        .image {\n          aspect-ratio: 11/16;\n          width: 22vw;\n          background-size: 270%;\n          background-position-x: 70%;\n          box-shadow: -50px 40px 10px rgba(255, 255, 255, 0.2);\n          margin-left: 100px;\n          margin-right: 50px;\n          flex: 0 0 auto;\n        }\n        .description {\n          transform: translate(0, -5vw);\n        }\n        .heading {\n          transform: translate(0, 20vw);\n        }\n      }\n      & > .btn {\n        display: none;\n      }\n    }\n  }\n}\n@media only screen and (min-width: 1200px) {\n  /* #region header */\n  header {\n    position: fixed;\n    flex-direction: row;\n    justify-content: space-between;\n\n    height: 120px;\n    padding-left: min(150px, 8vw);\n    padding-right: min(150px, 8vw);\n    border-bottom: 1px solid grey;\n\n    backdrop-filter: brightness(40%);\n\n    transition: all 0.3s ease-out;\n    &:not(.scroll) {\n      background-color: transparent;\n    }\n    &.scroll {\n      background-color: var(--header-color);\n      height: 100px;\n    }\n    .title {\n      min-width: 350px;\n    }\n    .nav {\n      width: 800px;\n    }\n    nav .nav-section-element {\n      display: block;\n      position: relative;\n      text-transform: uppercase;\n      letter-spacing: 0.1rem;\n      cursor: pointer;\n      &::after {\n        content: \"\";\n        position: absolute;\n        top: auto;\n        bottom: 0;\n        left: 0;\n        transform: translate(0, 10px);\n        width: 0;\n        height: 2px;\n        background-color: white;\n        transition: all 0.2s ease-out;\n      }\n      &:hover::after,\n      &.selected::after {\n        width: 100%;\n      }\n    }\n  }\n  .menu-popup {\n    height: 100vh;\n    width: min(22vw, 500px);\n    padding-top: 25vh;\n    padding-left: 3vw;\n    padding-right: 3vw;\n    .close-button {\n      right: 2vw;\n    }\n  }\n  .top-section {\n    height: 100vh;\n    .slogan {\n      left: 32%;\n      top: 30%;\n      transform: translate(-50%);\n      text-align: left;\n      align-items: start;\n      width: 40vw;\n      height: 500px;\n      .text {\n        font-size: 4.5rem;\n      }\n      .btn {\n        width: 350px;\n        padding-top: 25px;\n        padding-bottom: 25px;\n        font-size: 1.4rem;\n      }\n    }\n    .general-contact {\n      flex-direction: row;\n      .social-media {\n        justify-content: start;\n        padding-left: 11vw;\n        gap: 80px;\n        .social-media-icon {\n          padding: 10px;\n          background-color: rgba(0, 0, 0, 0.6);\n          border-radius: 1000px;\n        }\n      }\n      .location {\n        font-size: 2rem;\n        font-weight: 300;\n        padding-right: 70px;\n        .map-marker {\n          height: 2.2rem;\n          width: 2.2rem;\n          transform: translate(max(-3vw, -40px), 2px);\n        }\n      }\n    }\n  }\n  .section-1 .part .heading .btn {\n    top: 10vw;\n    bottom: auto;\n  }\n  footer {\n    gap: 40px;\n    .general-info {\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      gap: 100px;\n      line-height: 1.5rem;\n      .address-info {\n        width: 150px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/scss/about-us-style.scss":
/*!*********************************************!*\
  !*** ./src/styles/scss/about-us-style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_us_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./about-us-style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/about-us-style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_us_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_us_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_us_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_us_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/scss/contact-style.scss":
/*!********************************************!*\
  !*** ./src/styles/scss/contact-style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./contact-style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/contact-style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/scss/gallery-style.scss":
/*!********************************************!*\
  !*** ./src/styles/scss/gallery-style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./gallery-style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/gallery-style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/scss/menus-style.scss":
/*!******************************************!*\
  !*** ./src/styles/scss/menus-style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menus_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./menus-style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/menus-style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menus_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menus_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menus_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menus_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/scss/style.scss":
/*!************************************!*\
  !*** ./src/styles/scss/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/about-us.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/about-us.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "about-us.jpg";

/***/ }),

/***/ "./src/assets/images/chef.jpg":
/*!************************************!*\
  !*** ./src/assets/images/chef.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "chef.jpg";

/***/ }),

/***/ "./src/assets/images/contact.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/contact.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "contact.jpg";

/***/ }),

/***/ "./src/assets/images/gallery.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/gallery.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "gallery.jpg";

/***/ }),

/***/ "./src/assets/images/image-1.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/image-1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image-1.jpg";

/***/ }),

/***/ "./src/assets/images/image-12.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/image-12.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image-12.jpg";

/***/ }),

/***/ "./src/assets/images/image-6.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/image-6.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image-6.jpg";

/***/ }),

/***/ "./src/assets/images/image-8.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/image-8.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image-8.jpg";

/***/ }),

/***/ "./src/assets/images/menu.jpg":
/*!************************************!*\
  !*** ./src/assets/images/menu.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "menu.jpg";

/***/ }),

/***/ "./src/assets/images/restaurant-image-landscape.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/restaurant-image-landscape.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "restaurant-image-landscape.jpg";

/***/ }),

/***/ "./node_modules/@swup/a11y-plugin/dist/index.modern.js":
/*!*************************************************************!*\
  !*** ./node_modules/@swup/a11y-plugin/dist/index.modern.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _swup_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swup/plugin */ "./node_modules/@swup/plugin/dist/index.modern.js");
/* harmony import */ var on_demand_live_region__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! on-demand-live-region */ "./node_modules/on-demand-live-region/on-demand-live-region.js");
/* harmony import */ var focus_options_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! focus-options-polyfill */ "./node_modules/focus-options-polyfill/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function e() {
  return e = Object.assign ? Object.assign.bind() : function (t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, e.apply(this, arguments);
}
var o = /*#__PURE__*/function (_t) {
  _inherits(o, _t);
  var _super = _createSuper(o);
  function o() {
    var _this;
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, o);
    _this = _super.call(this), _this.name = "SwupA11yPlugin", _this.announceVisit = function () {
      requestAnimationFrame(function () {
        _this.announcePageName(), _this.focusPageContent();
      });
    }, _this.announcePageName = function () {
      var _this$options = _this.options,
        t = _this$options.contentSelector,
        n = _this$options.headingSelector,
        e = _this$options.urlTemplate,
        _o = _this$options.announcementTemplate;
      var i = e.replace("{url}", window.location.pathname);
      document.title && (i = document.title);
      var s = document.querySelector(t);
      if (s) {
        var _t2 = s.querySelectorAll(n);
        if (_t2 && _t2.length) {
          var _t3 = _slicedToArray(_t2, 1),
            _n2 = _t3[0];
          i = _n2.getAttribute("aria-label") || _n2.textContent;
        }
      }
      var a = _o.replace("{title}", i.trim());
      _this.liveRegion.say(a);
    }, _this.focusPageContent = function () {
      var t = document.querySelector(_this.options.contentSelector);
      t && (t.setAttribute("tabindex", "-1"), t.focus({
        preventScroll: !0
      }));
    }, _this.onTransitionStart = function () {
      document.documentElement.setAttribute("aria-busy", "true");
    }, _this.onTransitionEnd = function () {
      document.documentElement.removeAttribute("aria-busy");
    }, _this.options = e({
      contentSelector: "main",
      headingSelector: "h1, h2, [role=heading]",
      announcementTemplate: "Navigated to: {title}",
      urlTemplate: "New page at {url}"
    }, t), _this.liveRegion = new on_demand_live_region__WEBPACK_IMPORTED_MODULE_1__();
    return _this;
  }
  _createClass(o, [{
    key: "mount",
    value: function mount() {
      this.swup.on("contentReplaced", this.announceVisit), this.swup.on("transitionStart", this.onTransitionStart), this.swup.on("transitionEnd", this.onTransitionEnd);
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.swup.off("contentReplaced", this.announceVisit), this.swup.off("transitionStart", this.onTransitionStart), this.swup.off("transitionEnd", this.onTransitionEnd);
    }
  }]);
  return o;
}(_swup_plugin__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@swup/plugin/dist/index.modern.js":
/*!********************************************************!*\
  !*** ./node_modules/@swup/plugin/dist/index.modern.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var r = function r(_r) {
  return String(_r).split(".").concat(["0", "0"]).slice(0, 3).join(".");
};
var n = /*#__PURE__*/function () {
  function n() {
    _classCallCheck(this, n);
    this.isSwupPlugin = !0, this.requires = {}, this.swup = void 0, this.version = void 0;
  }
  _createClass(n, [{
    key: "mount",
    value: function mount() {}
  }, {
    key: "unmount",
    value: function unmount() {}
  }, {
    key: "_beforeMount",
    value: function _beforeMount() {
      if (!this.name) throw new Error("You must define a name of plugin when creating a class.");
    }
  }, {
    key: "_afterUnmount",
    value: function _afterUnmount() {}
  }, {
    key: "_checkRequirements",
    value: function _checkRequirements() {
      var _this = this;
      return "object" != _typeof(this.requires) || Object.entries(this.requires).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          _n = _ref2[0],
          e = _ref2[1];
        if (!function (n, e, t) {
          var i = function (r, n) {
            var e;
            if ("swup" === r) return null != (e = n.version) ? e : "";
            {
              var t;
              var _e2 = n.findPlugin(r);
              return null != (t = null == _e2 ? void 0 : _e2.version) ? t : "";
            }
          }(n, t);
          return !!i && function (n, e) {
            return e.every(function (e) {
              var _ref3 = e.match(/^([\D]+)?(.*)$/) || [],
                _ref4 = _slicedToArray(_ref3, 3),
                t = _ref4[1],
                i = _ref4[2];
              var s, o;
              return function (r, n) {
                var e = {
                  "": function _(r) {
                    return 0 === r;
                  },
                  ">": function _(r) {
                    return r > 0;
                  },
                  ">=": function _(r) {
                    return r >= 0;
                  },
                  "<": function _(r) {
                    return r < 0;
                  },
                  "<=": function _(r) {
                    return r <= 0;
                  }
                };
                return (e[n] || e[""])(r);
              }((o = i, s = r(s = n), o = r(o), s.localeCompare(o, void 0, {
                numeric: !0
              })), t || ">=");
            });
          }(i, e);
        }(_n, e = Array.isArray(e) ? e : [e], _this.swup)) {
          var _r2 = "".concat(_n, " ").concat(e.join(", "));
          throw new Error("Plugin version mismatch: ".concat(_this.name, " requires ").concat(_r2));
        }
      }), !0;
    }
  }]);
  return n;
}();


/***/ }),

/***/ "./node_modules/@swup/progress-plugin/dist/index.modern.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@swup/progress-plugin/dist/index.modern.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _swup_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swup/plugin */ "./node_modules/@swup/plugin/dist/index.modern.js");
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function s() {
  return s = Object.assign ? Object.assign.bind() : function (t) {
    for (var s = 1; s < arguments.length; s++) {
      var e = arguments[s];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, s.apply(this, arguments);
}
var e = /*#__PURE__*/function () {
  function e() {
    var _this = this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$className = _ref.className,
      t = _ref$className === void 0 ? "progress-bar" : _ref$className,
      _ref$styleAttr = _ref.styleAttr,
      s = _ref$styleAttr === void 0 ? "data-progressbar-styles" : _ref$styleAttr,
      _ref$animationDuratio = _ref.animationDuration,
      _e = _ref$animationDuratio === void 0 ? 300 : _ref$animationDuratio,
      _ref$minValue = _ref.minValue,
      i = _ref$minValue === void 0 ? .1 : _ref$minValue,
      _ref$initialValue = _ref.initialValue,
      r = _ref$initialValue === void 0 ? .25 : _ref$initialValue,
      _ref$trickleValue = _ref.trickleValue,
      n = _ref$trickleValue === void 0 ? .03 : _ref$trickleValue;
    _classCallCheck(this, e);
    this.styleElement = null, this.progressElement = null, this.value = 0, this.visible = !1, this.hiding = !1, this.trickleInterval = null, this.trickle = function () {
      var t = Math.random() * _this.trickleValue;
      _this.setValue(_this.value + t);
    }, this.className = t, this.styleAttr = s, this.animationDuration = _e, this.minValue = i, this.initialValue = r, this.trickleValue = n, this.styleElement = this.createStyleElement(), this.progressElement = this.createProgressElement();
  }
  _createClass(e, [{
    key: "defaultStyles",
    get: function get() {
      return "\n\t\t.".concat(this.className, " {\n\t\t\t\tposition: fixed;\n\t\t\t\tdisplay: block;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\theight: 3px;\n\t\t\t\tbackground-color: black;\n\t\t\t\tz-index: 9999;\n\t\t\t\ttransition:\n\t\t\t\t\twidth ").concat(this.animationDuration, "ms ease-out,\n\t\t\t\t\topacity ").concat(this.animationDuration / 2, "ms ").concat(this.animationDuration / 2, "ms ease-in;\n\t\t\t\ttransform: translate3d(0, 0, 0);\n\t\t\t}\n\t\t");
    }
  }, {
    key: "show",
    value: function show() {
      this.visible || (this.visible = !0, this.installStyleElement(), this.installProgressElement(), this.startTrickling());
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;
      this.visible && !this.hiding && (this.hiding = !0, this.fadeProgressElement(function () {
        _this2.uninstallProgressElement(), _this2.stopTrickling(), _this2.visible = !1, _this2.hiding = !1;
      }));
    }
  }, {
    key: "setValue",
    value: function setValue(t) {
      this.value = Math.min(1, Math.max(this.minValue, t)), this.refresh();
    }
  }, {
    key: "installStyleElement",
    value: function installStyleElement() {
      document.head.insertBefore(this.styleElement, document.head.firstChild);
    }
  }, {
    key: "installProgressElement",
    value: function installProgressElement() {
      this.progressElement.style.width = "0%", this.progressElement.style.opacity = "1", document.documentElement.insertBefore(this.progressElement, document.body), this.progressElement.scrollTop = 0, this.setValue(Math.random() * this.initialValue);
    }
  }, {
    key: "fadeProgressElement",
    value: function fadeProgressElement(t) {
      this.progressElement.style.opacity = "0", setTimeout(t, 1.5 * this.animationDuration);
    }
  }, {
    key: "uninstallProgressElement",
    value: function uninstallProgressElement() {
      this.progressElement.parentNode && document.documentElement.removeChild(this.progressElement);
    }
  }, {
    key: "startTrickling",
    value: function startTrickling() {
      this.trickleInterval || (this.trickleInterval = window.setInterval(this.trickle, this.animationDuration));
    }
  }, {
    key: "stopTrickling",
    value: function stopTrickling() {
      window.clearInterval(this.trickleInterval), delete this.trickleInterval;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this3 = this;
      requestAnimationFrame(function () {
        _this3.progressElement.style.width = 100 * _this3.value + "%";
      });
    }
  }, {
    key: "createStyleElement",
    value: function createStyleElement() {
      var t = document.createElement("style");
      return t.setAttribute(this.styleAttr, ""), t.textContent = this.defaultStyles, t;
    }
  }, {
    key: "createProgressElement",
    value: function createProgressElement() {
      var t = document.createElement("div");
      return t.className = this.className, t;
    }
  }]);
  return e;
}();
var i = /*#__PURE__*/function (_t) {
  _inherits(i, _t);
  var _super = _createSuper(i);
  function i() {
    var _this4;
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, i);
    _this4 = _super.call(this), _this4.name = "SwupProgressPlugin", _this4.startShowingProgress = function () {
      _this4.progressBar.setValue(0), _this4.showProgressBarAfterDelay();
    }, _this4.stopShowingProgress = function () {
      _this4.progressBar.setValue(1), _this4.options.hideImmediately ? _this4.hideProgressBar() : _this4.finishAnimationAndHideProgressBar();
    }, _this4.showProgressBar = function () {
      _this4.cancelHideProgressBarTimeout(), _this4.progressBar.show();
    }, _this4.showProgressBarAfterDelay = function () {
      _this4.cancelShowProgressBarTimeout(), _this4.cancelHideProgressBarTimeout(), _this4.showProgressBarTimeout = window.setTimeout(_this4.showProgressBar, _this4.options.delay);
    }, _this4.hideProgressBar = function () {
      _this4.cancelShowProgressBarTimeout(), _this4.progressBar.hide();
    }, _this4.finishAnimationAndHideProgressBar = function () {
      _this4.cancelShowProgressBarTimeout(), _this4.hideProgressBarTimeout = window.setTimeout(_this4.hideProgressBar, _this4.options.transition);
    }, _this4.cancelShowProgressBarTimeout = function () {
      window.clearTimeout(_this4.showProgressBarTimeout), delete _this4.showProgressBarTimeout;
    }, _this4.cancelHideProgressBarTimeout = function () {
      window.clearTimeout(_this4.hideProgressBarTimeout), delete _this4.hideProgressBarTimeout;
    }, _this4.options = s({}, {
      className: "swup-progress-bar",
      delay: 300,
      transition: void 0,
      minValue: void 0,
      initialValue: void 0,
      hideImmediately: !0
    }, t), _this4.showProgressBarTimeout = null, _this4.hideProgressBarTimeout = null, _this4.progressBar = new e({
      className: _this4.options.className,
      animationDuration: _this4.options.transition,
      minValue: _this4.options.minValue,
      initialValue: _this4.options.initialValue
    });
    return _this4;
  }
  _createClass(i, [{
    key: "mount",
    value: function mount() {
      this.swup.on("transitionStart", this.startShowingProgress), this.swup.on("contentReplaced", this.stopShowingProgress);
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.swup.off("transitionStart", this.startShowingProgress), this.swup.off("contentReplaced", this.stopShowingProgress);
    }
  }]);
  return i;
}(_swup_plugin__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@swup/scroll-plugin/dist/index.modern.js":
/*!***************************************************************!*\
  !*** ./node_modules/@swup/scroll-plugin/dist/index.modern.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _swup_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swup/plugin */ "./node_modules/@swup/plugin/dist/index.modern.js");
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swup */ "./node_modules/swup/dist/Swup.module.js");
/* harmony import */ var scrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scrl */ "./node_modules/scrl/dist/index.modern.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function i() {
  return i = Object.assign ? Object.assign.bind() : function (t) {
    for (var o = 1; o < arguments.length; o++) {
      var e = arguments[o];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, i.apply(this, arguments);
}
var l = /*#__PURE__*/function (_t) {
  _inherits(l, _t);
  var _super = _createSuper(l);
  function l(t) {
    var _this;
    _classCallCheck(this, l);
    _this = _super.call(this), _this.name = "ScrollPlugin", _this.getAnchorElement = function () {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return "function" == typeof _this.options.getAnchorElement ? _this.options.getAnchorElement(t) : "function" == typeof _this.swup.getAnchorElement ? _this.swup.getAnchorElement(t) : document.querySelector(t);
    }, _this.getOffset = function () {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return "function" == typeof _this.options.offset ? parseInt(_this.options.offset(t), 10) : parseInt(_this.options.offset, 10);
    }, _this.onSamePage = function () {
      _this.swup.scrollTo(0, _this.shouldAnimate("samePage"));
    }, _this.onSamePageWithHash = function (t) {
      _this.maybeScrollToAnchor(t.delegateTarget.hash, "samePageWithHash");
    }, _this.onTransitionStart = function (t) {
      _this.options.doScrollingRightAway && !_this.swup.scrollToElement && _this.doScrollingBetweenPages(t);
    }, _this.onContentReplaced = function (t) {
      _this.options.doScrollingRightAway && !_this.swup.scrollToElement || _this.doScrollingBetweenPages(t), _this.restoreScrollContainers(t);
    }, _this.doScrollingBetweenPages = function (t) {
      var o = _this.swup;
      if (t && !o.options.animateHistoryBrowsing) return;
      if (_this.maybeScrollToAnchor(o.scrollToElement, "betweenPages")) return void (o.scrollToElement = null);
      var e = _this.getStoredScrollPositions(_this.getCurrentCacheKey()) || {},
        s = e.window && e.window.top || 0;
      requestAnimationFrame(function () {
        return o.scrollTo(s, _this.shouldAnimate("betweenPages"));
      });
    }, _this.onWillReplaceContent = function () {
      _this.storeScrollPositions(_this.currentCacheKey), _this.currentCacheKey = _this.getCurrentCacheKey();
    }, _this.onClickLink = function (t) {
      _this.maybeResetScrollPositions(t.delegateTarget);
    }, _this.options = i({}, {
      doScrollingRightAway: !1,
      animateScroll: {
        betweenPages: !0,
        samePageWithHash: !0,
        samePage: !0
      },
      scrollFriction: .3,
      scrollAcceleration: .04,
      getAnchorElement: null,
      offset: 0,
      scrollContainers: "[data-swup-scroll-container]",
      shouldResetScrollPosition: function shouldResetScrollPosition(t) {
        return !0;
      }
    }, t);
    return _this;
  }
  _createClass(l, [{
    key: "mount",
    value: function mount() {
      var _this2 = this;
      var t = this.swup;
      t._handlers.scrollDone = [], t._handlers.scrollStart = [], this.scrl = new scrl__WEBPACK_IMPORTED_MODULE_2__["default"]({
        onStart: function onStart() {
          return t.triggerEvent("scrollStart");
        },
        onEnd: function onEnd() {
          return t.triggerEvent("scrollDone");
        },
        onCancel: function onCancel() {
          return t.triggerEvent("scrollDone");
        },
        friction: this.options.scrollFriction,
        acceleration: this.options.scrollAcceleration
      }), t.scrollTo = function (o) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        e ? _this2.scrl.scrollTo(o) : (t.triggerEvent("scrollStart"), window.scrollTo(0, o), t.triggerEvent("scrollDone"));
      }, this.scrollPositionsStore = {}, this.currentCacheKey = this.getCurrentCacheKey(), this.previousScrollRestoration = window.history.scrollRestoration, t.options.animateHistoryBrowsing && (window.history.scrollRestoration = "manual"), t.on("samePage", this.onSamePage), t.on("samePageWithHash", this.onSamePageWithHash), t.on("transitionStart", this.onTransitionStart), t.on("contentReplaced", this.onContentReplaced), t.on("willReplaceContent", this.onWillReplaceContent), t.on("clickLink", this.onClickLink);
    }
  }, {
    key: "unmount",
    value: function unmount() {
      var t = this.swup;
      t.scrollTo = null, delete this.scrl, this.scrl = null, t.off("samePage", this.onSamePage), t.off("samePageWithHash", this.onSamePageWithHash), t.off("transitionStart", this.onTransitionStart), t.off("contentReplaced", this.onContentReplaced), t.off("willReplaceContent", this.onWillReplaceContent), t.off("clickLink", this.onClickLink), t._handlers.scrollDone = null, t._handlers.scrollStart = null, window.history.scrollRestoration = this.previousScrollRestoration;
    }
  }, {
    key: "shouldAnimate",
    value: function shouldAnimate(t) {
      return "boolean" == typeof this.options.animateScroll ? this.options.animateScroll : this.options.animateScroll[t];
    }
  }, {
    key: "maybeScrollToAnchor",
    value: function maybeScrollToAnchor(t, o) {
      if (null == t) return !1;
      var e = this.getAnchorElement(t);
      if (!e) return console.warn("Element ".concat(t, " not found")), !1;
      if (!(e instanceof Element)) return console.warn("Element ".concat(t, " is not a DOM node")), !1;
      var s = e.getBoundingClientRect().top + window.pageYOffset - this.getOffset(e);
      return this.swup.scrollTo(s, this.shouldAnimate(o)), !0;
    }
  }, {
    key: "maybeResetScrollPositions",
    value: function maybeResetScrollPositions(t) {
      if (!this.options.shouldResetScrollPosition(t)) return;
      var _o$fromElement = swup__WEBPACK_IMPORTED_MODULE_1__.Location.fromElement(t),
        e = _o$fromElement.url;
      this.resetScrollPositions(e);
    }
  }, {
    key: "storeScrollPositions",
    value: function storeScrollPositions(t) {
      var o = (0,swup__WEBPACK_IMPORTED_MODULE_1__.queryAll)(this.options.scrollContainers).map(function (t) {
        return {
          top: t.scrollTop,
          left: t.scrollLeft
        };
      });
      this.scrollPositionsStore[t] = {
        window: {
          top: window.scrollY,
          left: window.scrollX
        },
        containers: o
      };
    }
  }, {
    key: "resetScrollPositions",
    value: function resetScrollPositions(t) {
      var o = this.getResolvedUrl(t);
      delete this.scrollPositionsStore[o], this.scrollPositionsStore[o] = null;
    }
  }, {
    key: "getStoredScrollPositions",
    value: function getStoredScrollPositions(t) {
      var o = this.getResolvedUrl(t);
      return this.scrollPositionsStore[o];
    }
  }, {
    key: "restoreScrollContainers",
    value: function restoreScrollContainers(t) {
      var o = this.getStoredScrollPositions(this.getCurrentCacheKey()) || {};
      null != o.containers && (0,swup__WEBPACK_IMPORTED_MODULE_1__.queryAll)(this.options.scrollContainers).forEach(function (t, e) {
        var s = o.containers[e];
        null != s && (t.scrollTop = s.top, t.scrollLeft = s.left);
      });
    }
  }, {
    key: "getCurrentCacheKey",
    value: function getCurrentCacheKey() {
      return this.getResolvedUrl((0,swup__WEBPACK_IMPORTED_MODULE_1__.getCurrentUrl)());
    }
  }, {
    key: "getResolvedUrl",
    value: function getResolvedUrl(t) {
      return "function" == typeof this.swup.resolveUrl ? this.swup.resolveUrl(t) : t;
    }
  }]);
  return l;
}(_swup_plugin__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/delegate-it/index.js":
/*!*******************************************!*\
  !*** ./node_modules/delegate-it/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** Keeps track of raw listeners added to the base elements to avoid duplication */
var ledger = new WeakMap();
function editLedger(wanted, baseElement, callback, setup) {
  var _a, _b;
  if (!wanted && !ledger.has(baseElement)) {
    return false;
  }
  var elementMap = (_a = ledger.get(baseElement)) !== null && _a !== void 0 ? _a : new WeakMap();
  ledger.set(baseElement, elementMap);
  if (!wanted && !ledger.has(baseElement)) {
    return false;
  }
  var setups = (_b = elementMap.get(callback)) !== null && _b !== void 0 ? _b : new Set();
  elementMap.set(callback, setups);
  var existed = setups.has(setup);
  if (wanted) {
    setups.add(setup);
  } else {
    setups["delete"](setup);
  }
  return existed && wanted;
}
function isEventTarget(elements) {
  return typeof elements.addEventListener === 'function';
}
function safeClosest(event, selector) {
  var target = event.target;
  if (target instanceof Text) {
    target = target.parentElement;
  }
  if (target instanceof Element && event.currentTarget instanceof Element) {
    // `.closest()` may match ancestors of `currentTarget` but we only need its children
    var closest = target.closest(selector);
    if (closest && event.currentTarget.contains(closest)) {
      return closest;
    }
  }
}
// This type isn't exported as a declaration, so it needs to be duplicated above
function delegate(base, selector, type, callback, options) {
  // Handle Selector-based usage
  if (typeof base === 'string') {
    base = document.querySelectorAll(base);
  }
  // Handle Array-like based usage
  if (!isEventTarget(base)) {
    var subscriptions = Array.prototype.map.call(base, function (element) {
      return delegate(element, selector, type, callback, options);
    });
    return {
      destroy: function destroy() {
        var _iterator = _createForOfIteratorHelper(subscriptions),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var subscription = _step.value;
            subscription.destroy();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    };
  }
  // `document` should never be the base, it's just an easy way to define "global event listeners"
  var baseElement = base instanceof Document ? base.documentElement : base;
  // Handle the regular Element usage
  var capture = Boolean(_typeof(options) === 'object' ? options.capture : options);
  var listenerFn = function listenerFn(event) {
    var delegateTarget = safeClosest(event, selector);
    if (delegateTarget) {
      event.delegateTarget = delegateTarget;
      callback.call(baseElement, event);
    }
  };
  // Drop unsupported `once` option https://github.com/fregante/delegate-it/pull/28#discussion_r863467939
  if (_typeof(options) === 'object') {
    delete options.once;
  }
  var setup = JSON.stringify({
    selector: selector,
    type: type,
    capture: capture
  });
  var isAlreadyListening = editLedger(true, baseElement, callback, setup);
  var delegateSubscription = {
    destroy: function destroy() {
      baseElement.removeEventListener(type, listenerFn, options);
      editLedger(false, baseElement, callback, setup);
    }
  };
  if (!isAlreadyListening) {
    baseElement.addEventListener(type, listenerFn, options);
  }
  return delegateSubscription;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delegate);

/***/ }),

/***/ "./node_modules/scrl/dist/index.modern.js":
/*!************************************************!*\
  !*** ./node_modules/scrl/dist/index.modern.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function t() {
  return t = Object.assign ? Object.assign.bind() : function (t) {
    for (var i = 1; i < arguments.length; i++) {
      var o = arguments[i];
      for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
    }
    return t;
  }, t.apply(this, arguments);
}
var i = /*#__PURE__*/_createClass(function i(_i) {
  var _this = this;
  _classCallCheck(this, i);
  this._raf = null, this._positionY = 0, this._velocityY = 0, this._targetPositionY = 0, this._targetPositionYWithOffset = 0, this._direction = 0, this.scrollTo = function (t) {
    if (t && t.nodeType) _this._targetPositionY = Math.round(t.getBoundingClientRect().top + window.pageYOffset);else {
      if (parseInt(_this._targetPositionY) !== _this._targetPositionY) return void console.error("Argument must be a number or an element.");
      _this._targetPositionY = Math.round(t);
    }
    _this._targetPositionY > document.documentElement.scrollHeight - window.innerHeight && (_this._targetPositionY = document.documentElement.scrollHeight - window.innerHeight), _this._positionY = document.body.scrollTop || document.documentElement.scrollTop, _this._direction = _this._positionY > _this._targetPositionY ? -1 : 1, _this._targetPositionYWithOffset = _this._targetPositionY + _this._direction, _this._velocityY = 0, _this._positionY !== _this._targetPositionY ? (_this.options.onStart(), _this._animate()) : _this.options.onAlreadyAtPositions();
  }, this._animate = function () {
    _this._update(), _this._render(), 1 === _this._direction && _this._targetPositionY > _this._positionY || -1 === _this._direction && _this._targetPositionY < _this._positionY ? (_this._raf = requestAnimationFrame(_this._animate), _this.options.onTick()) : (_this._positionY = _this._targetPositionY, _this._render(), _this._raf = null, _this.options.onTick(), _this.options.onEnd());
  }, this._update = function () {
    var t = _this._targetPositionYWithOffset - _this._positionY;
    return _this._velocityY += t * _this.options.acceleration, _this._velocityY *= _this.options.friction, _this._positionY += _this._velocityY, Math.abs(t);
  }, this._render = function () {
    window.scrollTo(0, _this._positionY);
  }, this.options = t({}, {
    onAlreadyAtPositions: function onAlreadyAtPositions() {},
    onCancel: function onCancel() {},
    onEnd: function onEnd() {},
    onStart: function onStart() {},
    onTick: function onTick() {},
    friction: .7,
    acceleration: .04
  }, _i), _i && _i.friction && (this.options.friction = 1 - _i.friction), window.addEventListener("mousewheel", function (t) {
    _this._raf && (_this.options.onCancel(), cancelAnimationFrame(_this._raf), _this._raf = null);
  }, {
    passive: !0
  });
});


/***/ }),

/***/ "./node_modules/swup/dist/Swup.module.js":
/*!***********************************************!*\
  !*** ./node_modules/swup/dist/Swup.module.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Location: () => (/* binding */ p),
/* harmony export */   classify: () => (/* binding */ e),
/* harmony export */   cleanupAnimationClasses: () => (/* binding */ f),
/* harmony export */   createHistoryRecord: () => (/* binding */ i),
/* harmony export */   "default": () => (/* binding */ O),
/* harmony export */   delegateEvent: () => (/* binding */ o),
/* harmony export */   escapeCssIdentifier: () => (/* binding */ c),
/* harmony export */   fetch: () => (/* binding */ d),
/* harmony export */   getCurrentUrl: () => (/* binding */ n),
/* harmony export */   getDataFromHtml: () => (/* binding */ h),
/* harmony export */   markSwupElements: () => (/* binding */ g),
/* harmony export */   nextTick: () => (/* binding */ l),
/* harmony export */   query: () => (/* binding */ r),
/* harmony export */   queryAll: () => (/* binding */ a),
/* harmony export */   toMs: () => (/* binding */ u),
/* harmony export */   updateHistoryRecord: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var delegate_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! delegate-it */ "./node_modules/delegate-it/index.js");
var _excluded = ["base"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var e = function e(t, _e) {
    return String(t).toLowerCase().replace(/[\s/_.]+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+|-+$/g, "") || _e || "";
  },
  n = function n(t) {
    var _ref = void 0 === t ? {} : t,
      e = _ref.hash;
    return location.pathname + location.search + (e ? location.hash : "");
  },
  i = function i(t, e) {
    void 0 === e && (e = {});
    var i = _objectSpread({
      url: t = t || n({
        hash: !0
      }),
      random: Math.random(),
      source: "swup"
    }, e);
    history.pushState(i, "", t);
  },
  s = function s(t, e) {
    void 0 === t && (t = null), void 0 === e && (e = {}), t = t || n({
      hash: !0
    });
    var i = _objectSpread(_objectSpread({}, history.state), {}, {
      url: t,
      random: Math.random(),
      source: "swup"
    }, e);
    history.replaceState(i, "", t);
  },
  o = function o(e, n, i, s) {
    var _ref2 = void 0 === s ? {} : s,
      _ref2$base = _ref2.base,
      o = _ref2$base === void 0 ? document : _ref2$base,
      r = _objectWithoutProperties(_ref2, _excluded);
    var a = (0,delegate_it__WEBPACK_IMPORTED_MODULE_0__["default"])(o, e, n, i, r);
    return {
      destroy: function destroy() {
        return a.destroy();
      }
    };
  },
  r = function r(t, e) {
    return void 0 === e && (e = document), e.querySelector(t);
  },
  a = function a(t, e) {
    return void 0 === e && (e = document), Array.from(e.querySelectorAll(t));
  },
  l = function l(t) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        t();
      });
    });
  },
  c = function c(t) {
    return window.CSS && window.CSS.escape ? CSS.escape(t) : t;
  },
  u = function u(t) {
    return 1e3 * Number(t.slice(0, -1).replace(",", "."));
  },
  h = function h(t, e) {
    var _r, _r2;
    var n = document.createElement("html");
    n.innerHTML = t;
    var i = [];
    e.forEach(function (t) {
      if (null == r(t, n)) return console.warn("[swup] Container ".concat(t, " not found on page.")), null;
      a(t).length !== a(t, n).length && console.warn("[swup] Mismatched number of containers found on new page."), a(t).forEach(function (e, s) {
        a(t, n)[s].setAttribute("data-swup", String(i.length)), i.push(a(t, n)[s].outerHTML);
      });
    });
    var s = ((_r = r("title", n)) === null || _r === void 0 ? void 0 : _r.innerText) || "",
      o = (_r2 = r("body", n)) === null || _r2 === void 0 ? void 0 : _r2.className;
    return n.innerHTML = "", n = null, {
      title: s,
      pageClass: o,
      blocks: i,
      originalContent: t
    };
  },
  d = function d(t, e) {
    var n = {
        url: window.location.pathname + window.location.search,
        method: "GET",
        data: null,
        headers: {}
      },
      _n$t = _objectSpread(_objectSpread({}, n), t),
      i = _n$t.url,
      s = _n$t.method,
      o = _n$t.headers,
      r = _n$t.data,
      a = new XMLHttpRequest();
    return a.onreadystatechange = function () {
      4 === a.readyState && e(a);
    }, a.open(s, i, !0), Object.entries(o).forEach(function (t) {
      var _t = _slicedToArray(t, 2),
        e = _t[0],
        n = _t[1];
      a.setRequestHeader(e, n);
    }), a.send(r), a;
  };
var p = /*#__PURE__*/function (_URL) {
  _inherits(p, _URL);
  var _super = _createSuper(p);
  function p(t, e) {
    var _this;
    _classCallCheck(this, p);
    void 0 === e && (e = document.baseURI), _this = _super.call(this, t.toString(), e);
    return _this;
  }
  _createClass(p, [{
    key: "url",
    get: function get() {
      return this.pathname + this.search;
    }
  }], [{
    key: "fromElement",
    value: function fromElement(t) {
      var e = t.getAttribute("href") || t.getAttribute("xlink:href");
      return new p(e);
    }
  }, {
    key: "fromUrl",
    value: function fromUrl(t) {
      return new p(t);
    }
  }]);
  return p;
}( /*#__PURE__*/_wrapNativeSuper(URL));
var g = function g(t, e) {
    var n = 0;
    e.forEach(function (e) {
      null == r(e, t) ? console.warn("[swup] Container ".concat(e, " not found on page.")) : a(e).forEach(function (i, s) {
        a(e, t)[s].setAttribute("data-swup", String(n)), n++;
      });
    });
  },
  m = function m(t) {
    return /^to-/.test(t) || ["is-changing", "is-rendering", "is-popstate"].includes(t);
  },
  f = function f() {
    var _document$documentEle;
    var t = document.documentElement.className.split(" ").filter(m);
    (_document$documentEle = document.documentElement.classList).remove.apply(_document$documentEle, _toConsumableArray(t));
  };
var v = /*#__PURE__*/function () {
  function v(t) {
    _classCallCheck(this, v);
    this.pages = {}, this.last = null, this.swup = void 0, this.swup = t;
  }
  _createClass(v, [{
    key: "getCacheUrl",
    value: function getCacheUrl(t) {
      return this.swup.resolveUrl(p.fromUrl(t).url);
    }
  }, {
    key: "cacheUrl",
    value: function cacheUrl(t) {
      t.url = this.getCacheUrl(t.url), t.url in this.pages == 0 && (this.pages[t.url] = t), t.responseURL = this.getCacheUrl(t.responseURL), this.last = this.pages[t.url], this.swup.log("Cache (".concat(Object.keys(this.pages).length, ")"), this.pages);
    }
  }, {
    key: "getPage",
    value: function getPage(t) {
      return t = this.getCacheUrl(t), this.pages[t];
    }
  }, {
    key: "getCurrentPage",
    value: function getCurrentPage() {
      return this.getPage(n());
    }
  }, {
    key: "exists",
    value: function exists(t) {
      return (t = this.getCacheUrl(t)) in this.pages;
    }
  }, {
    key: "empty",
    value: function empty() {
      this.pages = {}, this.last = null, this.swup.log("Cache cleared");
    }
  }, {
    key: "remove",
    value: function remove(t) {
      delete this.pages[this.getCacheUrl(t)];
    }
  }]);
  return v;
}();
var w = function w(t) {
    var _this2 = this;
    var _ref3 = void 0 === t ? {} : t,
      e = _ref3.event,
      n = _ref3.skipTransition;
    if (n) return this.triggerEvent("transitionEnd", e), this.cleanupAnimationClasses(), [Promise.resolve()];
    l(function () {
      _this2.triggerEvent("animationInStart"), document.documentElement.classList.remove("is-animating");
    });
    var i = this.getAnimationPromises("in");
    return Promise.all(i).then(function () {
      _this2.triggerEvent("animationInDone"), _this2.triggerEvent("transitionEnd", e), _this2.cleanupAnimationClasses();
    }), i;
  },
  E = function E(t) {
    return t ? ("#" === t.charAt(0) && (t = t.substring(1)), t = decodeURIComponent(t), t = c(t), r("#".concat(t)) || r("a[name='".concat(t, "']"))) : null;
  };
var P = "transition",
  S = "transitionend",
  b = "animation",
  U = "animationend";
function k(t) {
  var e = this.options.animationSelector;
  if (!1 === e) return [Promise.resolve()];
  var n = a(e, document.body);
  return n.length ? n.map(function (t) {
    return function (t, e, n) {
      void 0 === n && (n = null);
      var _ref4 = function (t, e) {
          void 0 === e && (e = null);
          var n = window.getComputedStyle(t),
            i = "".concat(P, "Duration"),
            s = "".concat(b, "Delay"),
            o = "".concat(b, "Duration"),
            r = n["".concat(P, "Delay")].split(", "),
            a = (n[i] || "").split(", "),
            l = y(r, a),
            c = (n[s] || "").split(", "),
            u = (n[o] || "").split(", "),
            h = y(c, u);
          var d = "",
            p = 0,
            g = 0;
          return "transition" === e ? l > 0 && (d = "transition", p = l, g = a.length) : "animation" === e ? h > 0 && (d = "animation", p = h, g = u.length) : (p = Math.max(l, h), d = p > 0 ? l > h ? "transition" : "animation" : null, g = d ? "transition" === d ? a.length : u.length : 0), {
            type: d,
            timeout: p,
            propCount: g
          };
        }(t, n),
        i = _ref4.type,
        s = _ref4.timeout,
        o = _ref4.propCount;
      return i && s ? new Promise(function (e) {
        var n = "transition" === i ? S : U,
          r = performance.now();
        var a = 0;
        var l = function l() {
            t.removeEventListener(n, c), e();
          },
          c = function c(e) {
            if (e.target === t) {
              if (!function (t) {
                return !!t.elapsedTime;
              }(e)) throw new Error("Not a transition or animation event.");
              (performance.now() - r) / 1e3 < e.elapsedTime || ++a >= o && l();
            }
          };
        setTimeout(function () {
          a < o && l();
        }, s + 1), t.addEventListener(n, c);
      }) : (console.warn("[swup] No CSS transition duration defined for element of selector ".concat(e)), Promise.resolve());
    }(t, e);
  }) : (console.warn("[swup] No animated elements found by selector ".concat(e)), [Promise.resolve()]);
}
function y(t, e) {
  for (; t.length < e.length;) t = t.concat(t);
  return Math.max.apply(Math, _toConsumableArray(e.map(function (e, n) {
    return u(e) + u(t[n]);
  })));
}
void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (P = "WebkitTransition", S = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (b = "WebkitAnimation", U = "webkitAnimationEnd");
var L = function L(t) {
  var e = h(t.responseText, this.options.containers);
  return e ? _objectSpread(_objectSpread({}, e), {}, {
    responseURL: t.responseURL || window.location.href
  }) : (console.warn("[swup] Received page is invalid."), null);
};
function C(t) {
  var _this3 = this;
  var e = this.options.requestHeaders,
    n = t.url;
  return this.cache.exists(n) ? (this.triggerEvent("pageRetrievedFromCache"), Promise.resolve(this.cache.getPage(n))) : new Promise(function (i, s) {
    d(_objectSpread(_objectSpread({}, t), {}, {
      headers: e
    }), function (t) {
      if (500 === t.status) return _this3.triggerEvent("serverError"), void s(n);
      var e = _this3.getPageData(t);
      if (!e || !e.blocks.length) return void s(n);
      var o = _objectSpread(_objectSpread({}, e), {}, {
        url: n
      });
      _this3.cache.cacheUrl(o), _this3.triggerEvent("pageLoaded"), i(o);
    });
  });
}
var T = function T(t) {
  var _this4 = this;
  var _ref5 = void 0 === t ? {} : t,
    e = _ref5.event,
    n = _ref5.skipTransition;
  var i = e instanceof PopStateEvent;
  if (n) return this.triggerEvent("animationSkipped"), [Promise.resolve()];
  this.triggerEvent("animationOutStart"), document.documentElement.classList.add("is-changing", "is-leaving", "is-animating"), i && document.documentElement.classList.add("is-popstate");
  var s = this.getAnimationPromises("out");
  return Promise.all(s).then(function () {
    _this4.triggerEvent("animationOutDone");
  }), s;
};
function H(t) {
  var e = t.url;
  this.shouldIgnoreVisit(e) ? window.location.href = e : this.performPageLoad(t);
}
function R(t) {
  var _this5 = this;
  var _ref6 = t !== null && t !== void 0 ? t : {},
    s = _ref6.url,
    o = _ref6.event,
    r = _ref6.customTransition,
    a = o instanceof PopStateEvent,
    l = this.shouldSkipTransition({
      url: s,
      event: o
    });
  this.triggerEvent("transitionStart", o), this.updateTransition(n(), s, r), null != r && document.documentElement.classList.add("to-".concat(e(r)));
  var c = this.leavePage({
      event: o,
      skipTransition: l
    }),
    u = this.fetchPage(t);
  a || i(s + (this.scrollToElement || "")), this.currentPageUrl = n(), Promise.all([u].concat(_toConsumableArray(c))).then(function (t) {
    var _t2 = _slicedToArray(t, 1),
      e = _t2[0];
    _this5.renderPage(e, {
      event: o,
      skipTransition: l
    });
  })["catch"](function (t) {
    void 0 !== t && (_this5.options.skipPopStateHandling = function () {
      return window.location = t, !0;
    }, history.go(-1));
  });
}
var A = function A(t) {
  var e = t.blocks,
    n = t.title;
  return e.forEach(function (t, e) {
    document.body.querySelector("[data-swup=\"".concat(e, "\"]")).outerHTML = t;
  }), document.title = n, Promise.resolve();
};
function $(t, e) {
  var n = this._handlers[t];
  n ? n.push(e) : console.warn("Unsupported event ".concat(t, "."));
}
function _(t, e) {
  var _this6 = this;
  if (t && e) {
    var _n2 = this._handlers[t];
    _n2.includes(e) ? this._handlers[t] = _n2.filter(function (t) {
      return t !== e;
    }) : console.warn("Handler for event '".concat(t, "' not found."));
  } else t ? this._handlers[t] = [] : Object.keys(this._handlers).forEach(function (t) {
    _this6._handlers[t] = [];
  });
}
function x(t, e) {
  this._handlers[t].forEach(function (t) {
    try {
      t(e);
    } catch (t) {
      console.error(t);
    }
  });
  var n = new CustomEvent("swup:".concat(t), {
    detail: t
  });
  document.dispatchEvent(n);
}
var q = function q(t) {
  if (t !== null && t !== void 0 && t.isSwupPlugin) {
    if (t.swup = this, !t._checkRequirements || t._checkRequirements()) return t._beforeMount && t._beforeMount(), t.mount(), this.plugins.push(t), this.plugins;
  } else console.error("Not a swup plugin instance", t);
};
function D(t) {
  var e = this.findPlugin(t);
  if (e) return e.unmount(), e._afterUnmount && e._afterUnmount(), this.plugins = this.plugins.filter(function (t) {
    return t !== e;
  }), this.plugins;
  console.error("No such plugin", e);
}
function I(t) {
  return this.plugins.find(function (e) {
    return e === t || e.name === t;
  });
}
var M = function M(t, e) {
  var _this7 = this;
  var _ref7 = void 0 === e ? {} : e,
    i = _ref7.event,
    o = _ref7.skipTransition;
  if (document.documentElement.classList.remove("is-leaving"), !this.isSameResolvedUrl(n(), t.url)) return;
  var _p$fromUrl = p.fromUrl(t.responseURL),
    r = _p$fromUrl.url;
  this.isSameResolvedUrl(n(), r) || (this.cache.cacheUrl(_objectSpread(_objectSpread({}, t), {}, {
    url: r
  })), this.currentPageUrl = n(), s(r)), o || document.documentElement.classList.add("is-rendering"), this.triggerEvent("willReplaceContent", i), this.replaceContent(t).then(function () {
    _this7.triggerEvent("contentReplaced", i), _this7.triggerEvent("pageView", i), _this7.options.cache || _this7.cache.empty(), _this7.enterPage({
      event: i,
      skipTransition: o
    }), _this7.scrollToElement = null;
  });
};
function N(t, e, n) {
  this.transition = {
    from: t,
    to: e,
    custom: n
  };
}
function W(t) {
  var e = t.event;
  return !(!(e instanceof PopStateEvent) || this.options.animateHistoryBrowsing);
}
var O = /*#__PURE__*/function () {
  function O(t) {
    _classCallCheck(this, O);
    void 0 === t && (t = {}), this.version = "3.0.6", this._handlers = {
      animationInDone: [],
      animationInStart: [],
      animationOutDone: [],
      animationOutStart: [],
      animationSkipped: [],
      clickLink: [],
      contentReplaced: [],
      disabled: [],
      enabled: [],
      openPageInNewTab: [],
      pageLoaded: [],
      pageRetrievedFromCache: [],
      pageView: [],
      popState: [],
      samePage: [],
      samePageWithHash: [],
      serverError: [],
      transitionStart: [],
      transitionEnd: [],
      willReplaceContent: []
    }, this.scrollToElement = null, this.options = void 0, this.plugins = [], this.transition = {}, this.cache = void 0, this.currentPageUrl = n(), this.delegatedListeners = {}, this.boundPopStateHandler = void 0, this.loadPage = H, this.performPageLoad = R, this.leavePage = T, this.renderPage = M, this.replaceContent = A, this.enterPage = w, this.triggerEvent = x, this.delegateEvent = o, this.on = $, this.off = _, this.updateTransition = N, this.shouldSkipTransition = W, this.getAnimationPromises = k, this.getPageData = L, this.fetchPage = C, this.getAnchorElement = E, this.log = function () {}, this.use = q, this.unuse = D, this.findPlugin = I, this.getCurrentUrl = n, this.cleanupAnimationClasses = f, this.defaults = {
      animateHistoryBrowsing: !1,
      animationSelector: '[class*="transition-"]',
      cache: !0,
      containers: ["#swup"],
      ignoreVisit: function ignoreVisit(t, e) {
        var _ref8 = void 0 === e ? {} : e,
          n = _ref8.el;
        return !!(n !== null && n !== void 0 && n.closest("[data-no-swup]"));
      },
      linkSelector: "a[href]",
      plugins: [],
      resolveUrl: function resolveUrl(t) {
        return t;
      },
      requestHeaders: {
        "X-Requested-With": "swup",
        Accept: "text/html, application/xhtml+xml"
      },
      skipPopStateHandling: function skipPopStateHandling(t) {
        var _t$state;
        return "swup" !== ((_t$state = t.state) === null || _t$state === void 0 ? void 0 : _t$state.source);
      }
    }, this.options = _objectSpread(_objectSpread({}, this.defaults), t), this.boundPopStateHandler = this.popStateHandler.bind(this), this.cache = new v(this), this.enable();
  }
  _createClass(O, [{
    key: "enable",
    value: function enable() {
      var _this8 = this;
      "undefined" != typeof Promise ? (this.delegatedListeners.click = o(this.options.linkSelector, "click", this.linkClickHandler.bind(this)), window.addEventListener("popstate", this.boundPopStateHandler), g(document.documentElement, this.options.containers), this.options.plugins.forEach(function (t) {
        return _this8.use(t);
      }), s(), this.triggerEvent("enabled"), document.documentElement.classList.add("swup-enabled"), this.triggerEvent("pageView")) : console.warn("Promise is not supported");
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this9 = this;
      this.delegatedListeners.click.destroy(), window.removeEventListener("popstate", this.boundPopStateHandler), this.cache.empty(), this.options.plugins.forEach(function (t) {
        _this9.unuse(t);
      }), a("[data-swup]").forEach(function (t) {
        t.removeAttribute("data-swup");
      }), this.off(), this.triggerEvent("disabled"), document.documentElement.classList.remove("swup-enabled");
    }
  }, {
    key: "shouldIgnoreVisit",
    value: function shouldIgnoreVisit(t, e) {
      var _ref9 = void 0 === e ? {} : e,
        n = _ref9.el,
        i = _ref9.event;
      var _p$fromUrl2 = p.fromUrl(t),
        s = _p$fromUrl2.origin,
        o = _p$fromUrl2.url,
        r = _p$fromUrl2.hash;
      return s !== window.location.origin || !(!n || !this.triggerWillOpenNewWindow(n)) || !!this.options.ignoreVisit(o + r, {
        el: n,
        event: i
      });
    }
  }, {
    key: "linkClickHandler",
    value: function linkClickHandler(t) {
      var e = t.delegateTarget,
        _p$fromElement = p.fromElement(e),
        i = _p$fromElement.href,
        s = _p$fromElement.url,
        o = _p$fromElement.hash;
      if (this.shouldIgnoreVisit(i, {
        el: e,
        event: t
      })) return;
      if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return void this.triggerEvent("openPageInNewTab", t);
      if (0 !== t.button) return;
      if (this.triggerEvent("clickLink", t), t.preventDefault(), !s || s === n()) return void this.handleLinkToSamePage(s, o, t);
      if (this.isSameResolvedUrl(s, n())) return;
      this.scrollToElement = o || null;
      var r = e.getAttribute("data-swup-transition") || void 0;
      this.performPageLoad({
        url: s,
        customTransition: r
      });
    }
  }, {
    key: "handleLinkToSamePage",
    value: function handleLinkToSamePage(t, e, n) {
      if (e) {
        if (this.triggerEvent("samePageWithHash", n), !E(e)) return console.warn("Element for offset not found (#".concat(e, ")"));
        s(t + e);
      } else this.triggerEvent("samePage", n);
    }
  }, {
    key: "triggerWillOpenNewWindow",
    value: function triggerWillOpenNewWindow(t) {
      return !!t.matches('[download], [target="_blank"]');
    }
  }, {
    key: "popStateHandler",
    value: function popStateHandler(t) {
      var _t$state$url, _t$state2;
      if (this.options.skipPopStateHandling(t)) return;
      if (this.isSameResolvedUrl(n(), this.currentPageUrl)) return;
      var e = (_t$state$url = (_t$state2 = t.state) === null || _t$state2 === void 0 ? void 0 : _t$state2.url) !== null && _t$state$url !== void 0 ? _t$state$url : location.href;
      if (this.shouldIgnoreVisit(e, {
        event: t
      })) return;
      var _p$fromUrl3 = p.fromUrl(e),
        i = _p$fromUrl3.url,
        s = _p$fromUrl3.hash;
      s ? this.scrollToElement = s : t.preventDefault(), this.triggerEvent("popState", t), this.options.animateHistoryBrowsing || (document.documentElement.classList.remove("is-animating"), f()), this.performPageLoad({
        url: i,
        event: t
      });
    }
  }, {
    key: "resolveUrl",
    value: function resolveUrl(t) {
      if ("function" != typeof this.options.resolveUrl) return console.warn("[swup] options.resolveUrl expects a callback function."), t;
      var e = this.options.resolveUrl(t);
      return e && "string" == typeof e ? e.startsWith("//") || e.startsWith("http") ? (console.warn("[swup] options.resolveUrl needs to return a relative url"), t) : e : (console.warn("[swup] options.resolveUrl needs to return a url"), t);
    }
  }, {
    key: "isSameResolvedUrl",
    value: function isSameResolvedUrl(t, e) {
      return this.resolveUrl(t) === this.resolveUrl(e);
    }
  }]);
  return O;
}();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headers.js */ "./src/scripts/headers.js");
/* harmony import */ var _styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/scss/style.scss */ "./src/styles/scss/style.scss");
/* harmony import */ var _styles_scss_about_us_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/scss/about-us-style.scss */ "./src/styles/scss/about-us-style.scss");
/* harmony import */ var _styles_scss_menus_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/scss/menus-style.scss */ "./src/styles/scss/menus-style.scss");
/* harmony import */ var _styles_scss_gallery_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/scss/gallery-style.scss */ "./src/styles/scss/gallery-style.scss");
/* harmony import */ var _styles_scss_contact_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/scss/contact-style.scss */ "./src/styles/scss/contact-style.scss");
/* harmony import */ var _menus_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menus.js */ "./src/scripts/menus.js");
/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery.js */ "./src/scripts/gallery.js");
/* harmony import */ var _navElementsHighlighting_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navElementsHighlighting.js */ "./src/scripts/navElementsHighlighting.js");
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swup */ "./node_modules/swup/dist/Swup.module.js");
/* harmony import */ var _swup_fade_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swup/fade-theme */ "./node_modules/@swup/fade-theme/lib/index.js");
/* harmony import */ var _swup_fade_theme__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_swup_fade_theme__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _swup_slide_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swup/slide-theme */ "./node_modules/@swup/slide-theme/lib/index.js");
/* harmony import */ var _swup_slide_theme__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_swup_slide_theme__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _swup_overlay_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swup/overlay-theme */ "./node_modules/@swup/overlay-theme/lib/index.js");
/* harmony import */ var _swup_overlay_theme__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_swup_overlay_theme__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _swup_scroll_plugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swup/scroll-plugin */ "./node_modules/@swup/scroll-plugin/dist/index.modern.js");
/* harmony import */ var _swup_progress_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swup/progress-plugin */ "./node_modules/@swup/progress-plugin/dist/index.modern.js");
/* harmony import */ var _swup_a11y_plugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swup/a11y-plugin */ "./node_modules/@swup/a11y-plugin/dist/index.modern.js");
















var scrollOffset;
var runningOnDesktop = window.innerWidth > 1200;
if (runningOnDesktop) {
  scrollOffset = 100;
} else {
  scrollOffset = 0;
}
var swup = new swup__WEBPACK_IMPORTED_MODULE_9__["default"]({
  plugins: [new (_swup_fade_theme__WEBPACK_IMPORTED_MODULE_10___default())(), new _swup_scroll_plugin__WEBPACK_IMPORTED_MODULE_13__["default"]({
    animateScroll: {
      betweenPages: false,
      samePageWithHash: false,
      samePage: true
    },
    offset: scrollOffset
  }), new _swup_progress_plugin__WEBPACK_IMPORTED_MODULE_14__["default"]({
    delay: 0
  }), new _swup_a11y_plugin__WEBPACK_IMPORTED_MODULE_15__["default"]()]
});
_headers_js__WEBPACK_IMPORTED_MODULE_0__.initHeaders();
(0,_navElementsHighlighting_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
function addCustomScript() {
  var websiteName = document.querySelector("#website-name").className;
  if (websiteName === "menus") {
    (0,_menus_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
  } else if (websiteName === "gallery") {
    (0,_gallery_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  }
}
function loadWebsiteSpecificContent() {
  _headers_js__WEBPACK_IMPORTED_MODULE_0__.initSecondaryNavMenuAgain();
  addCustomScript();
}
loadWebsiteSpecificContent();
swup.on("contentReplaced", loadWebsiteSpecificContent);
swup.on("contentReplaced", _navElementsHighlighting_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=main.5a5d1e8d1496b3cf09c6.js.map