import React from 'react'
import z from 'zod'
import { Input } from './ui/input'
import { Label } from "@/components/ui/label"



type Props = {}

export function myForm({ }: Props) {
    return (
        <section>
            <div>form</div>
            <div>
                <form>
                    <div>
                        <Label htmlFor="email">Your email address</Label>
                        <Input
                            type='email'
                            placeholder='passionsteven28@gmail.com'
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">Your password</Label>
                        <Input
                            type='password'
                            required
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}