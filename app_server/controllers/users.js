var fs = require('fs');
var user = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));

// GET admin view
const users = (req, res) => {
    res.render('users', { title: 'Travlr Getaways', user });
};

module.exports = {
    users
};