import React from 'react';
import { InputField } from '@/app/auth/InputField';

export default function AuthPage() {
  return (
    <div
      style={{ backgroundImage: 'url(/background.jpg)' }}
      className='bg-cover bg-center bg-no-repeat text-white opacity-80'
    >
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        <form
          className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'
          action=''
        >
          <div className='flex flex-col items-center space-y-4'>
            <h1 className='text-3xl font-bold'>Login</h1>
            <p className='text-sm text-gray-500'>
              New to the app?{' '}
              <a href='#' className='text-red-500 hover:underline'>
                Register
              </a>
            </p>
          </div>
          <div className='mt-8 flex flex-col space-y-4'>
            <InputField
              id='email'
              type='email'
              label='Email'
              placeholder='Enter your email'
            />

            <InputField
              id='password'
              type='password'
              label='Password'
              placeholder='Enter your password'
            />
          </div>
          <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
            <button
              className='flex w-full items-center  justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-8'
              type='submit'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
