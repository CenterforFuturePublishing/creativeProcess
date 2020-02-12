import { windowManager, Window } from "node-window-manager"

// function test() {
//     windowManager.requestAccessibility()
//
//     const window = windowManager.getActiveWindow()
//
//     // Prints the currently focused window title
//     console.log("focused window instance: ", window)
//     console.log("focused window title: ", window.getTitle())
// }
//
// setTimeout(test, 1000)


setInterval(() => {

    const window = windowManager.getActiveWindow();

    // Prints the currently focused window bounds.
    console.log(window);
    console.log(window.getTitle())
    console.log(window.getBounds());

    // window.maximize()

// This method has to be called on macOS before changing the window's bounds, otherwise it will throw an error.
// It will prompt an accessibility permission request dialog, if needed.
    windowManager.requestAccessibility();


}, 1_000)
