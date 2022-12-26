'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (opts) {
  var generate = opts.generate;
  var react = opts.react;

  var rules = (0, _baseRules2.default)(opts);

  if (react) {
    (0, _objectAssign2.default)(rules, (0, _reactRules2.default)(opts));
  }

  if (generate) {
    (0, _generateEslintrc2.default)(opts);
  }

  return {
    rules: rules,
    configFile: _path2.default.join(__dirname, 'eslint-config.json'),
    useEslintrc: false
  };
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _baseRules = require('./base-rules');

var _baseRules2 = _interopRequireDefault(_baseRules);

var _reactRules = require('./react-rules');

var _reactRules2 = _interopRequireDefault(_reactRules);

var _generateEslintrc = require('./generate-eslintrc');

var _generateEslintrc2 = _interopRequireDefault(_generateEslintrc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/**
 * @param {Object}
 * @param {Boolean} opts.isDev
 * @param {String} opts.lintEnv
 *
 * @return {Object}
 */