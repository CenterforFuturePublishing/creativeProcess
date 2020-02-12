import {Window, windowManager} from "node-window-manager"
import {IRectangle} from "node-window-manager/dist/interfaces"

/**
 * get all window
 */

export function getAllWindow(): Window[] {
  return windowManager.getWindows()
}

// activeWindow
export function getActiveWindowInfo(): IActiveWindowInfo  {
  const window = windowManager.getActiveWindow();

  // Prints the currently focused window bounds.
  // console.log(window)
  // console.log(window.getTitle())
  // console.log(window.getBounds())

  // This method has to be called on macOS before changing the window's bounds, otherwise it will throw an error.
  // It will prompt an accessibility permission request dialog, if needed.
  windowManager.requestAccessibility()

  return {
    window: window,
    size: window.getBounds(),
    title: window.getTitle()
  }
}

export interface IActiveWindowInfo {
  window: Window,
  title: string
  size: IRectangle
}

// illustrator window

interface InitIllustratorWindowSizeParams {
  window: Window
  position: IRectangle
}

export function setWindowPositionAndSize({window, position}: InitIllustratorWindowSizeParams) {
  window.setBounds({
    x: position.x,
    y: position.y,
    width: position.width,
    height: position.height,
  })

}
