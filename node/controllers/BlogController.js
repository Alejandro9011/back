import  Blogmodel from "../models/BlogModel.js";


       //Mostrar todos los blogs
       export const getAllBlog=async(req,res)=>{
                try {
                    const blogs= await Blogmodel.find()
                    res.status(200).json(blogs)
                    
                } catch (error) {
                    res.json({message:error.message})
                }
                }

  //Mostrar un blog

    export const getBlog=async(req,res)=>{
        try {
            const id= req.params.id
            await Blogmodel.findById({_id:id }).then((blog=>{
            res.status(200).json(blog)
           }))
          
        } catch (error) {
            res.json({message:error.message})
        }
     }
   
  //Crear un blog
     export const createBlog= async(req,res)=>{
        try {
            console.log(req.body)
            await Blogmodel.create(req.body)
            res.status(200).json({
                "message":"¡Blog creado correctamente!"
            })
        } catch (error) {
            res.json({message:error.message})
        }
     }
   

  //Actualizar un  blog
     export const updateBlog=async(req,res)=>{
        try {
            const id= req.params.id
           await Blogmodel.updateOne({_id:id},req.body).then(res=>{
            console.log(res)
           })
            res.status(200).json({
                "message":"¡Registro modificado correctamente!"
            })
        } catch (error) {
            res.json({message:error.message})
        }
     }
   
  //Eliminar  un blog
     export const deleteBlog=async(req,res)=>{
        try {
         const id=(req.params.id)
           await  Blogmodel.deleteOne({_id:id}).then(res=>{
            console.log(res)
           })
            res.status(200).json({
                "message":"¡Registro eliminado correctamente!"
            })
        } catch (error) {
            res.json({message:error.message})
        }
     }
   