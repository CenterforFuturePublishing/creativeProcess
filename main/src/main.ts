/// <reference types="../../ISharedData"/>

import io from "socket.io"
import express from "express"
import {createServer} from "http"
import fs from "fs"
import {ISocketEvents} from "../../ISocketEvents"
import path from "path"

const extendScriptString = fs.readFileSync('./../extendScriptApp/dist/main.txt').toString();

console.log(io)

const app = express()
const http = createServer(app)
const ioHttp = io(http)

ioHttp.on('connection', function(socket){
  console.log('a user connected');

  ioHttp.emit('news');

  socket.on(ISocketEvents.DATA_SEND_FROM_WEBAPP, function(data: ISharedData) {
    // sendExtendScriptToIllustrator({
    //   width: 500,
    //   height: 500,
    //   textContent: data.textContent,
    // })

    console.log(data)
  })

});

http.listen(3000, function(){
  console.log('listening on *:3000')
})

function sendExtendScriptToIllustrator(sharedDate: ISharedData) {

  const extendScriptCode = "var sharedDate = "+ JSON.stringify(sharedDate) +"; "+ extendScriptString

  ioHttp.emit("toExtension", extendScriptCode)
}
