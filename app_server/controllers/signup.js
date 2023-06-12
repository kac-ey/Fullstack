var fs = require('fs');
var signups = JSON.parse(fs.readFileSync('./data/signup.json', 'utf8'));

/* GET signup view */
const signup = (req, res) => {
    res.render('signup', {title: 'Travlr Getaways', signups });
};

module.exports = {
    signup
};