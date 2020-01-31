const cp        = require("child_process")


function startPrinting() {
    cp.exec("node startPrinting.js", (error, stdout, stderr) => {
        if(error) {
            console.error("can't print document", error)
        } else {

            console.log(stdout)
            console.log(stderr)

            setTimeout(startPrinting, 5 * 60_000)
        }
    })
}

startPrinting()
