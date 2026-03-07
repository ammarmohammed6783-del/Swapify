import './index.css'
import Nav from './components/Nav'
import Feed from './components/Feed'
import Navigation from './components/Navigation'

function App() {
  return (
    <div>
      <Nav />
      <div className='flex'>
        <Navigation />
        <Feed />
      </div>
    </div>
  )
}

export default App
