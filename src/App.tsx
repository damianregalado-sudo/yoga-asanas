import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AsanaDetallePage } from './pages/AsanaDetallePage';
import { PerfilPage } from './pages/PerfilPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/asana/:id" element={<AsanaDetallePage />} />
        <Route path="/perfil" element={<PerfilPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
