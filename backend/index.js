import express from "express";
import cors from "cors";
import session, { Store } from "express-session"
import dotenv from "dotenv";
import UserRoute from './routes/UserRoute.js'
import ProductRoute from './routes/ProductRoute.js'
// hanya berfungsi untuk sync database secara otomatis
import db from './config/database.js'
import AuthRoute from './routes/AuthRoute.js'

// digunakan untuk save session registrasi node js
import SequelizeStore from "connect-session-sequelize"

dotenv.config();

const app = express();

// digunakan untuk save session registrasi node js dalam database
const sessionStore = SequelizeStore(session.Store)
const store = new sessionStore({
    db:db
})



// // non aktifkan kalau berhasil sync table: berfungsi untuk membuat sync otomatis
// (async ()=>{
//     await db.sync()
// })();

app.use(session({
    // @ts-ignore
    secret:process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
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
app.use(AuthRoute)

// matikan untuk menghentikan sync store
// store.sync()

app.listen(process.env.APP_PORT, ()=> {
    console.log('server up and running on port...')
})