
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar'; // Import Sidebar component

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CRM Light App',
  description: 'CRM Dashboard App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex h-screen"> {/* Use a flex container */}
          <Sidebar /> {/* Include the Sidebar component */}
          <main className="flex-grow overflow-y-auto">{children}</main> {/* Main content area */}
        </div>
      </body>
    </html>
  );
}
