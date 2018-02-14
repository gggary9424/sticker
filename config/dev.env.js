'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FB_APP_ID: '"1477124502376307"',
  BASE_API: '"http://localhost:5000"',
})
