import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-5 px-8 bg-gradient-to-br from-red-900 from-[-80%] to-black ">
       <div className="flex items-center justify-between bg-white/15 px-4 py-1 rounded-md shadow-xl">
        <div className=" font-semibold text-[28px] italic  ">Curator</div>
         <div className="flex items-center gap-8">
           <Link href={"/"} className="font-medium leading-3">Movies</Link>
           <Link href={"/"}  className="font-medium leading-3">Series</Link>
         </div>
         <div className="flex items-center gap-4">
          <Link href={"/"}>Sign In</Link>
          <Link className="px-5 py-[2px] bg-amber-400/70 text-black rounded-lg font-semibold hover:bg-amber-400 transition-colors duration-300" href={"/"} >Sign Up</Link>
         </div>
       </div>
       <div className="flex  items-center justify-between mt-[10px]">
         <div className=" font-extrabold text-6xl  leading-[1.4]  "> <span className=" text-transparent bg-gradient-to-b from-[#F74366] from-30% to-white bg-clip-text ">O</span>ur selection is like <br /> Your friend group<br />Small but <span className="text-[#F74366] uppercase">awesome </span>!</div>
         <div>
          <Image src={"CuratorHero.svg"} alt={""} width={730} height={730} />
         </div>
       </div>
      
    </main>
  );
}
