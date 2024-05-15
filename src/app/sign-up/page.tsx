'use client'
import React from 'react'
import z from 'zod'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { createUser } from '@/server/actions'


type Props = {}

export default function page({ }: Props) {
    return (
        <section className='w-full h-screen flex flex-col gap-4 items-center justify-center'>
            <div className='text-2xl font-bold'>SignUp form</div>
            <div className='w-full max-w-md border-2 p-4 rounded-md'>
                <form action={createUser}>
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
            </div>
        </section>
    )
}