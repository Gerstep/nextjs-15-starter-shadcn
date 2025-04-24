'use client';

import Image from 'next/image';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { BackgroundBeamsDemo } from '@/components/ui/background-beams-demo';
import { FooterDemo } from '@/components/ui/footer-demo';
import { GlareCardDemo } from '@/components/ui/glare-card-demo';
import { SparklesPreview } from '@/components/ui/sparkles-demo';

export default function Landing() {
    return (
        <div className='min-h-screen w-full'>
            {/* Logo */}
            <div className='absolute top-7 left-7 z-50'>
                <Image
                    src='/images/cybos.png'
                    alt='Cybos Logo'
                    width={120}
                    height={40}
                    className='object-contain'
                    priority
                />
            </div>

            {/* Sparkles Section */}
            <div className='h-screen w-full'>
                <SparklesPreview />
            </div>

            {/* Glare Cards Section */}
            <div className='w-full px-4 md:px-8'>
                <GlareCardDemo />
            </div>

            <div className='relative'>
                <BackgroundBeamsDemo />
                <BackgroundBeams />
            </div>

            {/* Footer */}
            <FooterDemo />
        </div>
    );
}
