import WatchButton from "./watchButton";
import Image from "next/image";
import image1 from "../../../public/image1.png"
import blurry from "../../../public/Rectangle 7.png";

const filme = "/";
export default function topFilm() {
    return (
        <div className="absolute w-full">

             
            <Image
                className="w-full h-full object-cover"
                src = {image1}
                alt="top film"
            />
            <div className="absolute inset-0 flex bg-black bg-opacity-50">
                <div className="flex flex-col">
                    <h1 
                    className="text-white font-bold mt-60 ml-10 text-3xl w-72">
                        Spider-Man: Across the
                        Spider Verse
                    </h1>
                    <WatchButton endereço_do_filme={filme}/>
                </div>
                
            </div>
            <Image
                className="w-screen z-20 -mt-40"
                src={blurry}
                alt="blurry_transition"
            />
             
            
        </div>
    )
}