'use client';
import { useEffect, useState } from 'react';
function pad(n:number){return String(n).padStart(2,'0');}
export default function Countdown({ seconds=900 }:{ seconds?:number }){
  const [end,setEnd] = useState(()=>Date.now()+seconds*1000);
  const [now,setNow] = useState(Date.now());
  useEffect(()=>{ const id=setInterval(()=>setNow(Date.now()),1000); return ()=>clearInterval(id); },[]);
  const s = Math.max(0, Math.floor((end-now)/1000));
  const hh = pad(Math.floor(s/3600)), mm = pad(Math.floor((s%3600)/60)), ss = pad(s%60);
  return (
    <div className="flex items-center gap-3">
      <span className={`font-mono text-2xl tabular-nums px-3 py-1 rounded-lg ${s===0?'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-100':'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'}`}>{hh}:{mm}:{ss}</span>
      <button onClick={()=>setEnd(Date.now()+seconds*1000)} className="px-3 py-1 rounded-lg bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-sm">Restart</button>
    </div>
  );
}
