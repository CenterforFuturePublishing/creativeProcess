import {Window} from "node-window-manager"
import * as robotJS from "robotjs"
import {getActiveWindowInfo} from "../windowManager/main"
import printInfo from "../_tools/printInfo"

export default async function() {
  const cuttingMasterWindow = await lunchCuttingMasterFromIllustrator()

  console.info("=====", cuttingMasterWindow, "-----")
}

async function lunchCuttingMasterFromIllustrator(): Promise<null | Window> {
  return new Promise(resolve => {
    openIllustratorMenu_fichier()

    const window = getActiveWindowInfo().window

    printInfo("must be 'fichier'", window.getTitle())

    if(window.getTitle() !== 'Fichier') {
      printInfo("================ \n/!\\/!\\/!\\/!\\/!\\\nERROR: lunchCutingMasterFromIllustrator(), can't open 'Fichier' menu")
      resolve(null)
    }

    openIllustratorMenu_fichier_cuttingMaster()

    openIllustratorMenu_fichier_cuttingMaster_lunchCUtingMaster()

    setTimeout(() => {
      resolve( window )
    }, 30_000)
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
  robotJS.moveMouseSmooth(550, 550, 50)

  robotJS.mouseClick()
}
