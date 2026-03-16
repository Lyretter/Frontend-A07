import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
export default function Booking(){
    return(
        <main className="w-[100%] flex flex-col items-center space-y-4 ">
            <div className="font-bold text-2xl   font-medium">Venue Booking</div>

            <TextField className="space-y-4"
                variant="standard"
                name="Name-Lastname"
                label="Name-Lastname"
            />

            <TextField className="space-y-4"
                variant="standard"
                name="Contact-Number"
                label="Contact-Number"
            />
            <br/><br/>
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Event Date and Location</div>
                    <DateReserve/>
                    
            </div>

        <button className="block rounded-md inset-ring-2 inset-ring-blue-500 bg-white hover:bg-neutral-200 px-3 py-2" name="Book Venue">
            Book Venue
        </button>
           
        </main>
    );
}