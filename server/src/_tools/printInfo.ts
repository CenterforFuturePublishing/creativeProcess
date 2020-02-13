export default function (...args: any) {
  const date = new Date()
  const dateInfo = `${date.getDay()} / ${date.getMonth()} | ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`

  console.log(dateInfo, ...args)
}
