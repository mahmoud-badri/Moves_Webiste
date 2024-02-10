import React, { useState } from "react";
import "./FormLogin.css";

const PasswordLogin = () => {
    const [info, setInfo] = useState(() => ({ password: "" }));

    const [errors, setErrors] = useState(() => ({ passwordError: "" }));

    const [showPassword, setShowPassword] = useState(false);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const changeData = (e) => {
        if (e.target.name === "password") {
            setInfo({ ...info, password: e.target.value });
            setErrors({
                ...errors,
                passwordError:
                    !passwordRegex.test(e.target.value)
                        ? "Password must contain at least one lowercase, one uppercase, one digit, and one special character (@$!%\*?&)"
                        : e.target.value.length < 8
                            ? "This Password must be more than 8 characters"
                            : "",
            });
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="input-group mb-3">
                <span className="input-group-text">
                    <i className="fa fa-lock" />
                </span>
                <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${errors.passwordError ? "border-danger" : "border-success"}`}
                    placeholder="Password"
                    value={info.password}
                    name="password"
                    onChange={(e) => changeData(e)}
                />
                <button
                    type="button"
                    className="btn btn-link"
                    onClick={toggleShowPassword}
                >
                    <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
                </button>
            </div>
            <p className="text-danger invalid-message">{errors.passwordError}</p>
        </div>
    );
};

export default PasswordLogin;