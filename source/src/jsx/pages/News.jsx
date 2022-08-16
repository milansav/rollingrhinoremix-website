import Footer from "../components/Footer"
import NewsPost from "../components/NewsPost"
import NewsPostSharePopup from "../components/NewsPostSharePopup"
import { For } from "solid-js"

// metadata
import { Title } from "@solidjs/meta"

// import JSON data
import posts from "../../../JSON/News.json"

// css
import "../../css/News/News.css"
import "../../css/general.css"
import Page from "../components/Page";

// title string
const pageTitle = "News";

export default function NewsPage() {
    const togglePopup = (visible) => {
        if(visible) {
            // set animation
            document.getElementById("news-post-share-popup").style.animation = "news-post-share-popup-intro 0.3s";

            // set opacity
            document.getElementById("news-post-share-popup").style.opacity = 1;

            // set timeout to call this same function but pass false as param
            setTimeout(() => {
                togglePopup(false);
            }, 1000);
        } 
        else {
            // set animation
            document.getElementById("news-post-share-popup").style.animation = "news-post-share-popup-outro 0.3s";

            // set opacity
            document.getElementById("news-post-share-popup").style.opacity = 0;
        }
    }

    return (
        <Page title={pageTitle} showLogo={true}>
            {/* div containing all news posts */}
            <div id="news-posts-container">
                {/* iterate through each post that has been fetched from the JSON data */}
                <For each={posts}>
                    {/* lambda function to get indexed post object
                    and return new instance of NewsPost element,
                    also passing in the post object's info as props */}
                    {(post) => <NewsPost
                        propID={post.id}
                        date={post.date}
                        title={post.title}
                        paragraph={post.paragraph}
                        sections={post.sections}
                        setShowingPopup={togglePopup}
                    ></NewsPost>}
                </For>
            </div>
            <NewsPostSharePopup></NewsPostSharePopup>
        </Page>
    );
}