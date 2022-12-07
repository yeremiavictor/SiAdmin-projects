import express from "express";
import cors from "cors";
import session from "express-session"
import dotenv from "dotenv";
import UserRoute from './routes/UserRoute.js'
import ProductRoute from './routes/ProductRoute.js'
// // hanya berfungsi untuk sync database secara otomatis
// import db from './config/database.js'

dotenv.config();


const app = express();

// // non aktifkan kalau berhasil sync table: berfungsi untuk membuat sync otomatis
// (async ()=>{
//     await db.sync()
// })();

app.use(session({
    // @ts-ignore
    secret:process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}))

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

app.use(express.json())
app.use(UserRoute)
app.use(ProductRoute)

app.listen(process.env.APP_PORT, ()=> {
    console.log('server up and running on port...')
})