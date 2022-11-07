import Produtos from '../../components/Produtos'

const Games = () => {
  return (
    <div className='flex flex-col items-center w-full min-h-screen h-auto bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
      <div className='grid grid-cols-4 gap-4 justify-center items-center pt-24 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
        <Produtos />
      </div>
    </div>
  )
}
export default Games
