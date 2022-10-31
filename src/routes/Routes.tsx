import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Genders from '../pages/Genders'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/genders' element={<Genders />} />
        <Route path='/banner' element={<Banner />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
