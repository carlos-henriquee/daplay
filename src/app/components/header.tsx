import Link from "next/link";
import Image from "next/image";
import daplay_icon from "../../../public/daplay_icon.svg"
import profile_icon from "../../../public/profile_icon.svg";

export default function Header() {
    return (
        <header className="absolute w-screen h-20 bg-transparent flex justify-between">
            <Link href={"/"} className="mr-5 mb-auto mt-auto"> 
            <Image 
                src={daplay_icon}
                alt="daplay icon"
            /> 
            </Link>
            <Link className="mr-5 mb-auto mt-auto" href={"/"}><Image src={profile_icon} alt="profile"/></Link>
        </header>
    )
}