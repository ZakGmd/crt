import Link from "next/link"

export default function Movies(){


    return(
        <div className="flex min-h-screen flex-col py-5 px-8 bg-gradient-to-br">
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
            <div className="flex items-center rounded-[24px] overflow-hidden justify-between bg-gradient-to-r from-transparent from-[-1%] to-black mt-10 ">
                <div className="flex flex-col items-start gap-7 pl-5 ">
                  <div className=" text-6xl font-semibold leading-[1.2] ">Wanna watch free movies & TV?</div>
                  <div className="">You&apos;ve come to the right place. We&apos;ve got a bunch here at <br /> Curator and you can start watching right now.</div>
                  <Link href={""} className="px-4 py-3 text-center bg-amber-400 text-black font-medium rounded-2xl mt-2 hover:bg-amber-500 transition duration-300">Sign Up</Link>
                </div>
                <video width={800} height={1000} autoPlay loop muted >
                    <source type="video/mp4" src="Trailer.mp4" />
                </video>
            </div>
        </div>
    )
}