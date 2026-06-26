import { useEffect, useState } from 'react'
import { fetchPosts } from './api/posts'
import Container from './components/Container'
import PostDetail from './components/PostDetail'
import Post from './components/Post'
import './App.css'
import { NavLink } from 'react-router-dom'

function App() {
  const [posts, setPosts] = useState([])
  const [selectedPostId, setSelectedPostId] = useState(null)

  useEffect(() => {
    fetchPosts().then(data => setPosts(data))
  }, [])

  function handleClick(id) {
    console.log(id)
    setSelectedPostId(id)
  }

  return (
    <div className='main'>
      <Container>
        {posts.map((post) => 
          <>
            <Post { ...{post, handleClick} } /> <NavLink to={`/posts/${post.id}`}>Detail</NavLink>
            {selectedPostId === post.id ? <PostDetail { ...{post}} /> : undefined }
          </>
        )}
      </Container>
    </div>
  )
}

export default App
