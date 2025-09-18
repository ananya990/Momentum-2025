"use client"
import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

function SignInButton() {
    const { data: session } = useSession()
    if(!session){
        return (
            <>
                <Button onClick={()=>{
                    console.log("Hey Sign In clickeed!")
                    signIn("google")
                }}>
                    Sign In
                </Button>
            </>
        )
    }
    else{
        return (
            <div className='h-10 w-10 rounded-full'>
                <Image
                    height={100}
                    width={100}
                    alt='User'
                    src={session.user.image}
                />
            </div>
        )
    }
}

export default SignInButton