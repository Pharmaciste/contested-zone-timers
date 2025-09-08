import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contested Zone Timers',
  description: 'Timers et cartes des Contested Zones (fan-made)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
