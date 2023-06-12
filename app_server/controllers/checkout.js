var fs = require('fs');
var checkouts = JSON.parse(fs.readFileSync('./data/admin.json', 'utf8'));

/* GET admin view */
const admin = (req, res) => {
    res.render('admin', {title: 'Travlr Getaways | Admin', admin });
};

module.exports = {
    admin
};