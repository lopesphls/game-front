import { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { ApiConteudo } from '../../entities/GamesEntities'
import Games from '../../service/apiGames'

const Produtos = () => {
  const [produto, setProduto] = useState<ApiConteudo[]>([])
  const [photos, setPhotos] = useState<ApiConteudo[]>([])
  const [fav, setFav] = useState(false)

  useEffect(() => {
    Games.getAll().then(response => setProduto(response.data))
    Games.getPhotos().then(response => setPhotos(response.data))
  }, [])

  return (
    <>
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
    </>
  )
}
export default Produtos
