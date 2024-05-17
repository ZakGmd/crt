"use client"
import Image from "next/image";
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


export default function Moovies(){

    const { data ,loading, error  } = useQuery(FETCH_MOVIES);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <>
            <div className="flex items-center gap-5">
                {
                        data.fetchMovies.map((mv : MV)=>(
                        <div className="flex flex-col items-start gap-2  overflow-hidden" key={mv.id}>
                            <div className="overflow-hidden rounded-md">
                                 <Image src={mv.imageUrl} alt={""} height={300} width={233} className=" hover:scale-110 cursor-pointer duration-300 " />
                            </div>
                            <div className=" font-medium ">{mv.title}</div>    
                        </div>    
                        )
                    )
                }
            </div>
        
        </>
        
        
        
    )
}