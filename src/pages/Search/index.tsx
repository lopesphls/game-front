import { useEffect } from 'react'
import Produtos from '../../components/Produtos'

const Search = () => {
  useEffect(() => {}, [])

  return (
    <div className='flex flex-col items-center pt-24 w-full min-h-screen h-auto pb-5 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white'>
      <input
        type='text'
        placeholder='Busca'
        className='border-b border-white bg-transparent w-full pl-5 pb-2 text-3xl'
      />
      <div className='grid grid-cols-4 gap-4 justify-center items-center pt-24 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
        <Produtos />
      </div>
    </div>
  )
}

export default Search
