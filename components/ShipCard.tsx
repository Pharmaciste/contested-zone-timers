export default function ShipCard({name, role, wiki, imageUrl}:{name:string; role:string; wiki:string; imageUrl:string}){
  return (
    <div className="card space-y-3">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded-xl" />
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-zinc-500">{role}</p>
      </div>
      <a href={wiki} target="_blank" rel="noreferrer" className="text-sm link">Wiki</a>
    </div>
  );
}
