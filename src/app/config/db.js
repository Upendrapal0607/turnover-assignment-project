import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {

  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    post: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    // host: "localhost",
    // port: 3306,
    // user: "root",
    // password: "Upen@1234",
    // database: "turnoverecomercedata",
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    console.log({error});
    return "errror accessing"
  }
}