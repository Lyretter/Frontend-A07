'use client'
import Image from 'next/image';
import { Rating } from '@mui/material';
import InteractiveCard from './InteractiveCard';

export default function Card({ venueName, imgSrc, rating, onRatingChange }: { venueName: string, imgSrc: string, rating: number, onRatingChange: Function }) {
    return (
        <div className="w-[250px] h-[350px] bg-white shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <InteractiveCard contentName={venueName}>
                
                <div className="w-full h-[60%] relative">
                    <Image 
                        src={imgSrc}
                        alt='picture card'
                        fill={true}
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className="w-full h-[40%] px-4 py-2 flex flex-col items-center justify-center gap-2">
                    <h3 className="text-xl font-bold text-slate-800 tracking-wide text-center leading-tight">
                        {venueName}
                    </h3>

                    
                    <div data-testid={`${venueName} Rating` } onClick={(e) => e.stopPropagation()}>
                        <Rating
                            id={`${venueName} Rating`}
                            name={`${venueName} Rating`}
                            value={rating}
                            onChange={(e, newValue) =>{e.stopPropagation(); onRatingChange(venueName, newValue)} }
                        />
                    </div>
                </div>
                
            </InteractiveCard>
        </div>
    );
}