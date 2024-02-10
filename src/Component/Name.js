import React, { useState } from "react";

function Name(props) {
    const [info, setInfo] = useState(() => ({ name: "" }));
    const [errors, setErrors] = useState(() => ({ nameError: "" }));

    const changeData = (e) => {
        if (e.target.name === "name") {
            setInfo({ ...info, name: e.target.value });
            setErrors({
                ...errors,
                nameError:
                    e.target.value.length === 0
                        ? "This Field Is Required "
                        : e.target.value.includes(" ")
                            ? "No spaces allowed"
                            : "",
            });
        }
    };

    return (
        <div>
            <div className="input-group mb-3">
                <span className="input-group-text">
                    <i className="fa fa-user" />
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder={props.name_holder}
                    required
                    pattern="\S+"
                    value={info.name}
                    name="name"
                    onChange={(e) => changeData(e)}
                />
            </div>
            <p className="text-danger invalid-message">{errors.nameError}</p>
        </div>
    );
}

export default Name;