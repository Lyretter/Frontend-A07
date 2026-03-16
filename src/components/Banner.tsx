'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Banner() {
    const router = useRouter()
    const banner = ["/img/cover.jpg","/img/cover2.jpg","/img/cover3.jpg","/img/cover4.jpg"]
    
    const [index, setIndex] = useState(0)

    return (
        <div 
            className="relative w-screen h-[80vh] m-0 p-0 cursor-pointer" 
            
            onClick={() => { setIndex((prev) => prev + 1) }}
        >
            
            <Image 
                src={banner[index % 4]}
                alt="cover"
                fill={true}
                priority
                className="object-cover" 
            />
            

            <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
            
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center text-white w-full px-6 pointer-events-none">
                
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg mb-6 capitalize">
                    Where every event finds its venue
                </h1>
                
                <h3 className="text-lg md:text-xl font-medium tracking-normal leading-relaxed drop-shadow-md max-w-3xl">
                    Finding the perfect venue has never been easier. Whether it's a wedding, 
                    corporate event, or private party, we connect people to the perfect place.
                </h3>
                
            </div>
            
            <button
                
                className="absolute bottom-10 right-10 z-30 border-2 border-white bg-transparent text-white px-10 py-4 font-bold text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                onClick={(e) => {
                    e.stopPropagation()
                    router.push("/venue")
                }}
            >
                Select Venue
            </button>
            
        </div>
    );
}