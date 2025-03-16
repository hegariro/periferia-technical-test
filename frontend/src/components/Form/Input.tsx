import { ChangeEvent } from 'react';

interface InputProps {
    type: string;
    name: string;
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const Input = ({ type, name, label, value, onChange, required = false }: InputProps) => (
    <div className="mb-10">
        <label htmlFor={name} className="block mb-2 text-sm font-bold text-white">
            {label}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="bg-white-400 border border-white-400 text-white text-2lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
    </div>
);
