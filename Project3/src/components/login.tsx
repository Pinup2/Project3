import { useForm } from "../hooks/useForm";
import { initialState } from "../states/loginState";
import SubmitButton from "./SubmitButton";
import InputField from "./InputField";
function Login() {
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );
    
    console.log(values);
    async function loginUserCallback() {
        // send "values" to database
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
            <InputField 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={onChange} 
            />
            <InputField 
            type="password" 
            name="password" 
            placeholder="Password" 
            onChange={onChange} />
            <SubmitButton/>
            </div>
        </form>
    );
}

export default Login;
