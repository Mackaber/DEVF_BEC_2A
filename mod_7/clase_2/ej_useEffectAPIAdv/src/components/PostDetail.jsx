function PostDetail({post}) {
    const { body } = post

    return (
        <div className="detail">
            <p>{body}</p>
        </div>
    )
}

export default PostDetail