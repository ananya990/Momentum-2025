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
                <Button 
                    className="z-50 cursor-pointer"
                    onClick={()=>{
                        signIn("google")
                    }}
                >
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
                    className='rounded-full h-10 w-10'
                    src={session.user.image || ""}
                />
            </div>
        )
    }
}

export default SignInButton