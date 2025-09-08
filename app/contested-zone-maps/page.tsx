import maps from '@/data/maps.json';
import MapCard from '@/components/MapCard';

export default function Maps(){
  return (
    <div className="space-y-6">
      <h1 className="h1">Contested Zone Maps</h1>
      <p className="p">Credits to original authors are listed on each card. Replace images/links later.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {maps.map((m,i)=>(<MapCard key={i} {...m} />))}
      </div>
    </div>
  );
}
