import RouterIndex from './routes'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Controls from './components/Controls'
import './App.css'

function App() {

  function addToPlaylist(name) {
    const playlist = JSON.parse(localStorage.getItem("playlist")) || []
    playlist.push(name)
    localStorage.setItem("playlist", JSON.stringify(playlist))
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <Sidebar />
        <Content >
          <RouterIndex addToPlaylist={addToPlaylist}/>
        </Content>
      </div>
      <Controls />
    </>
  )
}

export default App
