import express from "express"

export class Server {

  private _app = express()

  constructor(onPostRequest: (jsonData: IPoemData)=>void) {

    this._app.use(express.json())

    this._app.all('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Origin, Accept');
      next();
    });


    this._app.post("/api/poem", (req, res, next) => {

      const date = new Date()

      console.log("connection at : ", date.getDay(), " / ",date.getMonth(), " | ", date.getHours(), " : ", date.getMinutes(), " : ", date.getSeconds())

      console.log(req.body)

      res.send({ status: 'SUCCESS'})

      const jsonData: IPoemData = {
        poem:       req.body.poem,
        graisse:    req.body.graisse,
        contraste:  req.body.contraste,
        rigidite:   req.body.rigidite,
      }

      onPostRequest(jsonData)

    })

    this._app.listen(3000, () => {
      console.log('app listening on port 3000!')
    })
  }


}
