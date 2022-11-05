const Profile = () => {
  return (
    <div className='flex flex-row justify-around items-center pt-24 w-full h-screen  dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white overflow-hidden'>
      <div className='flex flex-col items-center h-auto mx-2 duration-300 hover:scale-[1.2]'>
        <div className='w-full p-4 rounded-3xl h-56 bg-white'>
          <img
            className=''
            src='https://cdn-icons-png.flaticon.com/512/3408/3408545.png'
            alt=''
          />
        </div>
        <h1 className='font-bold text-2xl'>Barbaro 1</h1>
      </div>
      <div className='flex flex-col items-center mx-2 h-auto duration-300 hover:scale-[1.2]'>
        <div className='w-full p-4 rounded-3xl h-56 bg-white'>
          <img
            className=''
            src='https://cdn-icons-png.flaticon.com/512/3408/3408545.png'
            alt=''
          />
        </div>
        <h1 className='font-bold text-2xl'>Barbaro 2</h1>
      </div>
      <div className='flex flex-col items-center mx-2 h-auto duration-300 hover:scale-[1.2] '>
        <div className='w-full p-4 rounded-3xl h-56 bg-white'>
          <img
            className=''
            src='https://cdn-icons-png.flaticon.com/512/3408/3408545.png'
            alt=''
          />
        </div>
        <h1 className='font-bold text-2xl'>Barbaro 3</h1>
      </div>
      <div className='flex flex-col items-center mx-2 h-auto duration-300 hover:scale-[1.2] '>
        <div className='w-full p-4 rounded-3xl h-56 bg-white'>
          <img
            className=''
            src='https://cdn-icons-png.flaticon.com/512/3408/3408545.png'
            alt=''
          />
        </div>
        <h1 className='font-bold text-2xl'>Barbaro 4</h1>
      </div>
    </div>
  )
}
export default Profile
