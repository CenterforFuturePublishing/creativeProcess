const robotJS   = require("robotjs")
const cp        = require("child_process")

const ILLUSTRATOR_APPLICATION_PATH = "/Applications/Adobe\\ Illustrator\\ 2020/Adobe\\ Illustrator.app"

robotJS.setMouseDelay(1)

cp.exec(`open ${ILLUSTRATOR_APPLICATION_PATH}`, (error, stdout, stderr) => {
    console.log(error)
    console.log(stdout)
    console.log(stderr)

    robotJS.moveMouseSmooth(10, 10)

    robotJS.mouseClick()
})

