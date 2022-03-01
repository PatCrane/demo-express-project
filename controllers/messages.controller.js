const path = require('path')

function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages to my friends',
        friend: 'Elon Musk'
    })
    //res.sendFile(path.join(__dirname, '..', 'public', 'images', 'Screenshot from 2022-02-27 18-21-46.png'))
    //res.send('<ul>HEELLLOOOO</ul>')
}

function postMessage(req, res) {
    console.log('Updating messages')
}

module.exports = {
    getMessages,
    postMessage,
}