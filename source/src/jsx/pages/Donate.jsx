import Footer from "../components/Footer"

// metadata
import { Title } from "@solidjs/meta"

// css
import "../../css/Donate/Donate.css"
import "../../css/general.css"
import Page from "../components/Page";

// title string
const pageTitle = "Donate";

export default function DonatePage() {
    return (
        <Page title={pageTitle} showLogo={true}>
            {/* paragraph */}
            <p id="donate-paragraph">
                Thank you for choosing to donate to the Rolling Rhino Remix project. Your support means a lot to everyone working on the development team. <br></br>
                By choosing to the donate to the project you are allowing us to continually improve the project and the infrastructure that holds it together. <br></br>
                <br></br>
                You can read how all donations are handled by the project
                <a class="paragraph-link" href="https://docs.google.com/document/d/1zPkauRfWKxWTuOD5jY9Fo7q39PgPK0tEOD_D9zNXdoQ/edit" target="_blank">here.</a>
            </p>

            {/* separating spacer */}
            <div class="spacer"></div>

            {/* donate arguments */}
            <div id="donate-arguments" class="card">
                {/* title */}
                <h2 class="gradient">Your donations will go to...</h2>

                {/* container for text */}
                <div>
                    {/* list of arguments */}
                    <p>• Infrastructure updates & maintenance</p>

                    <br></br>

                    <p>• Design choices</p>

                    <br></br>

                    <p>• Supporting contributors & developers</p>
                </div>
            </div>

            {/* spacer */}
            <div class="mini-spacer"></div>

            {/* anchor button that redirects to payment page
            - wrap in a <p> element to fix a positioning issue where
                the button is a bit more to the right than the left and not
                properly centered, might be a margin or padding issue,
                figure out in future */}
            <p id="donate-button">
                <a href="https://liberapay.com/Rolling-Rhino-Remix/" target="_blank">Donate via Liberapay</a>
            </p>
        </Page>
    );

}