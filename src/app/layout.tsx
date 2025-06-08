import { Providers } from '@/app/providers';
import { CircuitBoard } from '@/components/CircuitBoard';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'NicoScript - Web Development Studio',
  description:
    'Modern web solutions that combine stunning design with powerful performance.',
  metadataBase: new URL('https://nicoscript.com'),
  authors: [{ name: 'NicoScript', url: 'https://nicoscript.com' }],
  creator: 'NicoScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${orbitron.variable}`}
    >
      <body className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark antialiased">
        <Providers>
          <CircuitBoard />
          {children}
        </Providers>
      </body>
    </html>
  );
}
