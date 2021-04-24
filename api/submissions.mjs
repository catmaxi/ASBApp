
// let signin = require('./signin.mjs')

import { reddit } from './signin.mjs'

// console.log(reddit)
// Extracting every comment on a thread
let thread = reddit.getSubmission('msg6cp')

// console.log(thread)
// let content = thread.fetch().then(res => console.log(Object.keys(res)))
let content = thread.fetch().then(res => console.log(res.selftext))
// replies = thread.expandReplies({limit: 1, depth: 1})


