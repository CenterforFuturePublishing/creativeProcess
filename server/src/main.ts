import {Server} from "./app"
import {main} from "./robot/main"

let documentIsCurrentlyPrinting = false

const arrayOfStandbyPoemData: IPoemData[] = []

new Server(jsonData => {

  if(documentIsCurrentlyPrinting) {

    arrayOfStandbyPoemData.push(jsonData)

  } else {

    documentIsCurrentlyPrinting = true

    printPoem(jsonData)

  }

})

function printStandbyPoem() {
  if(arrayOfStandbyPoemData.length > 0) {

    const poemDataToPrint = arrayOfStandbyPoemData.splice(0, 1)

    try {

      printPoem(poemDataToPrint[0])

    } catch(e) {

      console.error("arrayOfStandbyPoemData error: ", e)

    }
  }
}

function printPoem(poemData: IPoemData) {
  try {

    main(poemData).then(() => {
      console.info("success start to end post request")
      documentIsCurrentlyPrinting = false
      printStandbyPoem()
    })

  } catch (e) {

    console.error("error for post request and printing")
    documentIsCurrentlyPrinting = false
    printStandbyPoem()

  }

  console.info("arrayOfStandbyPoemData: ", arrayOfStandbyPoemData)
}
