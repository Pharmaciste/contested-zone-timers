import ships from '@/data/ships.json';
import ShipCard from '@/components/ShipCard';

export default function Ships(){
  return (
    <div className="space-y-6">
      <h1 className="h1">Executive Hangar Ships</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ships.map((s,i)=>(<ShipCard key={i} {...s} />))}
      </div>
    </div>
  );
}
