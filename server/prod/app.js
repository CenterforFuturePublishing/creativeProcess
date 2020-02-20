"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server(onPostRequest) {
        this._app = express_1.default();
        this._app.use(express_1.default.json());
        this._app.all('*', function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Origin, Accept');
            next();
        });
        this._app.post("/api/poem", function (req, res, next) {
            var date = new Date();
            console.log("connection at : ", date.getDay(), " / ", date.getMonth(), " | ", date.getHours(), " : ", date.getMinutes(), " : ", date.getSeconds());
            console.log(req.body);
            res.send({ status: 'SUCCESS' });
            var jsonData = {
                poem: req.body.poem,
                graisse: req.body.graisse,
                contraste: req.body.contraste,
                rigidite: req.body.rigidite,
            };
            onPostRequest(jsonData);
        });
        this._app.listen(3000, function () {
            console.log('app listening on port 3000!');
        });
    }
    return Server;
}());
exports.Server = Server;
