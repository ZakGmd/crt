import Link from "next/link"

export default function Series(){


    return(
        <div className="flex min-h-screen flex-col py-5 px-8 bg-gradient-to-br from-red-900 from-[-80%] to-black">
          <div className="flex items-center justify-between bg-white/15 px-4 py-1 rounded-md shadow-xl">
         <Link href={"/"} className=" font-semibold text-[28px] italic  ">Curator</Link>
       <div className="flex items-center gap-8">
         <Link href={"/Movies"} className="font-medium leading-3">Movies</Link>
         <Link href={"/Series"}  className="font-medium leading-3">Series</Link>
        </div>
      <div className="flex items-center gap-4">
        <Link href={"/"}>Sign In</Link>
        <Link className="px-5 py-[2px] bg-amber-400/70 text-black rounded-lg font-semibold hover:bg-amber-400 transition-colors duration-300" href={"/"} >Sign Up</Link>
      </div>
          </div>
        </div>
    )
}