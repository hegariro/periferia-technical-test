import { Routes, Route } from 'react-router-dom';
import { SignUpPage } from './pages/SingUpPage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { PublicationPage } from './pages/PublicationPage';
import { Dashboard } from './components/Dashboard/Dashboard';

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/registro" element={<SignUpPage />} />
            <Route path="/profile" element={<Dashboard><ProfilePage /></Dashboard>} />
            <Route path="/publication" element={<Dashboard><PublicationPage /></Dashboard>} />
            <Route path="/" element={<LoginPage />} />
        </Routes>
    );
};
