import Header from "./components/header";
import TopFilm from "./components/topFilm";
import { Booming } from "./components/booming";
export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col bg-cinza_preto">
      <Header/>
      <TopFilm/>
      <Booming/>
    </main>
    
  );
}
