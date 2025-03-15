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
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
        />
    </div>
);
