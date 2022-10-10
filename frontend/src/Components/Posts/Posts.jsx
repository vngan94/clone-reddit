import { useSelector } from "react-redux";

const Posts = () => {
    const posts = useSelector(state => state.post.posts)
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"]
    { console.log(posts, "in") }

    return (
        <section className="post-container">
            {posts.slice(1).map(item => {
                return (
                    <div className="posts">
                        <div className="posts-title">{item.title}</div>
                        <div className={`posts-tags-${tags[item.tag]} posts-tags`}>{tags[item.tag]}</div>
                        <div className="posts-description">{item.description}</div>

                    </div>
                )
            })}
        </section >
    );
}
export default Posts;