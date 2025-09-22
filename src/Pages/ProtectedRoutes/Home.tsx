import type { JSX } from "react"
import { Card, CardContent } from "@/Components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/Components/ui/carousel"
import { destinations } from "@/Helpers/Types/elementOfTypes"


export default function Home(): JSX.Element {
  return (
    <div >
      <div className="m-auto items-center">
      <h1 className="mt-3 text-xl text-center">Plan your next adventure</h1>
      <input type="text" placeholder="Who knows what lies ahead?" className="mt-2 flex justify-center lg:w-1/3 p-2 thinBorder !rounded-lg w-11/12 m-auto" />
      </div>
        <div className="w-full flex-col items-center gap-4 flex">
          <h1 className="mt-5 text-xl">See the top 5 destinations</h1>
          <Carousel className="w-3/4 lg:w-1/4">
            <CarouselContent>
              {destinations.map ((destinations) => (
                <CarouselItem key={destinations.name}>
                  <Card className="overflow-hidden h-80 p-0">
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
    </div>
  
  )
}