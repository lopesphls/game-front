import { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import ApiGames from '../../service/apiGames'

const apiGames = new ApiGames()

interface ApiConteudo {
  albumId?: number
  userId?: number
  id?: number
  title?: string
  body?: string
  url?: string
  thumbnailUrl?: string
}

const Games = () => {
  const [produto, setProduto] = useState<ApiConteudo[]>([])
  const [photos, setPhotos] = useState<ApiConteudo[]>([])
  const [fav, setFav] = useState(false)

  useEffect(() => {
    apiGames.getAll().then(response => setProduto(response.data))
    apiGames.getPhotos().then(response => setPhotos(response.data))
  }, [])

  // bg-gradient-to-br from-indigo-500  to-black
  return (
    <div className='flex flex-col items-center w-full min-h-screen h-auto bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
      <div className='grid grid-cols-4 gap-4 justify-center items-center pt-24 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
        {produto.map((el, index) => (
          <div
            key={el.id}
            className='flex flex-col w-80 h-96 bg-indigo-500  text-white rounded-2xl all duration-500 hover:scale-[1.1]'
          >
            {photos[index]?.url && (
              <img
                src={photos[index].url}
                alt={el.title}
                className='bg-contain rounded-t-2xl h-52 w-full'
              />
            )}
            <button
              className='self-end border bg-white -mt-5 mr-2 text-3xl p-2 rounded-full'
              onClick={() => setFav(!fav)}
            >
              {fav ? (
                <AiFillStar className='animate__animated animate__bounceIn  text-orange-600' />
              ) : (
                <AiOutlineStar className='animate__animated animate__bounceIn  text-orange-500' />
              )}
            </button>

            <h2 className='px-6 font-bold cap'>{el.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Games
