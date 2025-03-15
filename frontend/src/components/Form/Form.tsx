import { ReactNode, FormEvent } from 'react'

interface FormProps {
    title: string;
    onSubmit: (e: FormEvent) => void;
    children?: ReactNode;
    buttonText: string;
}

export const Form = ({ title, onSubmit, children, buttonText }: FormProps) => (
    <form onSubmit={onSubmit} className="auth-form">
        <h2>{title}</h2>
        {children}
        <button type="submit">{buttonText}</button>
    </form>
);
