var fs = require('fs');
var logins = JSON.parse(fs.readFileSync('./data/login.json', 'utf8'));

/* GET login view */
const login = (req, res) => {
    res.render('login', {title: 'Travlr Getaways', logins });
};

module.exports = {
    login
};