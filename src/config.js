import { config } from "dotenv";
config();

export const database = {
  connectionLimit: 10,
  host: process.env.DATABASE_HOST || "containers-us-west-180.railway.app",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "nk8cyYoiW5rJSMKeEJht",
  database: process.env.DATABASE_NAME || "railway",
  port: process.env.DATABASE_PORT || 7424,
};

export const port = process.env.PORT || 4000;

export const SECRET = process.env.SECRET || 'some secret key';