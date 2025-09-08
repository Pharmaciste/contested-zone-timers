export default function MapCard({name, author, creditUrl, imageUrl}:{name:string; author:string; creditUrl:string; imageUrl:string}){
  return (
    <div className="card space-y-3">
      <img src={imageUrl} alt={name} className="w-full h-44 object-cover rounded-xl" />
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-zinc-500">by <a href={creditUrl} className="link" target="_blank" rel="noreferrer">{author}</a></p>
      </div>
      <a className="text-sm link" href={imageUrl} target="_blank" rel="noreferrer">Open image</a>
    </div>
  );
}
