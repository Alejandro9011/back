import logo from './logo.svg';
import './App.css';

//importamos los componentes
import MostrarBlogs from './blog/MostrarBlogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  {CrearBlog}  from './blog/CrearBlog';
import  {EditarBlog}  from './blog/EditarBlog';

 export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MostrarBlogs />} />
          <Route path='/create' element={<CrearBlog />} />
          <Route path='/edit/:id' element={<EditarBlog />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

