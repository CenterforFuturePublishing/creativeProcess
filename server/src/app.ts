import express from "express"
import bodyParser from "body-parser"

export class Server {

  private _app = express()

  constructor() {

    this._app.use(express.json())

    this._app.all('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Origin, Accept');
      next();
    });


    this._app.post("/api/poem", (req, res, next) => {

      console.log("connection")

      console.log(req.body)

      res.send({ status: 'SUCCESS'})
    })

    this._app.listen(3000, () => {
      console.log('app listening on port 3000!')
    })
  }


}
