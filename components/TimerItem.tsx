'use client';
import Countdown from './Countdown';
export default function TimerItem({label, seconds}:{label:string; seconds:number}){
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm">{label}</span>
      <Countdown seconds={seconds} />
    </div>
  );
}
