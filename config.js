const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", //Add Your Session id
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/e3947a665144372a172aa.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "hey!!!",
MENU_IMG : process.env.MENU_IMG || "https://telegra.ph/file/e3947a665144372a172aa.jpg",
MODE : process.env.MODE || "public",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};
