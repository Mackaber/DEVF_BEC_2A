function Post({ post, handleClick }) {
    const { id, title } = post

    return (
        <a onClick={() => { handleClick(id)}}>
            <h4 className="post" key={id}>{title}</h4>
        </a>
    )

}

export default Post