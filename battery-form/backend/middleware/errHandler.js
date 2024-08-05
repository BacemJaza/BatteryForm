import log from './logger.js'

const errHandler = (err,req,res,next) =>{
    log.logEvents(`${err.name}\t${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,'errLog.log')
    console.log(err.stack)
    const status = res.statusCode? res.statusCode : 500
    res.status(status)

    res.json({message: err.message})
}

export default errHandler