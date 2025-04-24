import Image from 'next/image';

import { GlareCard } from '@/components/ui/glare-card';

export function GlareCardDemo() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='flex flex-col gap-4 p-4 text-center md:p-8'>
                <div className='flex flex-col gap-1'>
                    <h3 className='from-foreground to-muted-foreground relative z-10 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
                        Context
                    </h3>
                    <p className='text-muted-foreground text-sm'>Organize your information in Markdown</p>
                </div>
                <GlareCard className='relative flex aspect-[17/21] items-center justify-center overflow-hidden'>
                    <Image src='/images/2.png' alt='Window icon' fill className='object-cover' priority />
                </GlareCard>
            </div>

            <div className='flex flex-col gap-4 p-4 text-center md:p-8'>
                <div className='flex flex-col gap-1'>
                    <h3 className='from-foreground to-muted-foreground relative z-10 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
                        AI Agent
                    </h3>
                    <p className='text-muted-foreground text-sm'>Automate tasks with AI workflows</p>
                </div>
                <GlareCard className='relative flex aspect-[17/21] items-center justify-center overflow-hidden'>
                    <Image src='/images/1.png' alt='File icon' fill className='object-cover' priority />
                </GlareCard>
            </div>

            <div className='flex flex-col gap-4 p-4 text-center md:p-8'>
                <div className='flex flex-col gap-1'>
                    <h3 className='from-foreground to-muted-foreground relative z-10 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
                        Rules
                    </h3>
                    <p className='text-muted-foreground text-sm'>Define rules in natural language</p>
                </div>
                <GlareCard className='relative flex aspect-[17/21] items-center justify-center overflow-hidden'>
                    <Image src='/images/3.png' alt='Globe icon' fill className='object-cover' priority />
                </GlareCard>
            </div>
        </div>
    );
}
