import { reddit } from './signin.mjs'

console.log("hi")

function view_asb_app(){

    
}


function send_test_msg(){

    reddit.composeMessage({
        to: 'wenxuan27',
        subject: "testmessage",
        text: 'testmessage'
    })

    console.log("message send")
}