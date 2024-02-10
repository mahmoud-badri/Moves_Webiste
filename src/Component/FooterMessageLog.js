


function FooterMessage(props) {

    return (
        <p className="text-center mt-3">
            {" "}
            {props.title} Now by Clicking <a href={props.link}>{props.n_line}</a>{" "}
            Button
        </p>


    )
}

export default FooterMessage;