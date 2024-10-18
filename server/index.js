const express = require('express')
const path = require('path');
const app = express()

const port = 3000

 
// const FILES_DIR = "files"

const clients = []

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/file', function (req, res) {

    clients.push(req.ip)

    const options = {
        root: path.join(__dirname, "files")
    };

    const fileName = 'text.txt';
    

    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', fileName);
        }
    });




});


















app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})