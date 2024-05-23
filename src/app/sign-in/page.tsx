import React from 'react'
import z from 'zod'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { createUser, signInUser } from '@/server/actions'
import Link from 'next/link'


type Props = {}

export default function page({ }: Props) {
    return (
        <section className='w-full h-screen flex flex-col gap-4 items-center justify-center'>
            <div className='text-2xl font-bold'>SignIn form</div>
            <div className='w-full max-w-md border-2 p-4 rounded-md'>
                <form action={signInUser}>
                    <>
                        <Label htmlFor="email">Your email address</Label>
                        <Input
                            type='email'
                            name='email'
                            placeholder='passionsteven28@gmail.com'
                            required
                        />
                    </>
                    <>
                        <Label htmlFor="email">Your password</Label>
                        <Input
                            type='password'
                            name='password'
                            required
                        />
                    </>
                    <Button
                        type='submit'
                        className='w-full mt-4'
                    >
                        submit
                    </Button>
                </form>
                <div className='flex gap-2 items-center justify-center mt-4 text-sm'>
                    you don&apos;t have an account?
                    <Link
                        href='sign-up'
                        className='text-blue-500 font-bold'
                    >
                        sign up now
                    </Link>
                </div>
            </div>
        </section>
    )
}