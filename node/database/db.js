// import { Sequelize } from "sequelize";

//  export const db = new Sequelize('database_app','root','hijodeDios1a',{
//     host:'localhost',
//     dialect:'mysql'
// })

import mongoose from 'mongoose'
const url ='mongodb://127.0.0.1:27017/mern'
mongoose.connect(url)


const db = mongoose.connection
db.on('open', ()=>{ console.log("¡Conectado a MongoDB!")} )
db.on('error', ()=>{ console.log("¡Error al conectar a MongoDB!")} )

export default db