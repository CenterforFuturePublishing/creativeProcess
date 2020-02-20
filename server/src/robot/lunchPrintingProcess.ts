import stringConain from "../_tools/stringConain"
import closeWindow from "./closeWindow"
import {setWindowPositionAndSize} from "../windowManager/main"
import illustratorLayoutProces, {IDocumentData} from "./illustratorProces"
import cuterMasterProcess from "./cuterMasterProcess"
import {INITIAL_WINDOW_POSITION, INITIAL_WINDOW_SIZE} from "./main"
import {Window, windowManager} from "node-window-manager"
import printInfo from "../_tools/printInfo"

export default async function (allWindowsOpen: Window[], poemData: IPoemData): Promise<boolean> {

  for (const window of allWindowsOpen) {

    const title = window.getTitle()

    if (stringConain(title, "Adobe Illustrator")) {

      if (stringConain(title, "erreur")) {
        closeWindow({
          window,
          defaultWindowPosition: INITIAL_WINDOW_POSITION,
        })
      }

      return false

    } else if (stringConain(title, "DL-MODEL.ai")) {

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

      const randomColumnPosition = listOfPositionInDocument[Math.floor(Math.random() * listOfPositionInDocument.length)]

      illustratorLayoutProces({
        contraste:  poemData.contraste,
        graisse:    poemData.graisse,
        poem:       poemData.poem,
        rigidite:   poemData.rigidite,
        xPositionInDocument: randomColumnPosition,
      })

      const cuttingMasterProcess = await cuterMasterProcess()

      return cuttingMasterProcess
    }

  }

  printInfo("ERROR: ")

  console.error("0 window open")

  return false

}
