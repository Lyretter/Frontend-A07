'use client'
import { useReducer, useState } from "react";
import Card from "./Card";
import Link from "next/link";

export default function CardPanel() {

    const ratingReducer = (
        ratingMap: Map<string, number>,
        action: { type: string, venueName: string, rating?: number }
    ) => {
        const newMap = new Map(ratingMap)
        switch (action.type) {
            case "add": {
                newMap.set(action.venueName, action.rating ?? 0)
                return newMap
            }
            default:
                return ratingMap
        }
    }

    const [venueRatings, dispatchRating] = useReducer(
        ratingReducer,
        new Map<string, number>([
            ["The Bloom Pavilion", 0],
            ["Spark Space", 0],
            ["The Grand Table", 0]
        ])
    )


    const [visibleVenues, setVisibleVenues] = useState<Set<string>>(
        new Set(["The Bloom Pavilion", "Spark Space", "The Grand Table"])
    );

    const removeVisibleVenue = (venueName: string) => {
        const newVisible = new Set(visibleVenues);
        newVisible.delete(venueName); 
        setVisibleVenues(newVisible);
    };
    const mockVenueRepo = [
    {vid:"001",name:"The Bloom Pavilion" , image:"/img/bloom.jpg"},
    {vid:"002",name:"Spark Space" , image:"/img/spark.jpg"},
    {vid:"003",name:"The Grand Table" , image:"/img/grand.jpg"}

]

   return (
    <div>
        
        <div style={{ margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around" }}>
            {mockVenueRepo.map((venueItem) => (
                <Link key={venueItem.vid} href={`/venue/${venueItem.vid}`} className="w-1/5">
                    <Card
                        venueName={venueItem.name}
                        imgSrc={venueItem.image}
                        rating={venueRatings.get(venueItem.name) || 0}
                        onRatingChange={(venue: string, value: number) => {
                            dispatchRating({ type: 'add', venueName: venue, rating: value })
                        }}
                    />
                </Link>
            ))}
        </div>

        
        <div className="px-10">
            <div className="w-full text-xl font-medium mb-4">
                Venue List with Ratings : {venueRatings.size}
            </div>
            
            {Array.from(venueRatings).map(([venue, rating]) => (
                <div 
                    key={venue} 
                    data-testid={venue}
                   
                    className="cursor-pointer hover:text-red-500 transition-colors py-1"
                    onClick={() => dispatchRating({ type: 'remove', venueName: venue })}
                >
                    {venue} Rating : {rating}
                </div>
            ))}
        </div>
    </div>
);
}