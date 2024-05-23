import React from 'react'
import WordRotate from './magicui/word-rotate'
import DotPattern from './magicui/dot-pattern'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

const HeroSection = () => {
    return (
        <div className='h-screen gap-y-10 flex flex-col items-center justify-center'>
            <WordRotate
                className="text-3xl font-bold text-center"
                words={['hi there, how are you', 'welcome to our platform where you will discover and explore new things and tips', 'we are here to help you to find the best courses for your next collage experience']}
            />
            <div className='flex items-center justify-center gap-4'>
                <Button>GET STARTED</Button>
                <Button variant={'secondary'}>LEARN MORE</Button>
            </div>
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
            />
        </div>
    )
}

export default HeroSection
