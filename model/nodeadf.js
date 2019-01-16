'use strict';

let logger
let fs




module.exports={
    Init: function(diContainer){
        logger = diContainer.logger
        fs = diContainer.fs

        return this
    },

}

// example from here: https://stackoverflow.com/questions/5784621/how-to-read-binary-files-byte-by-byte-in-node-js
/*
fs.open('file.txt', 'r', function(status, fd) {
    if (status) {
        console.log(status.message);
        return;
    }
    var buffer = Buffer.alloc(100);
    fs.read(fd, buffer, 0, 100, 0, function(err, num) {
        console.log(buffer.toString('utf8', 0, num));
    });
});
*/