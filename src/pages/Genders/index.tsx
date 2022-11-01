import { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useTransition } from 'react-spring'
import ApiGames from '../../service/apiGames'

const apiGames = new ApiGames()

interface ApiConteudo {
  albumId: number
  userId: number
  id: number
  title: string
  body: string
  url: string
  thumbnailUrl: string
}

const Genders = () => {
  const [produto, setProduto] = useState<ApiConteudo[]>([])
  const [teste, setTeste] = useState<boolean>(false)

  useEffect(() => {
    apiGames.getAll().then(response => setProduto(response.data))
    apiGames.getPhotos().then(response => setProduto(response.data))
  }, [])

  const transition = useTransition(produto, {
    from: { scale: 1 },
    enter: { scale: 1.5 },
    leave: { scale: 1 },
  })
  // bg-gradient-to-br from-indigo-500  to-black
  return (
    <div className='flex flex-col items-center w-full min-h-screen h-auto bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
      <div className='static flex flex-row w-full h-screen'>
        <aside className='flex bg-white items-center justify-center h-screen w-80'>
          <h1 className='font-bold text-9xl text-orange-500 drop-shadow-[-36px_41px_0_#8e3901] -rotate-90'>
            {`Gêneros`}
          </h1>
        </aside>
        <div className='w-full h-full bg-orange-500 rounded-br-[30%]'>
          <img src='' alt='' />
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 justify-center items-center pt-14 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
        {produto.map(el => (
          <div
            key={el.id}
            className='flex flex-col w-80 h-96 bg-purple-500  text-white rounded-2xl'
            id={el.url}
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
        ))}
      </div>
    </div>
  )
}
export default Genders
