const Express = require('express')
const Multer = require('multer')
const Path = require('path')

var app = Express()
var multerMiddleware = Multer().single('upload')

app.set('views', Path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use(Express.static('public'))
app.get('/', (req, res) => res.render('index')) 
app.post('/upload', multerMiddleware, (req, res) => res.json({'size': req.file.size}))

app.listen(process.env.PORT, () => console.log(`Your app is listening on port ${process.env.PORT}`))