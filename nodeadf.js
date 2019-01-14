let logger
let fs




module.exports={
    Init: function(diContainer){
        logger = diContainer.logger
        fs = diContainer.fs

        return this
    }
}