import 'animate.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { AppContext } from '../contexts/Auth'
import Games from '../pages/Games'
import Genders from '../pages/Genders'
import Home from '../pages/Home'
import Profile from '../pages/Profiles'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const Router = () => {
  return (
    <AppContext.Provider value={{}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/games' element={<Games />} />
          <Route path='/games/:genders' element={<Genders />} />
          <Route path='/search' element={<Profile />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default Router
