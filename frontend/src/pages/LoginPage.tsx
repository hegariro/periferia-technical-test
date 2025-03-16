import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form/Form';
import { Input } from '../components/Form/Input';
import { setEmail, setPassword, resetForm } from '../features/login/loginSlice';
import { selectEmail, selectPassword } from '../features/login/loginSelectors';
import { setUserId, setName, setEmail as setEmailAuth, setToken } from '../features/auth/authSlice';
import { loginUser } from '../app/api/authBackend';

export const LoginPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const email = useAppSelector(selectEmail);
    const password = useAppSelector(selectPassword);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await loginUser({ email, password });
        const { error } = response;

        if (error) dispatch(resetForm());

        const { id, name, token } = response;
        if (token && name && id) {
            dispatch(setUserId(id));
            dispatch(setName(name));
            dispatch(setEmailAuth(email));
            dispatch(setToken(token));
        }
        dispatch(resetForm());
        navigate('/profile', { replace: true });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        switch(name) {
            case 'email':
                dispatch(setEmail(value));
                break;
            case 'password':
                dispatch(setPassword(value));
                break;
            default:
                break;
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-black rounded-lg shadow-md p-8">
                <Form 
                    title='Inicio de sesión'
                    onSubmit={handleSubmit}
                    buttonText='Iniciar sesión'
                >
                    <Input 
                        type="email"
                        name="email"
                        label="Correo electrónico"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Contraseña"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </Form>
            </div>
        </div>
    );
};