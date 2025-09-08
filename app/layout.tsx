import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Executive Hangar Timer',
  description: 'Fan-made timers and maps for CZ. Not affiliated with CIG.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container py-8 space-y-8">{children}</main>
        <footer className="py-10 text-center text-sm text-zinc-500">
          <div className="container">
            <p>Fan-made / Non-affiliated. Credits on each map.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
