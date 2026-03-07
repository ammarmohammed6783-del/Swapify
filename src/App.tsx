import './index.css'
import Nav from './components/Nav'
import Feed from './components/Feed'
import Navigation from './components/Navigation'

function App() {
  return (
    <div>
      <Nav />
      <div className='flex mt-15'>
        <Navigation />
        <Feed />
      </div>
    </div>
  )
}

export default App
