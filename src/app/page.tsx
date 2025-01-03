"use client"
import TopFilm from "./components/TopFilm"
import  EmAlta  from "./components/EmAlta";
import ParaAFamilia from "./components/ParaAFamilia";
import ParaVoce from "./components/ParaVoce";



export default function Home() {


  return (
    <main className="w-screen h-screen flex flex-col bg-cinza_preto">
      <TopFilm/>
      <EmAlta/>
      <ParaVoce/>
      <ParaAFamilia/>
    </main>
    
  );
}
