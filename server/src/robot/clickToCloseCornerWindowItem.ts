import * as robotJS from "robotjs"
import {DEFAULT_MOUSE_DELAY} from "./main"

interface IClickToCloseCornerWindowItemPrams {
  defaultWindowPosition: { x: number; y: number }
}

export default function ({defaultWindowPosition}: IClickToCloseCornerWindowItemPrams) {

  robotJS.setMouseDelay(0)

  robotJS.moveMouseSmooth(
    15 + defaultWindowPosition.x,
    10 + defaultWindowPosition.y
  )

  robotJS.mouseClick()
}
