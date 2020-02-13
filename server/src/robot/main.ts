import * as robotJS from "robotjs"
import openIllustrator from "./openIllustrator"
import printInfo from "../_tools/printInfo"
import {getAllWindow, setWindowPositionAndSize} from "../windowManager/main"
import stringConain from "../_tools/stringConain"
import closeWindow from "./closeWindow"
import illustratorLayoutProces from "./illustratorProces"
import cuterMasterProcess from "./cuterMasterProcess"

/**
 * parameters
 */

// robotJS

export const DEFAULT_MOUSE_DELAY = 500

// screen info

const INITIAL_WINDOW_POSITION = {x: 0, y: 24}
const INITIAL_WINDOW_SIZE     = {
  width: robotJS.getScreenSize().width - INITIAL_WINDOW_POSITION.x,
  height: robotJS.getScreenSize().height - - INITIAL_WINDOW_POSITION.y,
}

/***/

robotJS.setMouseDelay(DEFAULT_MOUSE_DELAY)

async function main() {
  const illustratorIsOpen = await openIllustrator()
  printInfo("illustrator is open: ", illustratorIsOpen)

  if(illustratorIsOpen) {

    for(const window of getAllWindow()) {

      const title = window.getTitle()

      if(stringConain(title, "Adobe Illustrator")) {

        if(stringConain(title, "erreur")) {
          closeWindow({
            window,
            defaultWindowPosition: INITIAL_WINDOW_POSITION,
          })
        }

      } else if (stringConain(title,"DL-MODEL.ai")) {

        window.bringToTop()

        setWindowPositionAndSize({
          window: window,
          position: {
            x: INITIAL_WINDOW_POSITION.x,
            y: INITIAL_WINDOW_POSITION.y,
            height: INITIAL_WINDOW_SIZE.height,
            width: INITIAL_WINDOW_SIZE.width,
          }
        })


        const listOfPositionInDocument = [
          1.311,
          22.3462,
          43.3403,
          64.2818,
          85.2425,
        ]

        const randomColumnPosition = listOfPositionInDocument[ Math.floor(Math.random() * listOfPositionInDocument.length) ]

        illustratorLayoutProces({
          poem: "coucou\nnouveau poeme",
          contraste: 55,
          graisse: 10000,
          rigidite: -10,
          yPositionInDocument: randomColumnPosition
        })

        cuterMasterProcess()
      }

    }

  }
}

main()
