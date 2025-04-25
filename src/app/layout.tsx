
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar'; // Import Sidebar component
import { cookies } from 'next/headers'

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
  const userId = cookies().get('userId')?.value;
  const isAuthenticated = !!userId;

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex h-screen">
          {/* Sidebar */}
          {isAuthenticated && <Sidebar />}

          {/* Main Content */}
          <main className="flex-grow overflow-y-auto">
            {/* Action Area (You can put specific components here or move it inside a page) */}
            <div className="flex h-full">
              <div className="flex-grow">{children}</div>
              <aside className="w-80 border-l p-4">
                {/* Placeholder for action area content */}
                <h2 className="text-lg font-semibold mb-2">Actions</h2>
                <p className="text-sm">This is the action area.  Add components here.</p>
              </aside>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
