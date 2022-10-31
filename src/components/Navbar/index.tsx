import { MdHome, MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='fixed flex flex-row items-center justify-between bg-black bg-opacity-20 text-white z-50 w-full h-16'>
      <h1 className='flex items-center w-4/12 h-full font-semibold text-3xl pl-5'>
        <Link to='/'>GameFlix</Link>
      </h1>
      <div className='flex h-full w-4/12'>
        <Link
          to='/'
          className='flex items-center justify-center w-6/12 h-full text-4xl hover:border-b-4 active:border-b-4'
        >
          <button>{<MdHome />}</button>
        </Link>
        <Link
          to='/genders'
          className='flex items-center justify-center w-6/12 h-full font-bold  active:border-b-4 hover:border-b-4'
        >
          <button>Lista de jogos</button>
        </Link>
        <Link
          to='/banner'
          className='flex items-center justify-center w-6/12 h-full text-4xl hover:border-b-4 active:border-b-4'
        >
          <button>{<MdSearch />}</button>
        </Link>
      </div>
      <div className='flex justify-end items-center w-4/12 pr-5 h-full'>
        <button className='font-bold mr-3 text-xs'>
          <Link to='/'>Sign In</Link>
        </button>
        <button className='font-bold mr-3 text-lg bg-[#8e3901] h-10 w-24 rounded-full'>
          <Link to='/signup'>Sign Up</Link>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
