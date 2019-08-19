const express = require('express');
const bodyParser = require('body-parser');
const path =  require('path');
const { check, validationResult } = require('express-validator');

const { I_LOVE } = require('./config');

const app = express();

console.log("I love", I_LOVE);

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));

// Global vars
app.use(function (req, res, next) {
    res.locals.errors = null;
    next();
  });

// users object
const users = [
    {
    name: 'Lucia'
    }
]

app.get('/', function(req, res){
    res.render('index', {
        title: 'customers',
        users: users
    });
});

app.post('/users/add', [
    check('name').isLength({ min: 1 }).withMessage('name is required'),
],function(req, res){
    const validationResults = validationResult(req);
    if (!validationResults.isEmpty()) {
        console.log('HAS ERROR', validationResults);
        res.render('index', {
        title: 'customers',
        users: users,
        errors: validationResults.errors
        });
    // return res.status(422).json({ errors: errors.array() });
    } else {
        const newUser = {
            name: req.body.name
        }
        console.log('success');
        console.log(newUser);
    }
    
})

app.listen(3000, function(){
    console.log("Server started on port 3000...")
})