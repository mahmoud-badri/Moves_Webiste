import React from "react"
import "./LoginPage.css"
import Name from "./../Component/Name"
import EmailLogin from '../Component/EmailLogin';
import PasswordRegister from "../Component/PasswordRegister"
import FootMessageREgester from "../Component/FootMessageREgester";
import MyButton from "../Component/MyButton";
function Register(props) {
    const done = (e) => {

        console.log(e)
        e.preventDefault()
        props.history.push("/TodoList")

    };
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-5 bg-white m-auto rounded-top line">
                    <h2 className="text-center pt-3 ">Register </h2>
                    <p className="text-center text-muted lead">TAGEL STORE</p>
                    {/*Form Start*/}
                    <form onSubmit={(e) => done(e)}>
                        <Name name_holder="First Name" />
                        <Name name_holder="Last Name" />
                        <Name name_holder="User Name" />
                        <EmailLogin />

                        <PasswordRegister />

                        <MyButton btn_name="Sign Up" sub={done} />

                        <FootMessageREgester links="LoginPage.js" n_links="Login Here" />
                    </form>
                    {/*Form end*/}
                </div>
            </div>
        </div>

    )
}
export default Register