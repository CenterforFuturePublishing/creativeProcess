const robotJS   = require("robotjs")
const cp        = require("child_process")
const fs        = require("fs")

const illustratorOpeningTime_millisecond = 10000

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
        }
    }
}

const ILLUSTRATOR_APPLICATION_PATH = "/Applications/Adobe\\ Illustrator\\ 2020/Adobe\\ Illustrator.app"

let imageCaptureCounter = 0

robotJS.setMouseDelay(defaultMouseDelay)

cp.exec(`open ${ILLUSTRATOR_APPLICATION_PATH}`, (error, stdout, stderr) => {
    console.log(error)
    console.log(stdout)
    console.log(stderr)

    robotJS.setMouseDelay(illustratorOpeningTime_millisecond)

    robotJS.moveMouseSmooth(mousePosition.illustrator.fichier.x, mousePosition.illustrator.fichier.y)

    robotJS.setMouseDelay(defaultMouseDelay)

    robotJS.mouseClick()

    robotJS.moveMouseSmooth(mousePosition.illustrator.fichier__imprimer.x, mousePosition.illustrator.fichier__imprimer.y)

    robotJS.mouseClick()

    const image = robotJS.screen.capture()

    console.info("screenSize: ", image.width, " x ", image.height)

    // fs.writeFileSync(`screenCapture-${imageCaptureCounter}.raw`, image.image)

    imageCaptureCounter++

    robotJS.moveMouseSmooth(mousePosition.illustrator.printerWindow.x, mousePosition.illustrator.printerWindow.y)

    robotJS.mouseClick()

})

