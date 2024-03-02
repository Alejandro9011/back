// import { Sequelize } from "sequelize";

//  export const db = new Sequelize('database_app','root','hijodeDios1a',{
//     host:'localhost',
//     dialect:'mysql'
// })

import mongoose from "mongoose";
const url = "mongodb+srv://alejandro902019:123@cluster0.lklkehb.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url);

const db = mongoose.connection;
db.on("open", () => {
  console.log("¡Conectado a MongoDB!");
});
db.on("error", () => {
  console.log("¡Error al conectar a MongoDB!");
});

export default db;
