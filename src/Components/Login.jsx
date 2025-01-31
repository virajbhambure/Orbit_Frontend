import React from 'react';

const Login = () => {
  return (
    <section className='flex flex-col bg-gray-50 dark:bg-gray-900 min-h-screen items-center justify-center px-6'>
      <div className='max-w-md w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-6 space-y-4 sm:p-8'>
          <h1 className='text-xl text-gray-600 font-bold md:text-2xl dark:text-blue-600'>Login to your account</h1>
          <form className='space-y-4'>
            <div>
              <label htmlFor='email' className='text-gray-600 mb-2 text-sm font-medium block'>Email</label>
              <input
                type='email' id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                placeholder='name@company.com'
                required
              />
            </div>
            <div>
              <label htmlFor='password' className='text-gray-600 mb-2 text-sm font-medium block'>Password</label>
              <input
                type='password' id='password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                placeholder='********'
                required
              />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-start'>
                <input type='checkbox' id='remember' className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-1 focus-primary dark:bg-gray-700 dark:border-gray-600' />
                <label htmlFor='remember' className='text-sm text-gray-500 ml-2 dark:text-gray-300'>Remember me</label>
              </div>
              <a href='#' onClick={() => navigate("/forgot-password")} className='text-sm font-medium text-primary-600 hover:underline dark:text-white hover:text-blue-600'>Forgot password?</a>
            </div>
            <button className='text-primary-600 border-1 rounded-lg border-gray-600 font-medium px-2.5 py-1.5 w-full hover:text-blue-600 hover:border-blue-600 dark:text-white'>Login</button>
            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
              Don’t have an account?{' '}
              <a href='#' className='font-medium text-primary-600 hover:underline hover:text-blue-600 dark:text-primary-500'>Sign up here</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;