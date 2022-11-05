import { useEffect, useState } from 'react'
import ApiGames from '../../service/apiGames'

const apiGames = new ApiGames()

interface ApiConteudo {
  albumId: number
  userId: number
  Id: number
  title: string
  body: string
  url: string
  thumbnailUrl: string
}
const Home = () => {
  const [produto, setProduto] = useState<ApiConteudo[]>([])
  const [teste, setTeste] = useState<boolean>(false)

  useEffect(() => {
    apiGames.getAll().then(response => setProduto(response.data))
    apiGames.getPhotos().then(response => setProduto(response.data))
  }, [])

  return (
    <div className='flex flex-col items-center w-full min-h-screen h-auto bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
      <div className='grid grid-cols-4 gap-4 justify-center items-center pt-24  mb-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
        {/* {produto.map(el => (
          <div
            key={el.Id}
            className='flex flex-col w-80 h-96 bg-purple-500  text-white rounded-2xl'
          >
            <img
              src={el.url}
              alt={el.title}
              className='bg-contain rounded-t-2xl h-52 w-full'
            />
            <button
              className='self-end border bg-white -mt-5 mr-2 text-3xl p-2 rounded-full'
              onClick={() => setTeste(!teste)}
            >
              {teste ? (
                <AiFillStar className='text-orange-600' />
              ) : (
                <AiOutlineStar className='text-orange-600' />
              )}
            </button>

            <h2 className='px-6 font-bold cap'>{el.title}</h2>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Home
