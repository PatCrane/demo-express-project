const express = require('express')

const app = express()

const PORT = 3000

const friends = [
    {
        id: 0,
        name: 'Albert Einstein'
    },
    {
        id: 1,
        name: 'Sir Issac Newton'
    }
]

app.get('/friends', (req, res) => {
    res.status(200).json(friends)
})

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId)
    const friend = friends[friendId]
    if(friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: 'Friend does not exist!'
        })
    }
})

app.get('/messages', (req, res) => {
    res.send('<h1>A COOL MESSAGE</h1>')
})

app.post('/messages', (req, res) => {
    res.send('Updating messages')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})