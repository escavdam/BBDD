const fs = require('fs');

function createFile(content, fileName) {
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            return err
        } else {
            return `${fileName} was created`
        }
    })
}

module.exports = createFile;