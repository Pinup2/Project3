import { useState } from "react";
export const useForm = (callback: any, initialState = {}) => {
    console.log("useForm hook invoked");
    const [values, setValues] = useState(initialState);
    console.log(values)
    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    // onSubmit
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback();
    };

    // return values
    return {
        onChange,
        onSubmit,
        values,
        
    };
}
export default useForm