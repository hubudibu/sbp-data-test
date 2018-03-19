'use strict';

// =======================
// Domain: Data persistence
// =======================

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const _ = require('lodash')

var _store = {};

module.exports = {
  '/get': function get(path) {
    // version 1.2.0!
    return _lodash2.default.get(_store, path, []);
  },
  '/set': function set(path, data) {
    _lodash2.default.set(_store, path, data);
  },
  '/add': function add(path, data) {
    if (_lodash2.default.get(_store, path)) {
      _lodash2.default.get(_store, path).push(data);
    } else {
      _lodash2.default.set(_store, path, [data]);
    }
  }
};