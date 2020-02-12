import {Window} from "node-window-manager"
import setWindowPosition from "../windowManager/setWindowPosition"
import clickToCloseCornerWindowItem from "./clickToCloseCornerWindowItem"

interface ICloseWindowParams {
  window: Window
  defaultWindowPosition: { x: number; y: number }
}

export default function ({window, defaultWindowPosition}: ICloseWindowParams) {

  window.bringToTop()

  setWindowPosition({
    window,
    defaultWindowPosition
  })

  clickToCloseCornerWindowItem({defaultWindowPosition})
}
