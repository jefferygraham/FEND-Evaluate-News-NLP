const dotenv = require('dotenv');
dotenv.config();

const aylien = require('aylien_textapi');

let textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// app.post('/testing', (req, res) => {
//     let data = req.body;
//     // console.log(data.url);
//     textapi.sentiment({
//         url: `${data.url}`
//     }, function (error, response) {
//         if (error === null) {
//             res.send(response)
//         }
//         else {
//             console.log(error)
//         }
//     });

// })

// app.get('/test', function async(req, res, url) {
//     try {
//         textapi.sentiment({
//             text: 'John is a very good football player',
//             mode: 'tweet'
//         }, function (error, response) {
//             if (error === null) {
//                 res.send(response);
//             }
//         });
//     }
//     catch (error) {
//         console.log("error", error);
//     }
// })

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})