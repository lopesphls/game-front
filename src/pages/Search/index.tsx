import { useEffect } from 'react'

const Search = () => {
  useEffect(() => {}, [])

  return (
    <div className='flex flex-col items-center pt-24 w-full h-screen  dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white'>
      <input
        type='text'
        placeholder='Busca'
        className='border-b border-white bg-transparent w-full pl-5 pb-2 text-3xl'
      />
    </div>
  )
}

export default Search
