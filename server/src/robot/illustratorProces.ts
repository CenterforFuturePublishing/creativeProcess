import * as robotJS from "robotjs"
import {DEFAULT_MOUSE_DELAY} from "./main"
import {getActiveWindowInfo} from "../windowManager/main"
import {Window} from "node-window-manager"
import printInfo from "../_tools/printInfo"

export interface IDocumentData extends IPoemData {
  xPositionInDocument: number
}

export default async function ({poem, graisse, contraste, rigidite, xPositionInDocument}: IDocumentData): Promise<boolean> {

  robotJS.setMouseDelay(DEFAULT_MOUSE_DELAY)
  robotJS.setKeyboardDelay(500)

  robotJS.moveMouseSmooth(250, 250, 1)

  robotJS.keyTap("escape")

  robotJS.keyToggle("a", "down", "command")
  robotJS.keyToggle("a", "up")
  robotJS.keyToggle("command", "up")
  robotJS.keyTap("delete")

  robotJS.typeString("t")

  robotJS.mouseClick()

  robotJS.typeString(poem)

  return new Promise(resolve => {

    setTimeout(async () => {
      robotJS.keyTap("escape")

      robotJS.typeString("v")


      // set caractere params
      const caracterPanel = openCaracterePanel()

      printInfo("caracterPanel: ", caracterPanel)

      if (caracterPanel) {

        // familly name
        setValueOfInputString({
          inputPositionRelativeOfPanel: {
            x: 85,
            y: 77,
          },
          panelWindow: caracterPanel,
          stringToEnter: "DL-08",
        })

        // font -size
        setValueOfInputString({
          inputPositionRelativeOfPanel: {
            x: 65,
            y: 137,
          },
          panelWindow: caracterPanel,
          stringToEnter: "22pt",
        })

        // line-height
        setValueOfInputString({
          inputPositionRelativeOfPanel: {
            x: 195,
            y: 137,
          },
          panelWindow: caracterPanel,
          stringToEnter: "25pt",
        })

        //=====
        // font variable value
        //=====
        clickAtPositionRelativeToAWindow({
          panelWindow: caracterPanel,
          inputPositionRelativeOfPanel: {
            x: 228,
            y: 104,
          }
        })

        // épaisseur
        if (graisse < 0 || graisse > 100) graisse = 0
        robotJS.keyTap("tab")
        robotJS.typeStringDelayed(`${graisse}`, 2000)

        // contrast
        if (contraste < 0 || contraste > 100) contraste = 0
        robotJS.keyTap("tab")
        robotJS.typeStringDelayed(`${contraste}`, 2000)

        // rigidité
        if (rigidite < 0 || rigidite > 100) rigidite = 0
        robotJS.keyTap("tab")
        robotJS.typeStringDelayed(`${rigidite}`, 2000)

        robotJS.keyTap("enter")
      }

      // set position of text
      const positionPanelWindow = openTransformationPanel()

      printInfo("positionPanelWindow: ", positionPanelWindow)

      if (positionPanelWindow) {

        // set x position
        setValueOfInputString({
          inputPositionRelativeOfPanel: {
            x: 75,
            y: 50,
          },
          panelWindow: positionPanelWindow,
          stringToEnter: `${xPositionInDocument}cm`,
        })

        // set y position
        setValueOfInputString({
          inputPositionRelativeOfPanel: {
            x: 75,
            y: 75,
          },
          panelWindow: positionPanelWindow,
          stringToEnter: "0cm",
        })

      }

      // unselect all
      robotJS.keyTap("a", ["command", "shift"])

      resolve(true)
    }, 100)

  })

}


function minimalCheckForIllustratorPanelIsOpen(activeWindow: Window): boolean {
  const windowPosition = {
    x: activeWindow.getBounds().x,
    y: activeWindow.getBounds().y,
  }

  if (windowPosition.x && windowPosition.y) return activeWindow.getTitle() === '' && windowPosition.x >= 50 && windowPosition.y >= 50

  return false
}

function openTransformationPanel(): null | Window {
  robotJS.keyToggle("f8", "down", "shift")

  const window = getActiveWindowInfo().window

  let panelIs_NOT_open = !minimalCheckForIllustratorPanelIsOpen(window)

  if (panelIs_NOT_open) {
    robotJS.keyToggle("f8", "down", "shift")
  }

  panelIs_NOT_open = !minimalCheckForIllustratorPanelIsOpen(window)

  if (panelIs_NOT_open) return null
  return window
}

function openCaracterePanel(): null | Window {
  robotJS.keyToggle(":", "down", "command")

  const window = getActiveWindowInfo().window

  let panelIs_NOT_open = !minimalCheckForIllustratorPanelIsOpen(window)

  if (panelIs_NOT_open) {
    robotJS.keyToggle(":", "down", "command")
  }

  panelIs_NOT_open = !minimalCheckForIllustratorPanelIsOpen(window)

  if (panelIs_NOT_open) return null
  return window
}

interface ISetValueOfInputStringParams {
  panelWindow: Window
  stringTypingSpeed?: number
  stringToEnter: string
  inputPositionRelativeOfPanel: { x: number; y: number }
  stringPast?: boolean
  validate?: boolean
}

function setValueOfInputString({
                                 panelWindow,
                                 stringTypingSpeed = 2000,
                                 stringToEnter,
                                 inputPositionRelativeOfPanel,
                                 stringPast = false,
                                 validate = true
                               }: ISetValueOfInputStringParams) {

  clickAtPositionRelativeToAWindow({
    inputPositionRelativeOfPanel,
    panelWindow,
  })

  robotJS.keyToggle("a", "down", "command")
  robotJS.keyToggle("a", "up")
  robotJS.keyToggle("command", "up")

  if (stringPast) {
    robotJS.typeString(stringToEnter)
  } else {
    robotJS.typeStringDelayed(stringToEnter, stringTypingSpeed)
  }


  if (validate) robotJS.keyTap("enter")
}

interface IClickAtPositionRelativeToAWindowParams {
  panelWindow: Window
  inputPositionRelativeOfPanel: { x: number; y: number }
}

function clickAtPositionRelativeToAWindow({panelWindow, inputPositionRelativeOfPanel}: IClickAtPositionRelativeToAWindowParams) {
  robotJS.moveMouseSmooth(
    inputPositionRelativeOfPanel.x + (panelWindow.getBounds().x || 0),
    inputPositionRelativeOfPanel.y + (panelWindow.getBounds().y || 0),
  )

  robotJS.mouseClick()
}
