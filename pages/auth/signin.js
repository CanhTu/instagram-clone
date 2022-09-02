import React from 'react'
import {getProviders, signIn} from "next-auth/react"
import Header from '../../components/Header/Header'

// Browser...
function SignIn({providers}) {
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 text-center px-14">
        <img src="https://links.papareact.com/ocw" className='w-80' alt="" />
        <p className='font-xs italic font-bold'>This is not a REAL app, it is built for educational purposes only</p>
        <div className='mt-40'>
            {Object.values(providers).map((provider) => (
            <div key={provider.name}>
            <button className='p-3 bg-blue-500 rounded-lg text-white border-none outline-none' onClick={() => signIn(provider.id, {callbackUrl:"/"})}>
                Sign in with {provider.name}
            </button>
            </div>
        ))}
        </div>
    </div>
      
    </>
  )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
      props: { providers },
    }
  }
export default SignIn