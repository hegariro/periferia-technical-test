import { Routes, Route } from 'react-router-dom';
import { SignUpPage } from './pages/SingUpPage';
// Importar otras páginas aquí

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/registro" element={<SignUpPage />} />
            {/* Agregar ruta login después */}
            <Route path="/" element={<div>Bienvenido a la página principal</div>} />
            {/* Puedes agregar más rutas aquí */}
        </Routes>
    );
};
