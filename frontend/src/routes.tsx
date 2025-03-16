import { Routes, Route } from 'react-router-dom';
import { SignUpPage } from './pages/SingUpPage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/registro" element={<SignUpPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/" element={<LoginPage />} />
        </Routes>
    );
};
