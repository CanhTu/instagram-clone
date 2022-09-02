import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faBars, faHome, faPaperPlane, faCompass, faHeart, faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import {signIn,signOut,useSession} from "next-auth/react";
import { useRouter } from 'next/router';
function Header() {
    const {data: session} = useSession();
    const router = useRouter();
    return (
        <div className='shadow-sm border-b bg-white sticky top-0'>
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
                {/* Left */}
                <div onClick={() => router.push("/")} className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                    <Image src="https://links.papareact.com/ocw" layout='fill' objectFit='contain' />
                </div>
                <div onClick={() => router.push("/")} className='relative lg:hidden flex-shrink-0 w-10 cursor-pointer'>
                    <Image src="https://links.papareact.com/jjm" layout='fill' objectFit='contain' />
                </div>

                {/* Middle - Search input field */}
                <div className='relative mt-1 p-3 rounded-md'>
                    <div className='absolute pl-3 flew items-center pointer-events-none'>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black' type="text" placeholder='Search' />
                </div>

                {/* Right */}
                {session ? (
                    <>
                        <div className='flex items-center justify-end space-x-4'>
                            <FontAwesomeIcon icon={faHome} className="navBtn" />
                            <FontAwesomeIcon icon={faBars} className="h-6 md:hidden cursor-pointer" />
                            <FontAwesomeIcon icon={faPaperPlane} className="navBtn" />
                            <FontAwesomeIcon icon={faPlusCircle} className="navBtn" />
                            <FontAwesomeIcon icon={faCompass} className="navBtn" />
                            <FontAwesomeIcon icon={faHeart} className="navBtn" />
                            <img onClick={signOut} src={session?.user?.image} alt='avatar' className='h-8 rounded-full cursor-pointer' />
                        </div>
                    </>
                ) : (
                    <button onClick={signIn}>Sign In</button>
                )}
            </div>
        </div>
    )
}

export default Header