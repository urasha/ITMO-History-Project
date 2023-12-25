import LoginInput from "./LoginInput";

export default function EmailInput({ email, setEmail, setIsCorrectEmail }) {
    function validate(email) {
        const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        setIsCorrectEmail(reg.test(email));
    }

    return (
        <LoginInput
            placeholder="Email (логин)"
            value={email}
            setValue={setEmail}
            validate={validate}
        />
    );
}
