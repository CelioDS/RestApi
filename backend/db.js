import mysql from "mysql";

export const db = mysql.createConnection({
  host: "34.171.26.217",
  user: "root",
  password: "",
  database: "empresas",

  projectId: "bamboo-strata-393118",

});