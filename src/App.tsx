import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Items from './pages/Items'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='explore' element={<Explore />} />
        <Route path='items' element={<Items />} />
        <Route path='messages' element={<Messages />} />
        <Route path='profile' element={<Profile />} />
      </Route>
      <Route path='/signIn' element={<SignIn />} />
    </Routes>
  )
}

export default App
