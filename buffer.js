//Objects -> handles binary data
//file system operation, cryptyography , image processing

// Allocating memory in CPU
const bufferOne = Buffer.alloc(10)
console.log(bufferOne)

// Converting String data to buffer
const bufferFromString = Buffer.from('hello')
console.log(bufferFromString)

// Converting Array into to Buffer
const bufferFromArrayofInteger = Buffer.from([1,2,3,4,5])
console.log(bufferFromArrayofInteger)

// Converting buffer into String
bufferOne.write('Amish')
console.log('After wrting into buffer' , bufferOne.toString())

// Reading byte of a Staring index
console.log(bufferFromString[0])

// Slicing the buffer data from a string
console.log(bufferFromString.slice(0 ,3))

// Adding both buffer data into One
const concatBuffs = Buffer.concat([bufferOne ,  bufferFromString])
console.log(concatBuffs)

// Converting Buffer data into JSON format
console.log(concatBuffs.toJSON());