import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getPostById } from "../api/posts";

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPostById(id).then(response => {
            setPost(response.data);
            console.log(response.data)
        })
    }, []);

    return (
        <div>
            <NavLink to="/">Volver al inicio</NavLink>
            {post && (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            )}
        </div>
    );
}

export default Post;