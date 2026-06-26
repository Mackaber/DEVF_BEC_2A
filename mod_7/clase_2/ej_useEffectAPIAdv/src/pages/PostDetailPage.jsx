import { useEffect, useState } from "react"
import { fetchPost } from "../api/posts"
import { useParams } from "react-router-dom"
import PostDetail from "../components/PostDetail"

function PostDetailPage() {
    const { id } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {

        fetchPost(id).then((data) => setPost(data))

    },[]) 

    return(
        <>
            <h1>{post.title}</h1>
            <h3>User Id: {post.id}</h3>
            <PostDetail {...{post}} />
        </>
    )
}

export default PostDetailPage