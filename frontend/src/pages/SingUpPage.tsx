import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Form } from '../components/Form/Form';
import { Input } from '../components/Form/Input';
import { setName, setEmail, setPassword, setConfirmPassword } from '../features/auth/authSlice';
import { selectName, selectEmail, selectPassword, selectConfirmPassword } from '../features/auth/authSelectors';

export const SignUpPage = () => {
    const dispatch = useAppDispatch();
    
    const name = useAppSelector(selectName);
    const email = useAppSelector(selectEmail);
    const password = useAppSelector(selectPassword);
    const confirmPassword = useAppSelector(selectConfirmPassword);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica de registro usando los valores del estado Redux
        console.log({ name, email, password, confirmPassword });
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
