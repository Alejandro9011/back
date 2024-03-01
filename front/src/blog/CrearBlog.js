
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const URI = 'http://localhost:8000/blogs/'

export function CrearBlog () {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()


    //Procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        console.log(title,content)
        await axios.post(URI, { title: title, content: content })
        navigate('/')
    }


    return (
        <div>
            <h3>Create POST</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label"></label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label"></label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        className="form-control"
                    />

                </div>
                <button type="submit" className="btn btn-primary">Store</button>
            </form>
        </div>
    )
}


