const SignUp = () => {
  return (
    <div className='grid grid-flow-row grid-cols-2 items-center justify-center w-full h-screen px-5 bg-white'>
      <form
        action='post'
        className='flex flex-col items-start px-5 py-2 w-60 h-auto'
      >
        <h1 className='text-orange-500 font-bold text-2xl'>Cadastre-se</h1>
        <label className='text-orange-500 font-medium'>Name</label>
        <input
          type='text'
          name='name'
          autoComplete='off'
          className='border rounded-lg border-black text-center'
        />
        <label className='text-orange-500 font-medium'>Email</label>
        <input
          type='text'
          name='email'
          autoComplete='off'
          className='border rounded-lg border-black text-center'
        />
        <label className='text-orange-500 font-medium'>CPF</label>
        <input
          type='text'
          name='CPF'
          autoComplete='off'
          className='border rounded-lg border-black text-center'
        />
        <label className='text-orange-500 font-medium'>Password</label>
        <input
          type='password'
          name='password'
          autoComplete='off'
          className='border rounded-lg border-black text-center'
        />
        <button
          type='submit'
          className='w-full bg-orange-500 rounded-lg my-6 py-1 text-white font-semibold'
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
export default SignUp
