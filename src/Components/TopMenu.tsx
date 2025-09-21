import { Button } from "./ui/button"
import { useNavigate, useLocation } from "react-router-dom"
import { MapPinHouse, HotelIcon, Briefcase, Settings, House } from "lucide-react"
import FullNameSymbol from "./Logos/FullNameSymbol"
import { useIsMobile } from "@/Hooks/useIsMobile"

export default function TopMenu() {
  const navigate = useNavigate()
  const location = useLocation()
  const isMobile = useIsMobile()

  return (
    <div className="absolute left-0 right-0 p-4 md:top-0">
      <FullNameSymbol size={300} className="ml-auto mr-auto" />
      <nav className="flex justify-evenly thinBorder p-4">
        <Button 
          className="w-1/6" 
          onClick={() => navigate("/home")}
          variant={location.pathname === "/home" ? "default" : "reverse"}
        >
          {isMobile ? <House /> : "Home"}
        </Button>
        <Button 
          className="w-1/6" 
          onClick={() => navigate("/places")}
          variant={location.pathname === "/places" ? "default" : "reverse"}
        >
          {isMobile ? <MapPinHouse /> : "Places"}
        </Button>
        <Button 
          className="w-1/6" 
          onClick={() => navigate("/hotels")}
          variant={location.pathname === "/hotels" ? "default" : "reverse"}
        >
          {isMobile ? <HotelIcon /> : "Hotels"}
        </Button>
        <Button 
          className="w-1/6" 
          onClick={() => navigate("/transport")}
          variant={location.pathname === "/transport" ? "default" : "reverse"}
        >
          {isMobile ? <Briefcase /> : "Transport"}
        </Button>
        <Button 
          className="w-1/6" 
          onClick={() => navigate("/settings")}
          variant={location.pathname === "/settings" ? "default" : "reverse"}
        >
          {isMobile ? <Settings /> : "Settings"}
        </Button>
      </nav>
    </div>
  )
}