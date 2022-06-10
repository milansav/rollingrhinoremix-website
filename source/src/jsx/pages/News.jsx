import Footer from "../components/Footer"
import NewsPost from "../components/NewsPost"
import { For } from "solid-js"

// import JSON data
import posts from "../../../JSON/News.json"

// css
import "../../css/News/News.css"
import "../../css/general.css"

export default function NewsPage() {
    return (
        <div id="news">
            {/* spacer */}
            <div class="spacer"></div>

            {/* header */}
            <h1 id="news-title" class="gradient">Rolling Rhino News</h1>

            {/* spacer */}
            <div class="spacer"></div>

            {/* div containing all news posts */}
            <div id="news-posts-container">
                {/* iterate through each post that has been fetched from the JSON data */}
                <For each={posts}>
                    {/* lambda function to get indexed post object 
                    and return new instance of NewsPost element,
                    also passing in the post object's info as props */}
                    {(post) => <NewsPost
                        date={post.date}
                        title={post.title}
                        paragraph={post.paragraph}
                        sections={post.sections}
                    ></NewsPost>}
                </For>
            </div>

            {/* put spacer here */}
            <div class="spacer"></div>

            {/* instance the footer */}
            <Footer></Footer>
        </div>
    )
}