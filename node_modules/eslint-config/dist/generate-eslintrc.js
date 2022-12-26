'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _appRootPath = require('app-root-path');

var _eslintConfig = require('./eslint-config');

var _eslintConfig2 = _interopRequireDefault(_eslintConfig);

var _baseRules = require('./base-rules');

var _baseRules2 = _interopRequireDefault(_baseRules);

var _reactRules = require('./react-rules');

var _reactRules2 = _interopRequireDefault(_reactRules);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Script to generate a .eslintrc file for use in editors or wherever outside of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * your application.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


if (!global._babelPolyfill) {
  require('babel-polyfill');
}

var rcPath = _path2.default.join(_appRootPath.path, '/.eslintrc');

function cbToProm(fn) {
  return function (arg) {
    return new Promise(function (res, rej) {
      fn.call(fn, arg, function (err, data) {
        if (err) return rej(err);

        res(data);
      });
    });
  };
}

exports.default = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(opts) {
    var exists, stats, react, baseRules, reactRules, rules;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            exists = false;
            _context.prev = 1;
            _context.next = 4;
            return cbToProm(_fs2.default.stat)(rcPath);

          case 4:
            stats = _context.sent;


            exists = stats.isFile();
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            exists = false;

          case 11:
            react = opts.react;
            baseRules = (0, _baseRules2.default)(_extends({}, opts, {
              isDev: true
            }));
            reactRules = react ? (0, _reactRules2.default)({ isDev: true }) : {};
            rules = (0, _objectAssign2.default)({}, baseRules, reactRules);

            if (exists) {
              _context.next = 20;
              break;
            }

            (0, _logger2.default)('Generating .eslintrc to ' + (0, _logger.blue)(rcPath));

            _context.next = 19;
            return _fs2.default.writeFile(rcPath, JSON.stringify((0, _objectAssign2.default)(_eslintConfig2.default, { rules: rules }), null, '\t'));

          case 19:
            return _context.abrupt('return', _context.sent);

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));

  return function (_x) {
    return ref.apply(this, arguments);
  };
}();

module.exports = exports['default'];