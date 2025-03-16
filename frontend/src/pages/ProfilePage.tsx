import { useAppSelector } from '../app/hooks';
import { selectName } from '../features/auth/authSelectors';

export const ProfilePage = () => {
    const name = useAppSelector(selectName);
    return (
        <div>
            <h2>
                {name} 
                <small>Perfil de usuario</small>
            </h2>
        </div>
    );
};