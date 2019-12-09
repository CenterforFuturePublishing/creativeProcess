declare interface ISharedData {
  width: number
  height: number
  textContent: string
}

declare interface IWebAppData {
  textContent: string
  listOfControl: {[value: string]: IControl}
}

declare interface IControl {
  value: number
  min: number | 100
  max: number | 900
}
