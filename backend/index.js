import express from "express";
import cors from "cors";
import session from "express-session"

const app = express();

app.listen(process.env.APP_PORT, ()=> {
    console.log('server up and running on port...')
})