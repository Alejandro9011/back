import  express  from "express";
import  cors  from "cors";
import  db  from "../node/database/db.js";
import blogRoutes from '../node/routes/routes.js'


const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/blogs',blogRoutes)
const port = process.env.PORT || 8000;


app.listen(port,()=>{
    console.log('Server UP running in http://localhost:8000/')
})
    

