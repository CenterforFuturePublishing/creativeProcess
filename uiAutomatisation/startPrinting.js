const robotJS   = require("robotjs")
const cp        = require("child_process")
const fs        = require("fs")
const { windowManager } = require("node-window-manager")

const illustratorOpeningTime_millisecond = 10000
const cutterMappOpeningTime_millisecond  = 10000

const defaultMouseDelay = 500

const posePad = {
    x: 0,
    y: 60,
}

const mousePosition = {
    illustrator: {
        fichier: {
            x: 160  - posePad.x,
            y: 72   - posePad.y,
        },
        fichier__imprimer: {
            x: 250 - posePad.x,
            y: 570 - posePad.y,
        },
        printerWindow: {
            x: 922 - posePad.x,
            y: 853 - posePad.y,
        },
        fichier__decoupePlugin: {
            x: 300,
            y: 530,
        },
        fichier__decoupePlugin__openPlugin: {
            x: 600,
            y: 550,
        },
    },
    cuttingMaster: {
        couper: {
            x: 920 - posePad.x,
            y: 885 - posePad.y,
        },
        terminer: {
            x: 1000 - posePad.x,
            y: 885 - posePad.y,
        },
    }
}

const ILLUSTRATOR_APPLICATION_PATH = "/Applications/Adobe\\ Illustrator\\ 2020/Adobe\\ Illustrator.app"

let imageCaptureCounter = 0

let printedPapper = 1

function printADocument() {

    robotJS.setMouseDelay(defaultMouseDelay)

    //cp.exec(`open document.pdf -a ${ILLUSTRATOR_APPLICATION_PATH}`, (error, stdout, stderr) => {
    cp.exec(`open ${ILLUSTRATOR_APPLICATION_PATH}`, (error, stdout, stderr) => {


        setTimeout(() => {
            windowManager.requestAccessibility()

            const window = windowManager.getActiveWindow()

            // Prints the currently focused window title
            console.log("focused window instance: ", window)
            console.log("focused window title: ", window.getTitle())

            console.log("focused window title: ", window.getTitle())

            robotJS.keyTap("enter")

            robotJS.moveMouseSmooth(mousePosition.illustrator.fichier.x, mousePosition.illustrator.fichier.y)

            robotJS.mouseClick()

            // robotJS.moveMouseSmooth(mousePosition.illustrator.fichier__imprimer.x, mousePosition.illustrator.fichier__imprimer.y)
            // console.log("impirmer: focused window instance: ", window)
            let date = new Date()

            robotJS.moveMouseSmooth(mousePosition.illustrator.fichier__decoupePlugin.x, mousePosition.illustrator.fichier__decoupePlugin.y)
            console.log("fichier__decoupePlugin: focused window instance: ", window, date.getMinutes(), " : ", date.getSeconds())

            robotJS.moveMouseSmooth(mousePosition.illustrator.fichier__decoupePlugin__openPlugin.x, mousePosition.illustrator.fichier__decoupePlugin__openPlugin.y)
            date = new Date()
            console.log("fichier__decoupePlugin__openPlugin: focused window instance: ", window, date.getMinutes(), " : ", date.getSeconds())

            robotJS.mouseClick()

            robotJS.setMouseDelay(cutterMappOpeningTime_millisecond)

            robotJS.moveMouseSmooth(mousePosition.cuttingMaster.couper.x, mousePosition.cuttingMaster.couper.y)
            date = new Date()
            console.log("cuttingMaster.couper: focused window instance: ", window, date.getMinutes(), " : ", date.getSeconds())
            robotJS.mouseClick()

            robotJS.moveMouseSmooth(mousePosition.cuttingMaster.terminer.x, mousePosition.cuttingMaster.terminer.y)
            date = new Date()
            console.log("cuttingMaster.terminer: focused window instance: ", window, date.getMinutes(), " : ", date.getSeconds())
            robotJS.mouseClick()

            // const image = robotJS.screen.capture()
            //
            // console.info("screenSize: ", image.width, " x ", image.height)

            // fs.writeFile(`screenCapture-${imageCaptureCounter}.raw`, image.image, {encoding: "base64"}, err => {
            //     if( err ) {
            //         console.log(err)
            //     }
            // })
            // imageCaptureCounter++

            // robotJS.moveMouseSmooth(mousePosition.illustrator.printerWindow.x, mousePosition.illustrator.printerWindow.y)
            // robotJS.mouseClick()

            console.log("printed paper: ", printedPapper)
            printedPapper++
        }, illustratorOpeningTime_millisecond)

    })
}
printADocument()

// ===== test 1

// windowManager.requestAccessibility();
//
// const window = windowManager.getActiveWindow();
//
// // Prints the currently focused window title.
// console.log(window.getTitle());

// =====

// ===== test 2

// const test = require("node-window-manager")
//
// console.log(test)
//
// /**@type {Array<Number>}*/
// const listArrayOfWindowID = test.addon.getWindows()
//
// console.log(listArrayOfWindowID)
//
// for(const windowID of listArrayOfWindowID) {
//     // console.log(test.addon.getWindowTitle(windowID))
//
//     const newWindow = new test.Window(windowID)
//
//     console.log(newWindow)
// }
//
// const window = windowManager.getActiveWindow()
//
// // Prints the currently focused window bounds.
// console.log(window.getBounds())
//
// console.log(window)
