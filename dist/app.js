"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const user_routes_1 = require("./routes/user/user.routes");
const hapi_1 = require("@hapi/hapi");
const swapi_routes_1 = require("./routes/swapi/swapi.routes");
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = new hapi_1.Server({
        port: 5000,
        host: "localhost",
    });
    (0, swapi_routes_1.swapiRoute)(server);
    (0, user_routes_1.userRoute)(server);
    server.start();
    console.log(`server running on: ${server.info.uri}`);
});
exports.init = init;
process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(0);
});
