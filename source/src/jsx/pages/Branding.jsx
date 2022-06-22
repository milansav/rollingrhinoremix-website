import Footer from "../components/Footer"

// css
import "../../css/Branding/Branding.css"
import "../../css/general.css"

export default function BrandingPage() {
    return (
        <div id="branding">
            {/* spacer */}
            <div class="spacer"></div>

            {/* title */}
            <h1 id="branding-title" class="gradient">Rolling Rhino Remix - Brand Guidelines</h1>

            {/* mini spacer */}
            <div class="mini-spacer"></div>
        
            {/* second mini title */}
            <h3 id="branding-title2">
                Rolling Rhino Remix is <span class="gradient">YOUR </span>
                Linux operating system
            </h3>

            {/* paragraph */}
            <p id="branding-paragraph">
                Our set of Brand Guidelines exist so that Rolling Rhino Remix is communicated with the same precision we used to create it. <br></br>

                These guidelines and assets provide everything that builds the Rolling Rhino Remix brand. To help ensure the continued success of Rolling Rhino Remix, please use them as instructed. <br></br>

                Our logos, wallpapers and assets are licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0</a>. Rolling Rhino Remix itself is licensed under the GNU General Public License v3.0. <br></br>

                <br></br>

                Color palette can be found <a href="https://design.ubuntu.com/brand/colour-palette/" target="_blank">here.</a>
            </p>

            {/* mini spacer */}
            <div class="mini-spacer"></div>

            {/* sections for logos */}
            <div id="branding-logos-section">
                {/* title */}
                <h3>Our logo</h3>

                {/* paragraph */}
                <p>
                    There are a handful of variants of the Rolling Rhino Remix logo.
                    We feel that it is integral to stick to the colour palette as much as possibile. 
                    The logo has a purple splotch behind the rhino, this is the same shade as the Ubuntu 
                    purple utilised in the gradient effect, separating the pieces.
                </p>

                {/* mini spacer */}
                <div class="mini-spacer"></div>

                {/* container (flexbox) for logo images */}
                <div id="branding-logos-images-container">
                    <img class="branding-logo" src="assets/BrandingPage/Logos/logoLight.png" alt="Logo variation"/>
                    <img class="branding-logo" src="assets/BrandingPage/Logos/logoDark.png" alt="Logo variation"/>
                    <img class="branding-logo" src="assets/BrandingPage/Logos/logoGray.png" alt="Logo variation" style="margin-right: 0;"/>
                </div>

                {/* spacer */}
                <div class="spacer"></div>

                {/* container (flexbox) for logo banners  */}
                <div id="branding-logos-banners-container">
                    <img class="branding-banner-logo" src="assets/BrandingPage/Logos/logoBannerLight.png" alt="Banner logo variation"/>
                    <img class="branding-banner-logo" src="assets/BrandingPage/Logos/logoBannerDark.png" alt="Banner logo variation" style="margin-bottom: 0;"/>
                </div>
            </div>

            {/* spacer */}
            <div class="spacer"></div>

            {/* sections for wallpapers */}
            <div id="branding-wallpapers-section">
                {/* title */}
                <h3>Our wallpapers</h3>

                {/* paragraph */}
                <p>
                    The desktop wallpaper is one of the <b>first things</b> a new user will notice about their operating system. 
                    This is why we have designed two unique wallpapers to match our branding. 
                    The wallpapers will automatically change depending on whether the user is using light or dark mode.
                </p>

                {/* mini spacer */}
                <div class="mini-spacer"></div>

                <div id="branding-wallpapers-container">
                    <img class="branding-wallpaper" src="assets/BrandingPage/Wallpapers/wallpaperLight.png" alt="Wallpaper variation"/>
                    <img class="branding-wallpaper" src="assets/BrandingPage/Wallpapers/wallpaperDark.png" alt="Wallpaper variation" style="margin-bottom: 0;"/>
                </div>
            </div>

            {/* spacer */}
            <div class="spacer"></div>

            {/* instance footer */}
            <Footer></Footer>
        </div>
    )
}