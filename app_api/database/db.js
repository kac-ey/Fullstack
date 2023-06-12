const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = 'mongodb://${host}/travlr';
const readLine = require('readline');

// avoids the 'current Server Discovery and Monitoring engine is deprecated' (SNHU, 2023, p. 1) 
mongoose.set('useUnifiedTopology', true);

// connecting to the database utilizing mongoose connect credentials, creating a new URL, and creating
// a new index (Mongoose, 2022, p. 1)
const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewURLParser: true,
        useCreateIndex: true
    }), 1000);
}

// connect to the dabatase and output in console (Mongoose, 2022, p. 1)
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

// handling of error connecting to database (Mongoose, 2022, p. 1)
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});

// disconnect from the database output message disconnected (Mongoose, 2022, p. 1)
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// emit the SIGINT signal on Windows machines, allowing you to capture it and gracefully close down
// anything else you need to before the process ends (Holmes, 2019, p. 5.1)
if (process.platform === 'win32') {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit("SIGINT");
    });
}

// event listener to close the database connection (Holmes, 2019, p. 5.1)
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

// For nodemon restarts (Holmes, 2019, p. 5.1);(SNHU, 2023, p. 1)                                       
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// For app termination (Holmes, 2019, p. 5.1);(SNHU, 2023, p. 1)                                    
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

// For Heroku app termination (Holmes, 2019, p. 5.1);(SNHU, 2023, p. 1)                                
process.on('SIGTERM', () => {
    gracefulShutdown('Travlr app shutdown', () => {
        process.exit(0);
    });
});

// call connect function to return a promise within mongoose infrastructure (Mongoose, 2022, p. 1)
connect();

// brings in the Mongoose schema within application (SNHU, 2023, p. 1)
require('./models/travlr');