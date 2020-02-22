import * as robotJS from "robotjs"

export default async function (text: string): Promise<boolean> {

  const arrayOfLinesInText = text.split('\n')

  const arrayOfTextIsTap = await tapArrayOfTextWithEnterBreak(arrayOfLinesInText)

  console.log("tapArrayOfTextWithEnterBreak end")

  return arrayOfTextIsTap
}

async function tapArrayOfTextWithEnterBreak(strings: Array<string>): Promise<boolean> {

  for(let index = 0; index < strings.length; index++) {

    let line = strings[index]

    console.log(line)

    await tapLineAndEnter(line)

  }

  return true

}

async function tapLineAndEnter(text: string): Promise<boolean> {

  console.log("couuuuuuscousss")

  return new Promise(resolve => {
    robotJS.typeString(text)

    setTimeout(() => {
      robotJS.keyTap("enter")

      resolve(true)
    }, 100)
  })
}
