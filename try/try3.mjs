
// console.log("hello")
import { reddit } from '../api/signin.mjs'


let sub = reddit.getSubreddit("AltStreetBets")

// console.log(sub)

reddit.composeMessage({
    to: 'back_to_the_ussr',
    subject: "test asb",
    text: 'test asb',
    fromSubreddit: sub
}).then((res) => {
    console.log(res)
})



// reddit.composeMessage({
//     to: 'wenxuan27',
//     subject: "test test test",
//     text: 'test 1 2 1 2 123'
// })