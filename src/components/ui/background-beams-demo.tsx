'use client';

import React from 'react';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { Input } from '@/components/ui/input';

export function BackgroundBeamsDemo() {
    return (
        <div className='bg-background relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md antialiased'>
            <div className='mx-auto max-w-2xl p-4'>
                <h1 className='from-foreground to-muted-foreground relative z-10 bg-gradient-to-b bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-7xl'>
                    Join the waitlist
                </h1>
                <p></p>
                <p className='text-muted-foreground relative z-10 mx-auto my-2 max-w-lg text-center text-sm'>
                    To get early access and free workflow templates
                </p>
                <Input type='email' placeholder='hi@manuarora.in' className='relative z-10 mt-4 w-full' />
            </div>
            <BackgroundBeams />
        </div>
    );
}
