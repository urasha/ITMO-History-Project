import LoginInput from "./LoginInput";

export default function PasswordInput({ password, setPassword, setIsCorrectPassword }) {
    function validate(password) {
        const reg = /^.{6,}$/;
        setIsCorrectPassword(reg.test(password));
    }

    return (
        <LoginInput
            placeholder="Пароль"
            isSecured={true}
            value={password}
            setValue={setPassword}
			validate={validate}
        />
    );
}
