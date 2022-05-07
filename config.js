/* Copyright (C) 2021 sappu drozoxo
edited by Sappu Jifi
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v1.3.2 Global Stable',
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env.CONNECTION_CODE === undefined ? '' : process.env.CONNECTION_CODE,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    AFN: process.env.ALL_CAPTION === undefined ? 'Made By Sappu-Drozoxk' : process.env.ALL_CAPTION,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://telegra.ph/file/749e2d24111755b5980ad.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    AUTOSTICKER: process.env.AUTO_STICKER === undefined ? 'true' : process.env.AUTO_STICKER,
    warn_count: process.env.WARN_COUNT === undefined ? '3' : process.env.WARN,
    PLK: process.env.OWNER_NAME === undefined ? 'default' : process.env.OWNER_NAME,
    SAPPU: process.env.DROZOXO_PASSWORD === undefined ? false : process.env.DROZOXO_PASSWORD,
    FULLEVA: process.env.FULL_EVA === undefined ? 'false' : process.env.FULL_EVA,
    BOT_PRESENCE: process.env.BOT_PRESENCE === undefined ? 'online' : process.env.BOT_PRESENCE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    PLKS: process.env.THERI_LIST === undefined ? false : process.env.THERI_LIST,
    OWNER: process.env.OWNER_NAME === undefined ? '✫⃟➸⃟̗̀̀̀̀̀̀̀̀̀̀̀̀̀𝓲𝓽𝘴 ꪑꫀ◈͜͡✮᭄᭄ุุุุุุุุุุ𝘴ꪖρρꪊ✫⃟➸⃟̗̀̀̀̀̀̀̀̀̀̀̀̀̀◈͜͡ꫂ' : process.env.OWNER_NAME,
    PHONE: process.env.NUMBER === undefined ? '919400545895' : process.env.NUMBER,
    MENTION: process.env.TAG_REPLY === undefined ? '919400545895@s.whatsapp.net' : process.env.TAG_REPLY,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    GIF_WEL: process.env.GIF_WEL === undefined ? 'https://c.tenor.com/QNtFLycfQiAAAAPo/pika-pikachu.mp4' : process.env.GIF_WEL,
    GIF_BYE: process.env.GIF_BYE === undefined ? 'https://c.tenor.com/CIDOwXeJO4gAAAPo/pokemon-wave.mp4' : process.env.GIF_BYE,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    THERI_KICK: process.env.THERI_KICK === undefined ? 'false' : process.env.THERI_KICK,
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    INBO1: process.env.INBO_BLOCK === undefined ? 'true' : process.env.INBO_BLOCK,
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    SAID: process.env.BGM_DURATION === undefined ? '31996800' : process.env.BGM_DURATION,
    FULLEVA: process.env.FULL_EVA === undefined ? 'false' : process.env.FULL_EVA,
    DROZOXO_AI: process.env.DROZOXO_AI === undefined ? 'false' : process.env.FULL_EVA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    GEAR: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    BC: process.env.BROADCAST_NAME === undefined ? '😏SAPPU🤟DROZOXO😏⁩' : process.env.BROADCAST_NAME,
    BOTSK: process.env.BOT_NAME === undefined ? '😏SAPPU🤟DROZOXO😏' : process.env.BOT_NAME,
    ALIVEBUTTON: process.env.ALIVEBUTTON === undefined ? 'ꪶʀ᭄ʀ᭄ʀꫂ' : process.env.ALIVEBUTTON,
    ALIVE_BUTTON: process.env.ALIVE_BUTTON === undefined ? 'ꪶʀ᭄ʀ᭄ʀꫂ' : process.env.ALIVE_BUTTON,
    SAPPU: process.env.NAME_STYLE === undefined ? '★⟵𝄞⃝👾ͥ͢ ͭ ᷤ  ͫ͢ ͤᴅʀᴏᴢᴏxᴏ͢₂₀₀₄✿⃝⸙⃝' : process.env.NAME_STYLE,
    INSTA: process.env.INSTA_LINK === undefined ? 'https://instagram.com/_v__fa__k___sappu' : process.env.INSTA_LINK,
    PM: process.env.GROUP_LINK === undefined ? 'http://Wa.me/+919400545895' : process.env.GROUP_LINK,
    LOGOSK: process.env.ALL_IMG === undefined ? 'https://telegra.ph/file/749e2d24111755b5980ad.jpg' : process.env.ALL_IMG,
    SLINK: process.env.SOCIAL_MEDIA === undefined ? 'https://instagram.com/_v__fa__k___sappu' : process.env.SOCIAL_MEDIA,
    TAGPLK: process.env.TAG_HEADER === undefined ? '*എല്ലാരും ഉഷാർ ആക് 🥳😜📢*' : process.env.TAG_HEADER,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? '919400545895,0' : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "919400545895-1627138839",
    SUPPORT2: "919207342889-1632403322",
    SUPPORT3: "919207342889-1621015274"
};
