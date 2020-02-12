"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_window_manager_1 = require("node-window-manager");
/**
 * get all window
 */
function getAllWindow() {
    return node_window_manager_1.windowManager.getWindows();
}
exports.getAllWindow = getAllWindow;
// activeWindow
function getActiveWindowInfo() {
    var window = node_window_manager_1.windowManager.getActiveWindow();
    // Prints the currently focused window bounds.
    // console.log(window)
    // console.log(window.getTitle())
    // console.log(window.getBounds())
    // This method has to be called on macOS before changing the window's bounds, otherwise it will throw an error.
    // It will prompt an accessibility permission request dialog, if needed.
    node_window_manager_1.windowManager.requestAccessibility();
    return {
        window: window,
        size: window.getBounds(),
        title: window.getTitle()
    };
}
exports.getActiveWindowInfo = getActiveWindowInfo;
function setWindowPositionAndSize(_a) {
    var window = _a.window, position = _a.position;
    window.setBounds({
        x: position.x,
        y: position.y,
        width: position.width,
        height: position.height,
    });
}
exports.setWindowPositionAndSize = setWindowPositionAndSize;
