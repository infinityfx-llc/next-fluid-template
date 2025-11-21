import './globals.css';
import '../fluid.css';

import { FluidProvider } from '@infinityfx/fluid';
import type { Metadata } from 'next';
import { Splash } from '@infinityfx/splash';
import Header from '@/components/header';

export const metadata: Metadata = {
    title: {
        default: 'Next Fluid Template',
        template: '%s | Next Fluid Template'
    }
};

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {

    return <html lang="en">
        <FluidProvider>
            <body>
                <Splash>
                    <Header />

                    {children}
                </Splash>
            </body>
        </FluidProvider>
    </html>;
}
