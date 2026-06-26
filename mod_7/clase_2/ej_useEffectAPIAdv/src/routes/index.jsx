import { Routes, Route } from 'react-router-dom'
import PostDetailPage from '../pages/PostDetailPage.jsx'
import App from '../App.jsx'

function RouterIndex() {
    return(
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/posts/:id" element={<PostDetailPage />} />
        </Routes>
    )

}

export default RouterIndex