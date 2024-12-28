"use client"
import Header from "./components/header";
import TopFilm from "./components/TopFilm"
import  EmAlta  from "./components/EmAlta";



export default function Home() {


  return (
    <main className="w-screen h-screen flex flex-col bg-cinza_preto">
      <Header/>
      <TopFilm/>
      <EmAlta/>
    </main>
    
  );
}
