var fs = require('fs');
var newer = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways', newer });
};

module.exports = {
    news
};