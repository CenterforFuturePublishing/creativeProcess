/// <reference types="../../../ISharedData"/>

import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import {ISocketEvents} from "../../../ISocketEvents"

declare const io: any

Vue.use(Vuex)

declare interface IStore extends IWebAppData {
  socket: any
}

const store: StoreOptions<IStore> = {
  state: {
    textContent: "waiting…",
    socket: io('http://localhost:3000'),
    listOfControl: {
      "vertical axes": {
        min:100,
        max: 900,
        value: 500,
      },
      "horizontal axes": {
        min:100,
        max: 900,
        value: 500,
      },
      "weight axes": {
        min:100,
        max: 900,
        value: 500,
      },
    }
  },
  mutations: {
    sendDataToSocket(state) {
      const dataToSend: IWebAppData = {
        textContent: state.textContent,
        listOfControl: state.listOfControl,
      }

      state.socket.emit(ISocketEvents.DATA_SEND_FROM_WEBAPP, dataToSend)
    }
  },
}

export default new Vuex.Store(store)


