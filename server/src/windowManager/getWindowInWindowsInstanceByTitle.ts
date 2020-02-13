import {Window} from "node-window-manager"

export default function (arrayOfWindow: Window[], name: string): Window[] {
  const arrayOfWindowMatchWithName: Window[] = []

  for(const window of arrayOfWindow) {
    if(window.getTitle() === name) arrayOfWindowMatchWithName.push(window)
  }

  return arrayOfWindowMatchWithName
}
