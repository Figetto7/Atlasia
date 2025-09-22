import type { JSX } from "react"
import { Card, CardContent } from "@/Components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/Components/ui/carousel"
import { destinations } from "@/Helpers/Types/elementOfTypes"
import { useTravelInformation } from "@/Contexts/storeZustand"
import { useNavigate } from "react-router-dom"
import { Button } from "@/Components/ui/button"
import { Search } from "lucide-react"
import GeneralAlert from "@/Components/GeneralAltert"
import { MdOutlineErrorOutline } from "react-icons/md";

export default function Home(): JSX.Element {
const navigate = useNavigate()
  const updateDestination = useTravelInformation((state) => state.updateDestination)
  const destination = useTravelInformation((state) => state.destination)
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!destination.trim()) {
      <GeneralAlert title="Please enter a destination" icon={<MdOutlineErrorOutline />} />
      console.log("Please enter a destination");
      return;
    }
    console.log("Searching for:", destination.trim());
    navigate("/transport");
  }

  const handleDestinationClick = (destinationName: string) => {
    updateDestination(destinationName);
    console.log("Searching for:", destinationName);
    navigate("/transport");
  }

  return (
    <>
      <h1 className="mt-3 text-xl text-center font-semibold text-gray-800">
        Plan your next adventure
      </h1>
      
      <form className="flex flex-row gap-2 items-center justify-center px-4" onSubmit={handleSubmit}>
        <div className="relative flex-1 max-w-md">
          <input type="text" value={destination}  onChange={(e) => updateDestination(e.target.value)}  placeholder="Just choose where..." 
            className="mt-2 w-full p-3 pl-4 pr-10 thinBorder !rounded-lg" autoComplete="off" />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 mt-1" />
        </div>
        <Button type="submit"  className="mt-2 px-6 py-3 rounded-lg" disabled={!destination.trim()}> Search </Button>
      </form>

        <div className="w-full flex-col items-center gap-4 flex">
          <h1 className="mt-5 text-xl">Try to search these</h1>
          <Carousel className="w-3/4 lg:w-1/4">
            <CarouselContent>
              {destinations.map ((destinations) => (
                <CarouselItem key={destinations.name}>
                  <Card className="overflow-hidden h-80 p-0" onClick={() => handleDestinationClick(destinations.name)}>
                    <CardContent className="p-0 h-full relative">
                        <img  src={destinations.image}  className="w-full h-full object-cover"  alt={destinations.alt}  />
                        <div className="absolute inset-5 bg-opacity-30 flex  justify-center">
                          <h2 className="text-4xl font-bold text-white text-center drop-shadow-lg">{destinations.country}</h2>
                        </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
  </>
  )
}