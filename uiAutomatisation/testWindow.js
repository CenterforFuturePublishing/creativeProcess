
const { windowManager } = require("node-window-manager")

function test() {
    windowManager.requestAccessibility()

    const window = windowManager.getActiveWindow()

    // Prints the currently focused window title
    console.log("focused window instance: ", window)
    console.log("focused window title: ", window.getTitle())
}

setTimeout(test, 1000)

