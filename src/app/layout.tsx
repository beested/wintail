import type { Metadata } from 'next';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'winTail',
  description: 'recipes with next',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NextThemeProvider
          attribute="class"
          defaultTheme="zinc"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
