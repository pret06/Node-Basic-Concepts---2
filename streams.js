// readable : Use for reading file
// writeable : use for writing into file
// Duplex : Use for both read and write
// trasnform : zlib streams

const fs = require('fs')
const zlib = require('zlib')
const {Transform} = require('stream')
const crypto = require('crypto')

class EncryptStream extends Transform {
    constructor(key,vector) {
       super()
       this.key = key
       this.vector = vector
    }

    _transform(chunk , encoding , callback ){
        const cipher = crypto.createCipheriv('aes-256-cbc' , this.key, this.vector)
        const encrypted = Buffer.concat([cipher.update(chunk), cipher.final()])
        this.push(encrypted)
        callback()
       }
}

const key = crypto.randomBytes(32)
const vector = crypto.randomBytes(16)

// For reading the data in stream
const readable = fs.createReadStream('input.txt')

// For new gzip object to compress the stream of data
const gzip = zlib.createGzip()

// For encrypting the data of stream
const encrypted = new EncryptStream(key , vector)

// For writing the data into the stream
const writeable = fs.createWriteStream('output.txt.gz.enc')


//read -> compress -> encrypt -> write
readable.pipe(gzip).pipe(encrypted).pipe(writeable)


console.log("Streaming -> compressing -> writing data")



