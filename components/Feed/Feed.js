import React from 'react'
import MiniProfile from '../MiniProfile/MiniProfile'
import Posts from '../Posts/Posts'
import Stories from '../Stories/Stories'
import Suggestions from '../Suggestions/Suggestions'
import {signIn,signOut,useSession} from "next-auth/react";
import SignIn from '../../pages/auth/signin'

function Feed() {
    const {data:session} = useSession()
    return (
        <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
            {/* Section */}
            <section className='col-span-2'>
                {/* Stories */}
                <Stories />
                {/* Posts */}
                <Posts />
            </section>

            {/* Section */}
            {session && (
                <section className='hidden xl:inline-grid md:col-span-1'>
                    <div className='fixed'>
                        {/* Mini profiles */}
                        <MiniProfile/>
                        {/* Suggestions */}
                        <Suggestions/>
                    </div>
                </section>
            )}
            

        </main>
    )
}

export default Feed