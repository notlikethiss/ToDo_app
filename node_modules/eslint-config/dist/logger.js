'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prefix = exports.magenta = exports.blue = exports.colors = undefined;

exports.default = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length) {
    _gulpUtil.log.apply(_gulpUtil2.default, [prefix].concat(args));
  }

  return {
    colors: colors,
    blue: blue,
    magenta: magenta,
    log: _gulpUtil.log,
    prefix: prefix
  };
};

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _blue = _gulpUtil.colors.blue;
var _magenta = _gulpUtil.colors.magenta;
var colors = exports.colors = _gulpUtil.colors;
var blue = exports.blue = _blue;
var magenta = exports.magenta = _magenta;
var prefix = exports.prefix = magenta('[eslint-config]') + ':';