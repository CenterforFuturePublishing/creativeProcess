import {Window} from "node-window-manager"

interface ISetWindowPositionParams {
  window: Window
  defaultWindowPosition: { x: number; y: number }
}

export default function ({window, defaultWindowPosition}: ISetWindowPositionParams) {
  window.setBounds(defaultWindowPosition)
}
