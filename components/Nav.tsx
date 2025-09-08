import Link from 'next/link';
export default function Nav(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-zinc-900/60">
      <div className="container py-3 flex items-center gap-3">
        <Link href="/" className="font-semibold">Executive Hangar Timer</Link>
        <nav className="ml-auto flex items-center gap-4 text-sm">
          <Link href="/contested-zone-maps">Contested Zone Maps</Link>
          <Link href="/ships">Ships</Link>
          <Link href="/how-it-works">How it works</Link>
        </nav>
      </div>
    </header>
  );
}
