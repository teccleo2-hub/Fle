const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '',
    PREFIX: '.',
    MODE: 'public',
    AUTOBIO: false,
    ANTICALL: false,
    CHATBOT: false,
    ANTIBUG: false,
    AUTOTYPE: false,
    AUTOREAD: false,
    FONTSTYLE: 'OFF',
    ANTIEDIT: 'private',
    MENUSTYLE: '2',
    AUTOREACT: false,
    AUTOBLOCK: false,
    AUTORECORD: 'all',
    ANTIDELETE: 'private',
    ALWAYSONLINE: true,
    AUTOVIEWSTATUS: true,
    AUTOREACTSTATUS: false,
    AUTORECORDTYPE: false,
    STATUSANTIDELETE: true,
    BOTNAME: 'FLEKO-X BOT',
    OWNERNAME: 'FLEKO-X BOT',
    OWNERNUMBER: '254758301051',
    STATUSEMOJI: '🧡,💚,🔥,✨,❤️,🥰,😎',
    WATERMARK: '©CypherX is on fire!🔥',
    AUTHOR: 'X',
    PACKNAME: 'FLEKO-X BOT',
    TIMEZONE: 'Africa/Nairobi',
    MENUIMAGE: 'https://files.catbox.moe/ydjqye.jpg',
    MENUVIDEO: 'https://files.catbox.moe/xlofuo.mp4',
    ANTICALLMSG: '',
    WARNLIMIT: 5,
    GOODBYEMSG: '',
    WELCOMEMSG: '',
    REPOURL: 'https://github.com/teccleo2-hubb/RAVEN_BOT',
    PAIRINGURL: 'https://pair.cypherxbot.space',
    ANTISTICKER: false,
    ANTISTICKERKICK: false,
    ANTISTICKERWARN: false,
};
