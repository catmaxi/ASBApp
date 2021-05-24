'use strict';


const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')
const { ipcMain } = require('electron')

const { reddit, getthread, getAuthors, addAuthor, check_if_in_no_list, check_if_MOD, logtest } = require('./api/ama')

let win


let html_dir = "/assets/html/"

// console.log(path.join(__dirname + html_dir, 'index.html'))
function createWindow() {
   win = new BrowserWindow({
      width: 1000,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
      },
      icon: __dirname + '/assets/img/community_icon.png'
    });
   win.loadURL(url.format({
      pathname: path.join(__dirname + html_dir, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
}



// Event handler for asynchronous incoming messages
ipcMain.on('asynchronous-message', (event, arg) => {
   console.log(arg)

   // Event emitter for sending asynchronous messages
   event.sender.send('asynchronous-reply', 'async pong')
})


// Event handler for asynchronous incoming messages
ipcMain.on('amathreadsearch', (event, args) => {
   console.log(args)


   let authors = ama(args)

   // Event emitter for sending asynchronous messages
   event.sender.send('amathreadsearch', 'test success!')
})


// Event handler for synchronous incoming messages
ipcMain.on('amathreadsearchsync', (event, args) => {
   console.log(args)

   // logtest(arg)

   let authors = ama(event, args)

   // // Synchronous event emmision
   // event.returnValue = 'amathreadsearchsync success!'
})



// Event handler for synchronous incoming messages
ipcMain.on('amathreadsearchsync', (event, args) => {
   console.log(args)

   // logtest(arg)

   let authors = ama(event, args)

   // // Synchronous event emmision
   // event.returnValue = 'amathreadsearchsync success!'
})



app.on('ready', createWindow);



async function ama(event, args){
   let returnValue = await getthread(...args)
   // Synchronous event emmision
   event.returnValue = 'amathreadsearchsync success!'
   return returnValue
}


