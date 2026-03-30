export default function Navbar() {
  return (
    <div className="h-fit flex items-center justify-between p-2">
      <div className="flex justify-center">
        <p className="text-[10px] font-body">Portifolio.exe/</p>
        <p className="text-[10px] font-display">Rikas</p>
      </div>
      <ul className="flex justify-evenly gap-2 p-2 text-xs font-body border">
        <li>Sobre</li>
        <p>|</p>
        <li>Skills</li>
        <p>|</p>
        <li>Projetos</li>
        <p>|</p>
        <li>Contato</li>
      </ul>
    </div>
  );
}
