import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Gen Z Portfolio Engine | Kerala',
  description: 'Create your aesthetic one-page portfolio to share on Instagram/WhatsApp.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-screen bg-black text-white selection:bg-purple-500/30`}>
        {children}
      </body>
    </html>
  );
}
