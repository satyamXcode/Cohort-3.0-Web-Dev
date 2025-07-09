import { Client } from "pg";

//const pgClient = new Client("psql 'postgresql://neondb_owner:npg_e6Upi0VdWwDP@ep-curly-wave-a1l4crlz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'");

const pgClient = new Client({
    user: "neondb_owner",
    password: "npg_e6Upi0VdWwDP",
    port: 5432,
    host: "ep-curly-wave-a1l4crlz-pooler.ap-southeast-1.aws.neon.tech",
    database: "neondb",
    ssl: true
})

async function main(){
    await pgClient.connect();
    //const response = await pgClient.query("SELECT * FROM users;");
    const response = await pgClient.query("UPDATE users SET username='Jaiswal' WHERE id=1");
    console.log(response.rows);
}

main();
