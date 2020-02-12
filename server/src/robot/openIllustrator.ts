import Child_process from "child_process"
import path from "path"

export default async function(): Promise<boolean> {

  const ILLUSTRATOR_APPLICATION_PATH = "/Applications/Adobe\\ Illustrator\\ 2020/Adobe\\ Illustrator.app"
  const TIME_TO_WAIT_FOR_USE_ILLUSTRATOR_APP = 1_000
  const ILLUSTRATOR_MODEL_FILE_PATH = path.resolve("resources/DL-MODEL.ai")

  return new Promise(resolve => {

    console.log(`open ${ILLUSTRATOR_MODEL_FILE_PATH} -a ${ILLUSTRATOR_APPLICATION_PATH}`)

    Child_process.exec(`open ${ILLUSTRATOR_MODEL_FILE_PATH} -a ${ILLUSTRATOR_APPLICATION_PATH}`, (error, stdout, stderr) => {
      setTimeout(() => {
        if(error) {
          resolve(false)
        } else {
          resolve(true)
        }
      }, TIME_TO_WAIT_FOR_USE_ILLUSTRATOR_APP)
    })
  })

}

