import './App.css';
import { Layout } from './components/Layout/Layout';
import { ItemListContainer } from './components/ItemListContainer';
import { FormularioContainer } from './components/FormularioContainer';
import { Routes, Route } from 'react-router-dom';
import PaginaInicio from './components/PaginaInicio';

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/productos" element={<ItemListContainer
          Mensaje={"Productos destacados"} />} />
        <Route path="/destacados" element={<ItemListContainer
          Mensaje={"Todos los productos"} />} />
        <Route path="/alta" element={<FormularioContainer />} />
      </Route>
    </Routes>
  );
}
export default App;