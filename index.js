const fs = require('fs')
const moduleNodeAdf = require('./nodeadf.js')


let nADF = Object.create(moduleNodeAdf).Init({logger: null, fs: fs})
