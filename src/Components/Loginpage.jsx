import React from 'react'

export const Loginpage = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl w-full space-y-8 flex shadow-2xl rounded-xl overflow-hidden'>
        {/* Left side - Login form */}
        <div className='w-1/2 bg-white p-8'>
          <h1 className='text-2xl font-bold mb-2'>Create your account</h1>
          <p className='text-gray-600 mb-6'>Let's get started with your 30 days free trial</p>

          <button className='w-full border border-gray-300 py-2 px-4 rounded-md mb-4 flex items-center justify-center hover:bg-gray-50 transition duration-150'>
            <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' alt='Google' className='w-5 h-5 mr-2' />
            Login with Google
          </button>

          <div className='text-center my-4 text-gray-500'>or</div>

          <form className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
                Name
              </label>
              <input 
                id='name'
                name='name'
                type='text'
                required
                className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Enter your name'
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                Email
              </label>
              <input 
                id='email'
                name='email'
                type='email'
                required
                className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Enter your email'
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>
                Password
              </label>
              <input 
                id='password'
                name='password'
                type='password'
                required
                className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Enter your password'
              />
            </div>
            <div className='flex items-center'>
              <input id='terms' name='terms' type='checkbox' className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded' />
              <label htmlFor='terms' className='ml-2 block text-sm text-gray-900'>
                I agree to all Term, Privacy Policy and Fees
              </label>
            </div>
          </form>
          <div className='mt-6'>
            <button className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Create an account
            </button>
          </div>
          <p className='mt-4 text-sm text-gray-600 text-center'>
            Already have an account? <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>Log in</a>
          </p>
        </div>

        {/* Right side - Image and text */}
        <div className='w-1/2 relative'>
          <img 
            src='https://media.designcafe.com/wp-content/uploads/2021/12/27144355/design-cafe-modular-furniture-benefits.jpg' 
            alt='Furniture' 
            className='absolute inset-0 w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <div className='relative z-10 text-white p-8 flex flex-col h-full justify-center'>
            <h2 className='text-3xl font-bold mb-4'>Discovering the Best Furniture for Your Home</h2>
            <p className='mb-6'>Our practice is Designing Complete Environments exceptional buildings communities and place in special situations</p>
            <div className='flex space-x-4'>
              <span className='flex items-center'>
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                100% Guarantee
              </span>
              <span className='flex items-center'>
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                </svg>
                Free delivery London area
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}