import { Footer } from '@/components/ui/footer';

import { Github, Hexagon, Twitter } from 'lucide-react';

export function FooterDemo() {
    return (
        <div className='w-full'>
            <Footer
                logo={<Hexagon className='h-10 w-10' />}
                brandName='cybos — git for your life, with AI as co-maintainer'
                socialLinks={[
                    {
                        icon: <Twitter className='h-5 w-5' />,
                        href: 'https://twitter.com',
                        label: 'Twitter'
                    },
                    {
                        icon: <Github className='h-5 w-5' />,
                        href: 'https://github.com',
                        label: 'GitHub'
                    }
                ]}
                mainLinks={[
                    { href: '/products', label: 'Products' }
                    // { href: '/about', label: 'About' },
                    // { href: '/blog', label: 'Blog' },
                    // { href: '/contact', label: 'Contact' }
                ]}
                legalLinks={[
                    { href: '/privacy', label: 'Privacy' },
                    { href: '/terms', label: 'Terms' }
                ]}
                copyright={{
                    text: '© 2025 cybos',
                    license: 'All rights reserved'
                }}
            />
        </div>
    );
}
