'use strict';

import snoowrap from 'snoowrap'
import dotenv from 'dotenv'

const env = dotenv.config()


export const reddit = new snoowrap({
    userAgent: 'ASB:app',
    clientId: env.parsed.CLIENTID,
    clientSecret: env.parsed.CLIENTSECRET,
    username: env.parsed.USERNAME,
    password: env.parsed.PASSWORD
});


// export const reddit = new snoowrap({
//     userAgent: 'ASB:app',
//     clientId: env.parsed.CLIENTID,
//     clientSecret: env.parsed.CLIENTSECRET,
//     refreshToken: env.parsed.REFRESHTOKEN
// });

