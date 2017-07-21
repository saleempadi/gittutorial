var unzip = require('unzip');
var fs = require('fs');  
 
fs.createReadStream('/Users/sundht/Desktop/new.zip').pipe(unzip.Extract({ path: '/Users/sundht/Desktop' }));