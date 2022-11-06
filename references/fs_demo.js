const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), {}, function(err) {
//     if (err) throw err;
//     console.log('Folder created successfully');
// });

fs.writeFileSync(path.join(__dirname, 'test', 'message.txt'), 'Hello there from fs module!', err => {
    if (err) throw err;
    console.log('Message writting...');
});

fs.appendFileSync(path.join(__dirname, 'test', 'message.txt'), ' and now this text is appended, yaaay.', err => {
    if (err) throw err;
    console.log('Message writting again...');
});