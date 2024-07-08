

const fetchPosts = async () => {
    const res = await fetch("http://localhost:3000/api/posts")

    const response = await res.json()
    return response
}

const Posts = async () => {

    const posts = await fetchPosts()
    console.log("posts", posts);
    return (
        <div>
        <h1>Posts</h1>
        <hr />

            {
                posts.map((post) => {
                    return (
                        <>
                            <h1>{post.id}</h1>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <hr />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Posts
