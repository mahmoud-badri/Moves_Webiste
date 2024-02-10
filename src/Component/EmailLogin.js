import React, { useState } from "react";
import "./FormLogin.css"
const EmailLogin = () => {
    const [info, setInfo] = useState(() => ({ email: ""}));

    const [errors, setErrors] = useState(() => ({ emailError: ""}));

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const changeData = (e) => {
        if (e.target.name === "email") {
            setInfo({ ...info, email: e.target.value });
            setErrors({
                ...errors,
                emailError:
                    e.target.value.length === 0
                        ? "This Field Is Required "
                        : !emailRegex.test(e.target.value)
                            ? "Invalid email format"
                            : "",
            });
        } 
    };

    return (
        <div >
            <div className="input-group mb-3">
                <span className="input-group-text">
                    <i className="fa fa-envelope" />
                </span>
                <input
                    className={`form-control ${errors.emailError ? "border-danger" : "border-success"}`}
                    placeholder="Email"
                    required
                    value={info.email}
                    name="email"
                    onChange={(e) => changeData(e)}
                />
            </div>
            <p className="text-danger invalid-message">{errors.emailError}</p>
        </div>
    );
};

export default EmailLogin;