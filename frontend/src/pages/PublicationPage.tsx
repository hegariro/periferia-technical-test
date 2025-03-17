import { useAppSelector } from '../app/hooks';
import { selectName } from '../features/auth/authSelectors';

export const PublicationPage = () => {
    const name = useAppSelector(selectName);
    return (
        <div>
            <h2 className="flex flex-col text-left">
                {name} 
                <small className="text-gray-400 text-md mt-1">Publicaciones de usuario</small>
            </h2>
        </div>
    );
};