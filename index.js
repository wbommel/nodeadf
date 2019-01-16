"use strict";

/* trying to define needed functionality
 
Handle legal AmigaOS discs:
    - read directory tree
    - read files
    - write files / create directories
    - delete files / directories

Sector editor:
    - read sector
    - read / write byte
    - read / write word
    - read / write longword



Architectural challenges:
    - always give filename to each function to always read file first,
        or read file once and work on a byte byte array?

*/

const util = require('util')    // parameterized string formater
const fs = require('fs')        // file system actions



const moduleLogger = require('./model/logger.js')
const moduleNodeAdf = require('./model/nodeadf.js')



let logger = Object.create(moduleLogger).Init(util)
logger.LogLevel = moduleLogger.LogLevelStatus
logger.UseUnixTimeStampPrefix = true
logger.DoLogMessages = true
logger.OutputToConsole = true
logger.OutputToCallback = false



let nADF = Object.create(moduleNodeAdf).Init({logger, fs})
