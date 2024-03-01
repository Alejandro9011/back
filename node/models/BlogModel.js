// import { db } from "../database/db.js";
// import { DataTypes } from "sequelize";


//  export const Blogmodel=db.define('blogs',{
//     title:{type: DataTypes.STRING},
//     content:{type: DataTypes.STRING},
    

// })

import mongoose from "mongoose";

const Schema = mongoose.Schema

const blogSchema = new Schema(
{
title:{type:String},
content:{type:String}
},
{collection:'blogs'}
)

export default mongoose.model('BlogModel',blogSchema)


