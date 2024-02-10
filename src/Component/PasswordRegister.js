import React, { useState } from "react";
import "./FormLogin.css";

function PasswordRegister() {
    const [info, setInfo] = useState(() => ({
        password: "",
        confirmPassword: "",
    }));

    const [errors, setErrors] = useState(() => ({
        passwordError: "",
        confirmPasswordError: "",
    }));

    const [showPassword, setShowPassword] = useState(false);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const changeData = (e) => {
        if (e.target.name === "password") {
            setInfo({ ...info, password: e.target.value });
            setErrors({
                ...errors,
                passwordError:
                    !passwordRegex.test(e.target.value)
                        ? "Password must contain at least one lowercase, one uppercase, one digit, and one special character (@$!%*?&)"
                        : e.target.value.length < 8
                            ? "This Password must be more than 8 characters"
                            : "",
            });
        } else if (e.target.name === "confirmPassword") {
            setInfo({ ...info, confirmPassword: e.target.value });
            setErrors({
                ...errors,
                confirmPasswordError:
                    e.target.value !== info.password
                        ? "Passwords do not match"
                        : "",
            });
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (errors.passwordError || errors.confirmPasswordError) {
            return;
        }
        if (info.password !== info.confirmPassword) {
            setErrors({ ...errors, confirmPasswordError: "Passwords do not match" });
            return;
        }
    };

    return (
        <div onSubmit={handleSubmit}>
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
            <div className="input-group mb-3">
                <span className="input-group-text">
                    <i className="fa fa-lock" />
                </span>
                <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${errors.confirmPasswordError ? "border-danger" : "border-success"}`}
                    placeholder="Confirm Password"
                    value={info.confirmPassword}
                    name="confirmPassword"
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
            <p className="text-danger invalid-message">{errors.confirmPasswordError}</p>
        </div>
    );
};

export default PasswordRegister;