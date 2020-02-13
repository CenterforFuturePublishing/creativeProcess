import * as robotJS from "robotjs"
import openIllustrator from "./openIllustrator"
import printInfo from "../_tools/printInfo"
import {getAllWindow} from "../windowManager/main"
import getWindowInWindowsInstanceByTitle from "../windowManager/getWindowInWindowsInstanceByTitle"
import lunchPrintingProcess from "./lunchPrintingProcess"

/**
 * parameters
 */

// window names

export const CUTTING_MASTER_CUTTING_PLUGIN_WINDOW_NAME = "Découper/Tracer"

// robotJS

export const DEFAULT_MOUSE_DELAY = 500

// screen info

export const INITIAL_WINDOW_POSITION = {x: 0, y: 24}
export const INITIAL_WINDOW_SIZE     = {
  width: robotJS.getScreenSize().width - INITIAL_WINDOW_POSITION.x,
  height: robotJS.getScreenSize().height - - INITIAL_WINDOW_POSITION.y,
}

/***/

robotJS.setMouseDelay(DEFAULT_MOUSE_DELAY)

async function main() {
  const illustratorIsOpen = await openIllustrator()
  printInfo("illustrator is open: ", illustratorIsOpen)

  if(illustratorIsOpen) {

    let printingProcess: boolean

    const allWindowsOpen = getAllWindow()

    const arrayOfCuttingMasterPluginWindow = getWindowInWindowsInstanceByTitle(allWindowsOpen, CUTTING_MASTER_CUTTING_PLUGIN_WINDOW_NAME)

    printInfo('cutting master plugin windows find: ', arrayOfCuttingMasterPluginWindow)

    if(arrayOfCuttingMasterPluginWindow.length > 0) {
      for(const cuttingMasterPluginWindow of arrayOfCuttingMasterPluginWindow) {
        process.kill(cuttingMasterPluginWindow.processId)
      }

      printingProcess = await lunchPrintingProcess(allWindowsOpen)

    } else {
      printingProcess = await lunchPrintingProcess(allWindowsOpen)
    }

    if(printingProcess) {
      printInfo("document printing with success!")
    } else {
      printInfo("ERROR: ")
      console.error("document can't be printing… =(")
    }

  } else {
    console.error("check illustrator opening failed")
  }
}

main()
