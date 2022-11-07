import Produtos from '../../components/Produtos'

interface ApiConteudo {
  albumId?: number
  userId?: number
  id?: number
  title?: string
  body?: string
  url?: string
  thumbnailUrl?: string
}

const Genders = () => {
  return (
    <div className='flex flex-col items-center w-full min-h-screen h-auto bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
      <div className='static flex flex-row w-full h-screen'>
        <aside className='flex bg-white items-center justify-center h-screen w-80'>
          <h1 className='font-bold text-9xl text-orange-500 drop-shadow-[-36px_41px_0_#8e3901] -rotate-90'>
            {`Gêneros`}
          </h1>
        </aside>
        <div className='w-full h-full bg-orange-500 rounded-br-[30%]'></div>
      </div>
      <div className='grid grid-cols-4 gap-4 justify-center items-center pt-14 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
        <Produtos />
      </div>
    </div>
  )
}
export default Genders
