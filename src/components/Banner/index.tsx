import { useEffect, useState } from 'react'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'

const Banner = () => {
  const [image, setImage] = useState('')
  useEffect(() => {
    const img = [img1, img2, img3, img4, img5]
    while (img.length <= 4) {
      setTimeout(() => {
        let i = 0
        setImage(img[i])
        i++
      }, 500)
    }
  }, [])
  console.log(image)
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='h-screen w-full '>
        {
          <img
            src={image}
            className='bg-contain w-full h-full rounded-br-[30%] '
            alt='imagem'
          />
        }
      </div>
    </div>
  )
}
export default Banner
