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
const pg_1 = require("pg");
//const pgClient = new Client("psql 'postgresql://neondb_owner:npg_e6Upi0VdWwDP@ep-curly-wave-a1l4crlz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'");
const pgClient = new pg_1.Client({
    user: "neondb_owner",
    password: "npg_e6Upi0VdWwDP",
    port: 5432,
    host: "ep-curly-wave-a1l4crlz-pooler.ap-southeast-1.aws.neon.tech",
    database: "neondb",
    ssl: true
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        //const response = await pgClient.query("SELECT * FROM users;");
        const response = yield pgClient.query("UPDATE users SET username='Jaiswal' WHERE id=1");
        console.log(response.rows);
    });
}
main();
