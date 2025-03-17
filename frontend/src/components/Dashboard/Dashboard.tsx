import { ReactNode } from 'react';
import { useAppSelector } from '../../app/hooks';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../../features/auth/authSelectors';

interface PrivateRouteProps {
    children: ReactNode;
}

export const Dashboard = ({ children }: PrivateRouteProps) => {
    const isAuthenticated = useAppSelector(selectIsAuthenticated);
  
    if (!isAuthenticated) return <Navigate to="/" replace />;
  
    return (
        <div className="flex h-screen">
          <div className="w-64 bg-gray-800 p-4">
            <ul>
              <li>
                <button
                  className={`py-2 px-4 ${location.pathname === '/profile' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                  onClick={() => window.location.href = '/profile'}
                >
                  Perfil
                </button>
              </li>
              <li>
                <button
                  className={`py-2 px-4 ${location.pathname === '/publication' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                  onClick={() => window.location.href = '/publication'}
                >
                  Publicaciones
                </button>
              </li>
            </ul>
          </div>
          <div className="flex-1 p-4">
            {children}
          </div>
        </div>
    );
};