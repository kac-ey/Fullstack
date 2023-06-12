var fs = require('fs');
var travelers = JSON.parse(fs.readFileSync('./data/traveler.json', 'utf8'));

// GET travel view
const request = require('request');

// api variable used to retrieve static JSON file
const apiOptions = {
    server: 'http://localhost:3000'
};

// internal method to render the travel list
const renderTravel = (req, res, responseBody) => {
    let message = null;
    let pageTitle = 'Travlr Getaways';
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    }
    else {
        if (!responseBody.length) {
            message = 'No trips exist in our database!';
        }
    }

    res.render('traveler',
        {
            title: pageTitle,
            heading: "Travel",
            trips: responseBody,
            travelers,
            message
        }
    );
}

// GET traveler view
const traveler = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    console.info('>> travelController.travelList calling ' + requestOptions.url);
    request(requestOptions, (err, response, body) => {
        (err, { statusCode }, body) => {
            console.error(err);
        }
        renderTravel(req, res, body);
    }
    );
};

module.exports = {
    traveler
};