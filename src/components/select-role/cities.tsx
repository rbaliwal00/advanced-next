import Image from "next/image";
import { banglore, delhi, hydrabad, kolkata, mumbai } from "@public/assests";

const Cities = () => {
    const cities = [
        {name: 'Delhi', src: delhi}, 
        {name: 'Mumbai', src: mumbai}, 
        {name: 'Bengaluru (HQ)', src: banglore}, 
        {name: 'Kolkata', src: kolkata}, 
        {name: 'Hyderabad', src: hydrabad}, 
    ]
  return (
    <div className="">
            <p className="text-center">Cities we are in</p>
      <div className="flex gap-4 text-center items-center">
        {
          cities.map((city,i)=>
          <div key={i}>
            <Image src={city.src} style={{width:'auto',height:'auto'}}  alt="image"  />
          </div>
            )
        }
      </div>
    </div>
  )
}

export default Cities