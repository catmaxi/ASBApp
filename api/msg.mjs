import { reddit } from './signin.mjs'



let msg = reddit.getMessage('0')


// console.log(reddit)
// msg.fetch().then(
//     res => console.log(res)
// )

// let inbox = reddit.getInbox().then(
//         res => console.log(res)
//     )

// reddit.getNewModmailConversation('75hxt').then(
//     res => console.log(res)
// )
// console.log(inbox)


reddit.getUser('wenxuan27').sendMessage("he")
