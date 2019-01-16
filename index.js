const fs = require('fs')
const moduleNodeAdf = require('./nodeadf.js')
let logger

let nADF = Object.create(moduleNodeAdf).Init({logger, fs})
