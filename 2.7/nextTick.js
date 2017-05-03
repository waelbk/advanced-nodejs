const fs = require('fs');

// function should be eather sync or async!
function fileSize (fileName, cb) {
  if (typeof fileName !== 'string') {
    // sync operation
    //return cb(new TypeError('argument should be string'))
    
    // async
    return process.nextTick(
      cb,
      new TypeError('argument should be string')
    );
  }

  fs.stat(fileName, (err, stats) => {
    if (err) {
      return cb(err);
    }

    cb(null, stats.size);
  });
}

fileSize(1, (err, size) => {
  if (err) throw err;

  console.log(`Size in KB: ${size/1024}`);
});

console.log('Hello!'); // with async flow, logging always!
