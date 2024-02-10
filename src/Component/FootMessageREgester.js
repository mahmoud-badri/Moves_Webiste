

import React from "react"



function FootMessageREgester(props) {

    return (
        <>
            <p className="text-center text-muted mt-2">
            When you register by clicking the SignUp button, you agree to our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
            </p>
            <p className="text-center">
                Already have an account? <a href={props.links}>{props.n_links}</a>
            </p>

        </>

    )
}
export default FootMessageREgester

