const {app , BrowserWindow} = require ('electron');
const path = require('path');

//function to create a window and load index.html file.
const createWindow = () =>{
    const win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')
}


//checkpoint when app is ready then call createWindow function
app.whenReady().then(()=>{
    createWindow();
})

//validate
app.on("window-all-closed",()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

//
app.on("activate",()=>{
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})
