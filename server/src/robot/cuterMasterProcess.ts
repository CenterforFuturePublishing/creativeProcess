import {Window} from "node-window-manager"
import * as robotJS from "robotjs"
import {getActiveWindowInfo} from "../windowManager/main"
import printInfo from "../_tools/printInfo"
import {CUTTING_MASTER_CUTTING_PLUGIN_WINDOW_NAME, DEFAULT_MOUSE_DELAY} from "./main"

// const TIME_TO_WAIT_FOR_CUTTING_MASTER = 8_000 // <-- crash
const TIME_TO_WAIT_FOR_CUTTING_MASTER = 20_000 // <-- ok
// const TIME_TO_WAIT_FOR_CUTTING_MASTER = 60_000 // <-- secure

export default async function(): Promise<boolean> {
  const cuttingMasterPluginIsLunch = await lunchCuttingMasterPluginFromIllustrator()

  if(cuttingMasterPluginIsLunch) {

    const activeWindow = getActiveWindowInfo()

    if(activeWindow.title ===  CUTTING_MASTER_CUTTING_PLUGIN_WINDOW_NAME) {

      const rightOfCuttingMasterPluginWindow    = (activeWindow.window.getBounds().x || 0) + (activeWindow.window.getBounds().width || 0)
      const bottomOfCuttingMasterPluginWindow   = (activeWindow.window.getBounds().y || 0) + (activeWindow.window.getBounds().height || 0)

      const buttonPosition_send = {
        x: rightOfCuttingMasterPluginWindow - 130,
        y: bottomOfCuttingMasterPluginWindow - 30,
      }

      const buttonPosition_close = {
        x: rightOfCuttingMasterPluginWindow - 50,
        y: bottomOfCuttingMasterPluginWindow - 30,
      }


      try {
        robotJS.setMouseDelay(1000)

        robotJS.moveMouseSmooth(buttonPosition_send.x, buttonPosition_send.y, 5)

        robotJS.mouseClick()

        robotJS.moveMouseSmooth(buttonPosition_close.x, buttonPosition_close.y, 5)

        robotJS.mouseClick()

        robotJS.setMouseDelay(DEFAULT_MOUSE_DELAY)

        console.log("getActiveWindowInfo()")
        console.log(getActiveWindowInfo())

        return true

      } catch (e) {

        printInfo("ERROR: ")
        console.error("i suspect plugin doesn't have time to communicate with the plotter")

        return false

      }

    } else {
      printInfo("ERROR: ", activeWindow)
      console.error("cutting master is open but activeWindow has not correct title")

      return false
    }

  } else {

    return false

  }

}

async function lunchCuttingMasterPluginFromIllustrator(): Promise<boolean> {
  return new Promise(resolve => {
    openIllustratorMenu_fichier()

    const window = getActiveWindowInfo().window

    printInfo("must be 'fichier'", window.getTitle())

    if(window.getTitle() !== 'Fichier') {
      printInfo("================ \n/!\\/!\\/!\\/!\\/!\\\nERROR: lunchCutingMasterFromIllustrator(), can't open 'Fichier' menu")
      resolve(false)
    }

    openIllustratorMenu_fichier_cuttingMaster()

    openIllustratorMenu_fichier_cuttingMaster_lunchCUtingMaster()

    setTimeout(() => {
      resolve( true )
    }, TIME_TO_WAIT_FOR_CUTTING_MASTER)
  })
}

function openIllustratorMenu_fichier() {
  robotJS.moveMouseSmooth(168, 13, 1)

  robotJS.mouseClick()
}

function openIllustratorMenu_fichier_cuttingMaster() {
  robotJS.moveMouseSmooth(200, 540, 1)
}

function openIllustratorMenu_fichier_cuttingMaster_lunchCUtingMaster() {
  robotJS.moveMouseSmooth(550, 550, 5)

  robotJS.mouseClick()
}
