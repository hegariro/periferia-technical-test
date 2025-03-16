import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form/Form';
import { Input } from '../components/Form/Input';
import { setName, setEmail, setPassword, setConfirmPassword, resetForm } from '../features/register/registerSlice';
import { selectName, selectEmail, selectPassword, selectConfirmPassword } from '../features/register/registerSelectors';
import { registerUser } from '../app/api/authBackend';

export const SignUpPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const name = useAppSelector(selectName);
    const email = useAppSelector(selectEmail);
    const password = useAppSelector(selectPassword);
    const confirmPassword = useAppSelector(selectConfirmPassword);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            dispatch(resetForm());
            alert('Las contraseñas no coinciden');
            return;
        }
        
        const response = await registerUser({ name, email, password });
        const { error } = response;
        
        if (error) alert(error);
        console.log(response);
        dispatch(resetForm());

        navigate('/', { replace: true });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        switch(name) {
            case 'name':
                dispatch(setName(value));
                break;
            case 'email':
                dispatch(setEmail(value));
                break;
            case 'password':
                dispatch(setPassword(value));
                break;
            case 'confirmPassword':
                dispatch(setConfirmPassword(value));
                break;
            default:
                break;
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-black rounded-lg shadow-md p-8">
                <Form 
                    title="Registro de usuario" 
                    onSubmit={handleSubmit} 
                    buttonText="Crear cuenta"
                >
                    <Input
                        type="text"
                        name="name"
                        label="Nombre completo"
                        value={name}
                        onChange={handleChange}
                        required
                    />
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
                    <Input
                        type="password"
                        name="confirmPassword"
                        label="Confirmar contraseña"
                        value={confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </Form>
            </div>
        </div>
    );
};
