'use client'
import React, { useState } from 'react'
import z from 'zod'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { createUser } from '@/server/actions'
import Link from 'next/link'


type Props = {}

export default function Page({ }: Props) {
    const [errors, setErrors] = useState({});

    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8, {
            message: "Password must be at least 8 characters long",
        }),
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        try {
            await schema.parseAsync(Object.fromEntries(formData));
            // If validation passes, proceed with your logic (e.g., createUser)
            createUser(formData); // Assuming createUser is your signup function
        } catch (error) {
            if (error instanceof z.ZodError) {
                const parsedError = error.errors.map(err => err.message);
                setErrors(parsedError);
            }
        }
    };


    return (
        <section className='w-full h-screen flex flex-col gap-4 items-center justify-center'>
            <div className='text-2xl font-bold'>SignUp form</div>
            <div className='w-full max-w-md border-2 p-4 rounded-md'>
                <form
                    // action={createUser}
                    onSubmit={handleSubmit}
                >
                    <>
                        <Label htmlFor="email">Your email address</Label>
                        <Input
                            type='email'
                            name='email'
                            placeholder='passionsteven28@gmail.com'
                        />
                    </>
                    <>
                        <Label htmlFor="password">Your password</Label>
                        <Input
                            type='password'
                            name='password'
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
                    already have an account?
                    <Link
                        href='sign-in'
                        className='text-blue-500 font-bold'
                    >
                        sign in here
                    </Link>
                </div>
            </div>
        </section>
    )
}