'use strict';


const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')  

let win  


let html_dir = "/assets/html/"

function createWindow() { 
   win = new BrowserWindow({width: 800, height: 600}) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname + html_dir, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
   })) 
}  

app.on('ready', createWindow) 