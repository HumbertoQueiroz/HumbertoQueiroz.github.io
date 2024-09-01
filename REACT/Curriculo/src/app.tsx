import { Avatar } from "./components/Avatar";

//Paleta de cores base https://paletadecores.com/paleta/3a3132/0f4571/386dbd/009ddd/05d3f8/

export function App() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1044px]  border flex justify-between">
        <Avatar  urlImg='fotoDevHumbertoQueiroz.JPG' alt="Foto do desenvolvedor Humberto Queiroz" />
        <div className="w-3/4">
          <header className="flex flex-col items-center group">
            <h1 className="mt-24 text-blue-800 text-6xl font-bold ">HUMBERTO QUEIROZ</h1>
            <div className="border-b-4 border-slate-300 w-9/12 group-hover:border-sky-300"></div>
            <h2 className="text-3xl mt-4">Desenvolvedor Web</h2>
          </header>
        </div>
      </div>
    </div>
    
  )
    
}

