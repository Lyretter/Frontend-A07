import Image from "next/image"
export default  async function VenuePage({params} : {params: Promise<{vid:string}>}){


    const mockVenueRepo = new Map()
    mockVenueRepo.set("001",{name:"The Bloom Pavilion" , image:"/img/bloom.jpg"})
    mockVenueRepo.set("002",{name:"Spark Space" , image:"/img/spark.jpg"})
    mockVenueRepo.set("003",{name:"The Grand Table" , image:"/img/grand.jpg"})

    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium"> Venue ID {(await params).vid} </h1>
            <div className="flex flex-row my-5">
                <Image src={(mockVenueRepo.get((await params).vid)).image}
                alt="Venue Image"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5">{(mockVenueRepo.get((await params).vid)).name}</div>                
            </div>
        </main>
    )
}