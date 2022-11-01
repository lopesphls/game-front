import { useState } from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  const [cpf, setCpf] = useState('')
  console.log(cpf)
  return (
    <div className='grid grid-flow-row grid-cols-2 items-center justify-center w-full h-screen px-5 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
      <div className='flex flex-col items-center'>
        <form
          method='post'
          action='#'
          target='_self'
          className='flex flex-col items-start px-5 py-2 w-80 h-auto'
        >
          <h1 className='text-orange-500 font-bold text-2xl mb-4'>Login</h1>
          <label className='text-orange-500 font-medium'>Email</label>
          <input
            type='email'
            name='email'
            autoComplete='off'
            className='border rounded-lg border-white text-center w-full my-1'
            required
          />
          <label className='text-orange-500 font-medium'>Password</label>
          <input
            type='password'
            name='password'
            autoComplete='off'
            className='border rounded-lg border-white text-center w-full my-1'
            minLength={6}
            required
          />

          <input
            type='submit'
            value='Logar'
            className='w-2/4 self-center bg-orange-500 rounded-3xl my-6 py-1
          text-white font-semibold'
          />
          <span className='border-b border-white w-full'></span>
        </form>
        <Link to='/signup'>
          <button className='self-center bg-orange-500 text-white mt-3 font-semibold w-auto px-5 py-1 rounded-3xl'>
            Sign up
          </button>
        </Link>
      </div>
    </div>
  )
}
export default SignUp
