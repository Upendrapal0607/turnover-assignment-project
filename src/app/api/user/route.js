import { query } from "@/app/config/db";
import axios from "axios";
const bcrypt = require('bcrypt');

export async function GET() {

 const users = await query({
        query: `SELECT * FROM users`,
        values: [],
    });
    let data = JSON.stringify(users);
    return new Response(data, {
        status: 200,
    });
}

export async function POST(request) {
    try {
        const { username, email, password } = JSON.parse(await request.text());
        const hashPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(password, 3, (err, hash) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(hash);
                }
            });
        });

        // Insert user into the database
        const users = await query({
            query: `INSERT INTO users (username, password, email) VALUES ('${username}','${hashPassword}','${email}')`,
            values: [username, hashPassword, email],
        });

        if (users.affectedRows === 1) {
            return new Response(JSON.stringify({ message: "User register success" }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        } else {
            return new Response(JSON.stringify({ message: "User not found" }), {
                status: 404,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error occurred" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}

