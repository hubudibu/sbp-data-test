'use strict'

// =======================
// Domain: Data persistence
// =======================

// import _ from 'lodash'
const _ = require('lodash')

const _store = {}

module.exports = {
  '/get': function (path) {
    return _.get(_store, path, [])
  },
  '/set': function (path, data) {
    _.set(_store, path, data)
  },
  '/add': function (path, data) {
    if (_.get(_store, path)) {
      _.get(_store, path).push(data)
    } else {
      _.set(_store, path, [data])
    }
  }
}
