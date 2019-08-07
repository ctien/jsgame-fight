import Express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

// Initialize
const app = Express();
const indexHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            
            <div id="root"></div>
            <script src="./main.js"></script>
        </body>
        </html>
    `

// Import required modules
import serverConfig from './config'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(Express.static(path.join(__dirname, '../dist')));


app.get('/', function (req, res) {
    res.send(indexHtml);
})



app.listen(serverConfig.PORT, (error) => {
    console.log('server running at', serverConfig.PORT);
        if (!error) {
    }
})

export default app;