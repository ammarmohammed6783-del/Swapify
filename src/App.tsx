import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Items from './pages/Items'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import LogIn from './pages/LogIn'
import Layout from './components/Layout'
import AddItem from './pages/AddItem'
import HowItWork from './pages/HowItWork'
import Settings from './pages/Settings'
import Favourites from './pages/Favourites'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='explore' element={<Explore />} />
        <Route path='favourites' element={<Favourites />} />
        <Route path='items' element={<Items />} />
        <Route path='messages' element={<Messages />} />
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />
        <Route path='addItem' element={<AddItem />} />
      </Route>
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/description' element={<HowItWork />} />
    </Routes>
  )
}

export default App
