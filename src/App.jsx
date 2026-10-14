import './App.css';
import { Layout } from './components/Layout/Layout';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { Carrito } from './components/Carrito/Carrito';
import { FormularioContainer } from './components/FormularioContainer';
import { Routes, Route } from 'react-router-dom';
import PaginaInicio from './components/PaginaInicio';

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/productos" element={<ItemListContainer
          Mensaje={"Todos los productos"} />} />
        <Route path="/destacados" element={<ItemListContainer
          Mensaje={"Productos destacados"} />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/alta" element={<FormularioContainer />} />
      </Route>
    </Routes>
  );
}
export default App;
