import Countdown from '@/components/Countdown';
import TimerItem from '@/components/TimerItem';
import self from '@/data/self-timers.json';

function Section({title, children}:{title:string; children:React.ReactNode}){
  return <section className="card space-y-3"><h2 className="h2">{title}</h2>{children}</section>;
}

export default function Home(){
  return (
    <div className="space-y-6">
      <Section title="Executive Hangar Timer">
        <p className="p">Simple global countdown you can restart manually.</p>
        <Countdown seconds={3600} />
      </Section>

      <Section title="Checkmate — Self Timers">
        <div className="space-y-2">
          <h3 className="font-medium">Blue Keycards</h3>
          {self.checkmate.blue_keycards.map((t,i)=>(<TimerItem key={i} label={t.label} seconds={t.seconds}/>))}
          <h3 className="font-medium mt-4">Compboards</h3>
          {self.checkmate.compboards.map((t,i)=>(<TimerItem key={i} label={t.label} seconds={t.seconds}/>))}
        </div>
      </Section>

      <Section title="Orbituary — Self Timers">
        <div className="space-y-2">
          <h3 className="font-medium">Blue Keycards</h3>
          {self.orbituary.blue_keycards.map((t,i)=>(<TimerItem key={i} label={t.label} seconds={t.seconds}/>))}
          <h3 className="font-medium mt-4">Compboards</h3>
          {self.orbituary.compboards.map((t,i)=>(<TimerItem key={i} label={t.label} seconds={t.seconds}/>))}
        </div>
      </Section>

      <Section title="Ruin Station — Self Timers">
        <div className="space-y-2">
          <h3 className="font-medium">Keycards</h3>
          {self.ruin_station.keycards.map((t,i)=>(<TimerItem key={i} label={t.label} seconds={t.seconds}/>))}
          <h3 className="font-medium mt-4">Compboards</h3>
          {self.ruin_station.compboards.map((t,i)=>(<TimerItem key={i} label={t.label} seconds={t.seconds}/>))}
        </div>
      </Section>

      <Section title="PYAM-SUPVISR — Self Timers">
        <div className="space-y-2">
          <h3 className="font-medium">Red Keycards</h3>
          {self.pyam_supvisr.red_keycards.map((t,i)=>(<TimerItem key={i} label={t.label} seconds={t.seconds}/>))}
        </div>
      </Section>
    </div>
  );
}
