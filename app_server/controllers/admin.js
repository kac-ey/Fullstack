var fs = require('fs');
var checkouts = JSON.parse(fs.readFileSync('./data/checkout.json', 'utf8'));

/* GET checkout view */
const checkout = (req, res) => {
    res.render('checkout', {title: 'Travlr Getaways', checkouts });
};

module.exports = {
    checkout
};