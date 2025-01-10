import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Header component
function Header() {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-4 z-50 shadow-md h-15">
      <div className="container mx-auto flex justify-center items-center">
        <h1 className="text-4xl font-bold">
          <Link href="/">Skillz</Link>
        </h1>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
