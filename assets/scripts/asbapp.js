const { ipcRenderer } = require('electron')

// console.log(ipcRenderer.sendSync('synchronous-message', 'sync ping'))

// await ipcRenderer.sendSync('synchronous-message', 'sync ping')

// Async message handler
ipcRenderer.on('amathreadsearch', (event, arg) => {
    console.log(arg)
})




// let thread_name = 'naqn1p'
// let no_list = ['JJKirsch']
// let accept_MOD = false
// let output_file_name = 'test.txt'


async function testrun() {
    let thread_name = 'naqn1p'
    let no_list = ['JJKirsch']
    let accept_MOD = false
    let output_file_name = 'test.txt'

    const subID_element = document.getElementById("submission-id");
    let subID = subID_element.value

    console.log(subID)


    let args = [thread_name, no_list, accept_MOD, output_file_name]
    let res = await ipcRenderer.sendSync('amathreadsearchsync', args)

    console.log(res)
}



// Async message sender
// ipcRenderer.send('amathreadsearch', 'asb app')