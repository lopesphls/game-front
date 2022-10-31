import { useEffect } from 'react'

const Banner = () => {
  useEffect(() => {}, [])

  return (
    <div className='flex flex-col items-center pt-24 w-full h-screen bg-black text-white'>
      <input
        type='text'
        placeholder='Busca'
        className='border-b border-white bg-transparent w-full pl-5 pb-2 text-3xl'
      />
    </div>
  )
}
export default Banner
