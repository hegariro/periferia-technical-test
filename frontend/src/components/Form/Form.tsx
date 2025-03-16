import { ReactNode, FormEvent } from 'react'

interface FormProps {
    title: string;
    onSubmit: (e: FormEvent) => void;
    children?: ReactNode;
    buttonText: string;
}

export const Form = ({ title, onSubmit, children, buttonText }: FormProps) => (
    <form onSubmit={onSubmit} className="bg-black rounded-lg shadow-md p-8 max-w-md mx-auto mt-10">
        <h2>{title}</h2>
        {children}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {buttonText}
        </button>
    </form>
);
