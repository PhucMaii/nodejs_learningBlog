const express  = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan('combined'));

// Template Engine
app.engine('hbs', engine({
    extname: ".hbs" // default: handlebars
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// console.log(__dirname);  // return the place where this file located

app.get('/', (req,res) => {  
    res.render('home')
});

app.get('/news', (req,res) => {  
    res.render('news')
});
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})