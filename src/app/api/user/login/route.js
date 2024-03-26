import { query } from "@/app/config/db";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export async function POST(request) {
  try {
    const { email, password } = JSON.parse(await request.text());
    const Checkusers = await query({
      query: `SELECT * FROM users WHERE email='${email}'`,
      values: [email],
    });

    if (Checkusers.length > 0) {
      const result = await new Promise((resolve, reject) => {
        bcrypt.compare(password, Checkusers[0].password, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });

      if (result) {
        const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7;
        const token = jwt.sign(
          { userID: Checkusers[0]?.id, user_name: Checkusers[0]?.username },
          "turnover",
          { expiresIn: "7d" }
        );
        return new Response(
          JSON.stringify({
            message: "login successful",
            token: token,
            user: Checkusers[0],
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        return new Response(JSON.stringify({ message: "wrong password" }), {
          status: 202,
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    } else {
      return new Response(
        JSON.stringify({ message: "please register first" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error occurred" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
