import React from "react";

interface InputProps {
    type: "email" | "password" | "text";
    name: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField: React.FC<InputProps> = ({ type, name, placeholder, onChange }) => {
    if (type === "email") {
    } else if (type === "password") {
    }

    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            required
        />
    );
};

export default InputField;
