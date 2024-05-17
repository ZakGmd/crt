"use client"
import Image from "next/image";
import Link from "next/link"
import { gql, useQuery } from '@apollo/client';

type MV = {
    id: number ,
    title: string ,
    description: string ,
    imageUrl: string 
}
const FETCH_MOVIES = gql`
  query FetchMovies {
    fetchMovies {
      id
      title
      imageUrl
      description
    }
  }
`;

export default function Movies(){
    const { data ,loading, error  } = useQuery(FETCH_MOVIES);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return(
        <div className="flex min-h-screen flex-col ">
            <div className="py-5 ">
             <div className="flex items-center justify-between bg-white/15 px-4 py-1 mx-8 rounded-md shadow-xl">
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
             <div className="flex relative items-center justify-center  overflow-hidden h-[600px] mt-[4px] bg-gradient-to-t from-transparent from-[-1%] to-black ">
                <div className="flex flex-col items-center gap-7 pl-10 ">
                  <div className=" text-6xl font-semibold leading-[1.2] ">Wanna watch free movies & TV?</div>
                  <div className="text-center">You&apos;ve come to the right place. We&apos;ve got a bunch here at <br /> Curator and you can start watching right now.</div>
                  <Link href={""} className="px-4 py-3 text-center bg-amber-400 text-black font-medium rounded-2xl mt-2 hover:bg-amber-500 transition duration-300">Sign Up</Link>
                </div>
                <video width={1200} height={800} autoPlay loop muted className="absolute -z-20 w-full ">
                    <source type="video/mp4" src="Trailer.mp4" />
                </video>
             </div>
            </div>
            <div className="  bg-gradient-to-b from-black to-red-950">
                <div className="flex flex-col items-start gap-6 px-12 py-3 mb-7">
                    <Link className="flex items-center gap-3" href={""}>
                        <div className=" text-2xl font-semibold">Addictive Shows</div>
                        <Image src={"right.svg"} alt={"right icon svg white"} width={20} height={20} />
                    </Link>
                    <div className="flex items-center gap-3  ">
                        <div className="flex flex-col items-start gap-2  overflow-hidden">
                            <div className="overflow-hidden rounded-md">
                                 <Image src={"/dzlWlpr.jpg"} alt={""} height={300} width={233} className=" hover:scale-110 cursor-pointer duration-300 " />
                            </div>
                           
                            <div className=" font-medium ">The Little things</div>    
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {
                    data.fetchMovies.map(({id, title} : MV)=>(
                        <div key={id}>

                            <div>{title}</div>
                          
                        </div>
                    )

                    )
                }
            </div>
        </div>
    )
}