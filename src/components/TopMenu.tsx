import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
  return (
   
    <div className="w-full h-16 bg-white flex flex-row items-center justify-end px-6 gap-8 border-b border-gray-200">
      
      <div className="flex flex-row items-center">
        <TopMenuItem title="Booking" pageRef="/booking" />
      </div>

      
      <div className="h-full flex items-center">
        <Image 
          src="/img/logo.png" 
          alt="logo" 
          width={60}    
          height={60}   
          className="object-contain py-1" 
          priority
        />
      </div>
      
    </div>
  );
}