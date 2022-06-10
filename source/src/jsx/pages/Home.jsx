// css
import "../../css/Home/Home.css"
import "../../css/general.css"
import Footer from "../components/Footer"

export default function HomePage() {
    return (
        <div id="home-page">
            <h1 class="home-title gradient">Rolling Rhino Remix</h1>

            <img id="home-laptop-image" src="assets/HomePage/laptop.png" alt="laptop"/>

            <h1 class="home-title gradient" style="top: -2em;">Ubuntu just got rolling.</h1>

            {/* section 1 */}
            <div id="home-section1">
                {/* shadow */}
                <div class="shadow-page-break-down" id="home-shadow-pb1"></div>

                {/* create a left-to-right flexbox, make it take on its parent's form (section1) */}
                <div style="
                    width: inherit;
                    height: inherit;

                    display: flex;
                    flex-direction: ltr;
                    flex-wrap: nowrap;
                    justify-content: space-evenly;
                ">
                    {/* div containing text */}
                    <div style="
                        width: 50%;
                    ">
                        {/* header */}
                        <h1 id="home-section1-header" class="gradient">So what is it?</h1>

                        {/* paragraph */}
                        <p id="home-section1-paragraph">
                            Rolling Rhino Remix is an unofficial Ubuntu flavour which converts the Ubuntu operating system into a rolling release Linux distribution by 
                            tracking the devel series. A rolling release distribution is a Linux distribution which receives continuous package updates, 
                            and as such there are no major updates (unlike Ubuntu's current release model where there is clear progression between versions). 
                            A rolling release model offers new and experienced users a new way to utilise their desktop PC, without the hassle of major upgrades.
                        </p>
                    </div>
                    
                    {/* image */}
                    <img id="home-image1" src="assets/place-holder.png"/>
                </div>

            </div>

            {/* section 2 */}
            <div id="home-section2">
                {/* shadow */}
                <div class="shadow-page-break-up" id="home-shadow-pb2"></div>

                {/* header */}
                <h1 id="home-section2-header" class="gradient">Why use Rolling Rhino Remix?</h1>

                {/* paragraph */}
                <p id="home-section2-paragraph">
                    If you prefer the easy-to-use nature of Ubuntu but prefer the style of a rolling release from other distributions such as Arch Linux then 
                    Rolling Rhino Remix might be for you! 
                    <br></br>
                    We work hard to ensure that Rolling Rhino Remix has the best possible user experience.
                    We have created tools and additional repositories to ensure that Ubuntu works smoothly as a Rolling Release distribution.
                </p>

                {/* just a spacer */}
                <div class="spacer"></div>

                {/* flex-box to contain the little grid objects */}
                <div id="home-section2-grid">
                    {/* grid object */}
                    <div class="home-section2-grid-object">
                        {/* image */}
                        <img src="assets/place-holder.png"/>
                        {/* text */}
                        <p>lorem ipsum haha this is text</p>
                    </div>

                    {/* grid object */}
                    <div class="home-section2-grid-object">
                        {/* image */}
                        <img src="assets/place-holder.png"/>
                        {/* text */}
                        <p>lorem ipsum haha this is text</p>
                    </div>

                    {/* grid object */}
                    <div class="home-section2-grid-object" style="margin: 0">
                        {/* image */}
                        <img src="assets/place-holder.png"/>
                        {/* text */}
                        <p>lorem ipsum haha this is text</p>
                    </div>

                    {/* second row */}

                    {/* grid object */}
                    <div class="home-section2-grid-object">
                        {/* image */}
                        <img src="assets/place-holder.png"/>
                        {/* text */}
                        <p>lorem ipsum haha this is text</p>
                    </div>

                    {/* grid object */}
                    <div class="home-section2-grid-object">
                        {/* image */}
                        <img src="assets/place-holder.png"></img>
                        {/* text */}
                        <p>lorem ipsum haha this is text</p>
                    </div>

                    {/* grid object */}
                    <div class="home-section2-grid-object" style="margin: 0">
                        {/* image */}
                        <img src="assets/place-holder.png"/>
                        {/* text */}
                        <p>lorem ipsum haha this is text</p>
                    </div>
                </div>
            </div>

            {/* section 3 */}
            <div id="home-section3">
                {/* shadow */}
                <div class="shadow-page-break-down" id="home-shadow-pb3"></div>

                {/* argument divs, they're called arguments because they're arguments FOR the operating system */}

                {/* argument 1 */}
                <div class="home-section3-argument">
                    {/* header */}
                    <h1 class="gradient">Open Source</h1>
                    {/* paragraph */}
                    <p>
                        This project is open source, meaning your contribution is welcome at any time!
                    </p>
                </div>

                {/* argument 2 */}
                <div class="home-section3-argument">
                    {/* header */}
                    <h1 class="gradient">Unique Tools</h1>
                    {/* paragraph */}
                    <p>
                        We have created our home-grown utility called Rhino. Rhino has two commands, 
                        <span class="code">rhino-update</span> and <span class="code">rhino-config</span>.
                    </p>
                </div>

                {/* argument 3 */}
                <div class="home-section3-argument">
                    {/* header */}
                    <h1 class="gradient">Thorough Documentation</h1>
                    {/* paragraph */}
                    <p>
                        With our bleeding edge software, we also tend to update our documentation rather frequently.
                    </p>
                </div>

                {/* spacer */}
                <div class="spacer"></div>

                {/* shadow */}
                <div class="shadow-page-break-up" id="home-shadow-pb4"></div>
            </div>

            {/* just a spacer */}
            <div class="spacer"></div>

            {/* instanced footer */}
            <Footer></Footer>

        </div>
    )
}