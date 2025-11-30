import express from 'express';
const ex = express();
function ageCheck(req, res, next) {
    if(!req.query.age || req.query.age < 18) {
        res.send('you are not allowed to pass due to age restriction')
    }
    next();
}
function countryCheck(req, res, next) {
    
}

ex.use(ageCheck);
ex.use(countryCheck)
ex.get('/', (req, res) => {
    res.send('welcome to home page');
})
ex.get('/user', (req, res) => {
    res.send('Welcome to the home page');
})

ex.listen(3000, () => {
    console.log('Listeniing on port 3000');
})