require('dotenv').config(); 

const realData = {
    username: process.env.REAL_USERNAME,
    password: process.env.REAL_PASSWORD
};

module.exports = realData;