import { useEffect, useState } from 'react'
import { MdHome, MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'
import console from '../../assets/console.svg'

type GendersType = {
  id: string
  name: string
}

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false)
  const [gender, setGenders] = useState<GendersType[]>([])
  const [navbar, setNavbar] = useState<string>('')
  const [jogos, setJogos] = useState<string>('')

  useEffect(() => {
    if (active) {
      setNavbar(
        'fixed top-16 flex flex-row items-center justify-center bg-black bg-opacity-70 text-white z-50 w-full min-h-[4rem] h-auto text-white pl-5 transform duration-[2s] font-bold',
      )

      setJogos(
        'flex flex-row items-center justify-center w-6/12 h-full font-bold duration-100 text-xl active:border-b-4 border-b-4',
      )
    } else {
      setNavbar('hidden')
      setJogos(
        'flex items-center justify-center w-6/12 h-full font-bold  text-xl duration-100 active:border-b-4 hover:border-b-4',
      )
    }
  }, [active])
  return (
    <header>
      <nav className='fixed top-0 flex flex-row items-center justify-between bg-black bg-opacity-20 text-white z-50 w-full h-16'>
        <Link
          to='/'
          className='flex items-center w-4/12 h-full font-semibold text-3xl pl-5'
          onMouseEnter={() => setActive(false)}
        >
          <img src={console} alt='logo' className='w-10 mr-2' />
          <h1>GameFlix</h1>
        </Link>
        <div className='flex h-full w-4/12'>
          <Link
            to='/'
            className='flex items-center justify-center w-6/12 h-full text-4xl duration-100 hover:border-b-4 active:border-b-4'
            onMouseEnter={() => setActive(false)}
          >
            <button>{<MdHome />}</button>
          </Link>

          <button className={jogos} onMouseEnter={() => setActive(true)}>
            Games
          </button>
          <Link
            to='/search'
            className='flex items-center justify-center w-6/12 h-full text-4xl duration-100 hover:border-b-4 active:border-b-4'
            onMouseEnter={() => setActive(false)}
          >
            <button>{<MdSearch />}</button>
          </Link>
        </div>
        <div className='flex justify-end items-center w-4/12 pr-5 h-full'>
          <button className='font-bold mr-3 text-lg bg-orange-400 h-10 w-24 rounded-full duration-300 hover:bg-orange-800'>
            <Link to='/signin'>Sign In</Link>
          </button>
        </div>
      </nav>
      <div className={navbar} onMouseLeave={() => setActive(false)}>
        <Link
          to='/games'
          className='text-white duration-100 hover:border-b-4 text-xl'
        >
          Todos
        </Link>
        {gender.map(genders => (
          <div key={genders.id}>
            <Link to={genders.id}>{genders.name}</Link>
          </div>
        ))}
      </div>
    </header>
  )
}

export default Navbar
