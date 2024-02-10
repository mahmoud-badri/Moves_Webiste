
import React from "react";
import "./LoginPage.css"
import MyButton from "../Component/MyButton"
import TitleMessage from "../Component/TitleMessage"
import FooterMessage from "../Component/FooterMessageLog"
import PasswordLogin from "../Component/PasswordLogin"
import EmailLogin from '../Component/EmailLogin';
function LoginPage(props) {


    const done = (e) => {

        console.log(e)
        e.preventDefault()
        props.history.push("/Moves")

    };
    return (

        <div className="row mt-5">

            <div className="col-lg-5 bg-white m-auto rounded line">
            <form onSubmit={(e) => done(e)}>
                <TitleMessage t_name="Login Now" />
                {/*Form Start*/}
                <EmailLogin />
                <PasswordLogin />
                <MyButton btn_name="Log In" sub={done} />
                <FooterMessage title="Register" link="#" n_line="Register Here" />
                </form>
            </div>
        </div>


    )
}

export default LoginPage;