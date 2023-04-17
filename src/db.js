import { createPool } from "mysql2/promise";

export const pool = await createPool({
    user:'root',
    password: '',
    host:'localhost',
    port: 3306,
    database: 'testnodejs'
})